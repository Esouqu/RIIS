<script lang="ts">
  import "normalize.css";
  import "../global.css";
  import Footer from "$lib/components/Footer.svelte";
  import HomeLogo from "$lib/components/HomeLogo.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import { theme } from "$lib/stores/stores";
  import { onMount } from "svelte";

  function handleThemeSwitch() {
    const body = document.querySelector("body");

    $theme = $theme === "light" ? "dark" : "light";
    body?.classList.toggle("dark-theme");
  }

  onMount(() => {
    const body = document.querySelector("body");

    if ($theme === "light") {
      body?.classList.remove("dark-theme");
    } else {
      body?.classList.add("dark-theme");
    }
  });
</script>

<div class="wrapper">
  <div class="header-wrapper">
    <!-- <HomeLogo /> -->
    <header class="header">
      <Navigation />
    </header>
    <ThemeSwitcher theme={$theme} switchHandler={() => handleThemeSwitch()} />
    <!-- <Footer /> -->
  </div>

  <slot />
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 310px 1fr;
    width: calc(100vw - (100vw - 100%));
    /* display: flex;
    flex-direction: row; */
    max-width: 1920px;
    margin: 0 auto;
  }
  .header-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
  }
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }
</style>
