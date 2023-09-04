<script lang="ts">
  import sun from "$lib/assets/sun.svg";
  import moon from "$lib/assets/moon.svg";
  import { scale } from "svelte/transition";
  import { theme } from "$lib/stores";
  import { onMount } from "svelte";

  let body: HTMLBodyElement | null;

  function handleThemeSwitch() {
    $theme = $theme === "dark" ? "light" : "dark";
    body?.classList.toggle("dark-theme");
  }

  onMount(() => {
    body = document.querySelector("body");

    if ($theme === "dark") {
      body?.classList.add("dark-theme");
    }
  });
</script>

<button
  class="theme-switcher"
  type="button"
  on:click={() => handleThemeSwitch()}
>
  {#key $theme}
    <img
      src={$theme === "dark" ? sun : moon}
      alt="Sun Icon"
      transition:scale={{ duration: 200 }}
      draggable="false"
    />
  {/key}
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
