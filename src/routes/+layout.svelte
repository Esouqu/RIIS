<script>
  import "normalize.css";
  import "../global.css";
  import Footer from "$lib/components/Footer.svelte";
  import HomeLogo from "$lib/components/HomeLogo.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
  import ThemeSwitcher from "$lib/components/ThemeSwitcher.svelte";
  import { isDarkTheme } from "$lib/stores/stores";

  function addDarkTheme() {
    const body = document.querySelector("body");
    $isDarkTheme = true;
    body?.classList.add("dark-theme");
  }
  function removeDarkTheme() {
    const body = document.querySelector("body");
    $isDarkTheme = false;
    body?.classList.remove("dark-theme");
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
      moonClickHandler={() => addDarkTheme()}
      sunClickHandler={() => removeDarkTheme()}
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
