<script lang="ts">
  import { fade } from "svelte/transition";

  export let htmlTag: string = "div";
  export let id: string = "";
  export let isHovered: boolean = false;
</script>

<svelte:element
  this={htmlTag}
  class="container"
  class:hovered={isHovered}
  id={id ? id : null}
  on:mouseleave
  on:mouseenter
  transition:fade={{ duration: 200 }}
>
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
    width: 100%;
    height: 100%;
    padding: var(--cont-p, var(--cont-py, 0px) var(--cont-px, 0px));
    outline: 2px solid var(--sub-color-gray);
    outline-offset: -2px;
    background-color: var(--bg-color-white-50);
    transition: 0.2s;
    overflow-y: var(--cont-overflow, hidden);
    overflow-x: hidden;

    &::-webkit-scrollbar {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
    }

    &.hovered {
      outline: 2px solid #f4f5f650;
      background-image: linear-gradient(
        0deg,
        var(--main-color-white) 0%,
        #f4f5f600 83.05%
      );
      cursor: pointer;
      /* background-color: var(--main-color-white); */
    }
  }
</style>
