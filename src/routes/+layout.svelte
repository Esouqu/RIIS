<script lang="ts">
  import "normalize.css";
  import arrowRight from "$lib/assets/ArrowRight.png";
  import arrowLeft from "$lib/assets/ArrowLeft.png";
  import HomeLogo from "$lib/components/HomeLogo.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import { sidebar } from "$lib/stores";
  import { scale } from "svelte/transition";

  $: isSidebarExtended = JSON.parse($sidebar);
</script>

<div class="wrapper" class:extended={isSidebarExtended}>
  <div class="sidebar-wrapper">
    <HomeLogo />
    <header class="header">
      <Navigation isExtended={isSidebarExtended} />
    </header>
    <footer class="footer">
      <ThemeSwitcher />
      <button
        class="footer__button"
        type="button"
        on:click={() => ($sidebar = isSidebarExtended ? "false" : "true")}
      >
        {#if isSidebarExtended}
          <img src={arrowLeft} alt="" draggable="false" transition:scale />
        {:else}
          <img src={arrowRight} alt="" draggable="false" transition:scale />
        {/if}
      </button>
    </footer>
  </div>

  <slot />
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 80px 1fr;
    width: calc(100vw - (100vw - 100%));
    max-width: 1920px;
    margin: 0 auto;
    transition: 0.2s;

    &.extended {
      grid-template-columns: 124px 1fr;
    }
  }
  .sidebar-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100vh;
    box-shadow: 0px 0 4px rgba(0, 0, 0, 0.3);
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
  }
  .footer {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      padding: 0;
      border: 0;
      border-radius: 100%;
      background-color: unset;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: var(--hover-color);
      }

      & img {
        position: absolute;
        width: 25px;
        filter: invert(var(--img-invert));
      }
    }
  }
</style>
