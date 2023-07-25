<script lang="ts">
  import logo from "../assets/logo.png";
</script>

<div class="logo">
  <a href="/">
    <img src={logo} class="logo__icon" alt="rhodes logo" />
  </a>
</div>

<style lang="scss">
  .logo {
    position: absolute;
    top: 0;
    display: flex;

    &__icon {
      width: 100%;
      filter: invert(var(--img-invert));
      transition: 0.2s;

      &:hover {
        transform: scale(1.025);
      }
    }
  }
</style>
