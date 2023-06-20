<script lang="ts">
  import logo from '../assets/logo.png'
</script>

<div class="image-wrapper">
  <a href="/">
    <img src={logo} class="image" alt="rhodes logo" />
  </a>
</div>

<style lang="scss">
  .image-wrapper {
    position: absolute;
    top: 0;
    display: flex;
    width: 250px;
  }
  .image {
    width: 100%;
    filter: invert(1);
    transition: .1s linear;

    &:hover {
      filter: invert(1) drop-shadow(0px 4px 6px white);
      transform: scale(1.025);
    }
  }
</style>