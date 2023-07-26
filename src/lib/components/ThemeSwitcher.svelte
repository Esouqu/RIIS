<script lang="ts">
  import sun from "$lib/assets/sun.svg";
  import moon from "$lib/assets/moon.svg";
  import { scale } from "svelte/transition";

  export let theme: string = "light";
  export let switchHandler: () => void = () => {};
</script>

<button class="theme-switcher" type="button" on:click={() => switchHandler()}>
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

<style lang="scss">
  .theme-switcher {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    padding: 0px;
    margin: 0 auto;
    border: none;
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
    }
  }
</style>
