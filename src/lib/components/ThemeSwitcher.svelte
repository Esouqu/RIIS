<script lang="ts">
  import sun from "$lib/assets/sun.svg";
  import moon from "$lib/assets/moon.svg";
  import { scale } from "svelte/transition";

  export let theme: string = "light";
  export let switchHandler: () => void = () => {};
</script>

<div class="theme-switcher">
  <button type="button" on:click={() => switchHandler()}>
    {#if theme === "dark"}
      <img
        src={sun}
        alt="Sun Icon"
        transition:scale={{ duration: 200 }}
        draggable="false"
      />
    {:else}
      <img
        src={moon}
        alt="Moon Icon"
        transition:scale={{ duration: 200 }}
        draggable="false"
      />
    {/if}
  </button>
</div>

<style lang="scss">
  .theme-switcher {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;

    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      margin: 0 auto;
      border: none;
      border-radius: 9999px;
      background-color: unset;
      transition: 0.2s;

      &:hover {
        background-color: var(--bg-sub-accent-color-30);
      }
    }

    & img {
      position: absolute;
    }
  }
</style>
