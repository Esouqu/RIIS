<script lang="ts">
  export let htmlTag: string = "div";
</script>

<svelte:element this={htmlTag} class="container">
  <slot />
</svelte:element>

<style lang="scss">
  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: var(--cont-justify, center);
    align-items: var(--cont-align, center);
    gap: var(--cont-gap, 0);
    box-sizing: border-box;
    width: var(--cont-w, 100%);
    height: var(--cont-h, 100%);
    padding: var(--cont-p, var(--cont-py, 0px) var(--cont-px, 0px));
    box-shadow: var(--box-shadow-options);
    background-color: var(--cont-bg, var(--bg-color));

    &::-webkit-scrollbar {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
