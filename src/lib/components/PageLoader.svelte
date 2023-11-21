<script lang="ts">
  import { fade } from "svelte/transition";
  import Loader from "./Loader.svelte";
</script>

<div class="page-loader" transition:fade={{ duration: 300 }}>
  <Loader />
</div>

<style lang="scss">
  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 70%);
  }
</style>
