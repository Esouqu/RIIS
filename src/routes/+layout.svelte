<script>
  import "normalize.css";
  import Footer from "$lib/components/Footer.svelte";
  import HomeLogo from "$lib/components/HomeLogo.svelte";
  import Navigation from "$lib/components/Navigation.svelte";
</script>

<div class="wrapper">
  <div class="header-wrapper">
    <!-- <HomeLogo /> -->
    <header class="header">
      <Navigation />
    </header>
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
