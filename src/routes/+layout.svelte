<script lang="ts">
  import "normalize.css";
  import "../global.css";
  import Footer from "$lib/components/Footer.svelte";
  import HomeLogo from "$lib/components/HomeLogo.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import { isDarkTheme } from "$lib/stores/stores";

  function handleThemeSwitch() {
    const body = document.querySelector("body");

    $isDarkTheme = !$isDarkTheme;
    body?.classList.toggle("dark-theme");
  }
</script>

<div class="wrapper">
  <div class="header-wrapper">
    <!-- <HomeLogo /> -->
    <header class="header">
      <Navigation />
    </header>
    <ThemeSwitcher
      isDarkTheme={$isDarkTheme}
      switchHandler={() => handleThemeSwitch()}
    />
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
