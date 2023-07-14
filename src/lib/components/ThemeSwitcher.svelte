<script lang="ts">
  import sun from "$lib/assets/sun.svg";
  import moon from "$lib/assets/moon.svg";

  export let isDarkTheme: boolean = false;
  export let switchHandler: () => void = () => {};
</script>

<form method="POST" class="theme-switcher">
  <button
    formaction="/?/setTheme&theme=light"
    type="button"
    class="theme-switcher__button"
    on:click={() => switchHandler()}
  >
    <img src={sun} alt="Sun icon of theme switcher" draggable="false" />
  </button>

  <span
    class="theme-switcher__select-indicator"
    class:dark={isDarkTheme}
    class:light={!isDarkTheme}
  />

  <button
    formaction="/?/setTheme&theme=dark"
    type="button"
    class="theme-switcher__button"
    on:click={() => switchHandler()}
  >
    <img src={moon} alt="Moon icon of theme switcher" draggable="false" />
  </button>
</form>

<style lang="scss">
  .theme-switcher {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    height: 30px;
    margin: 0 auto;
    border-radius: 9999px;
    background-color: var(--bg-second-color);
    transition: 0.3s;

    &__select-indicator {
      position: absolute;
      z-index: 1;
      padding: 20px;
      border-radius: 9999px;
      box-shadow: var(--box-shadow-options);
      background-color: #f4f5f6;
      transition: 0.3s;

      &.dark {
        right: 0;
      }
      &.light {
        left: 0;
      }
    }

    &__button {
      position: absolute;
      z-index: 2;
      display: flex;
      width: 40px;
      border: unset;
      background-color: unset;
      cursor: pointer;

      &:first-child {
        left: 0;
      }

      &:last-child {
        right: 0;
      }

      & img {
        width: 100%;
        filter: invert(1);
      }
    }
  }
</style>
