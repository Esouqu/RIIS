<script lang="ts">
  import { fade, slide } from "svelte/transition";

  export let iconUrl: string;
  export let isSelected: boolean = false;
  export let clickHandler: () => void = () => {};
</script>

<button
  type="button"
  class="button"
  class:selected={isSelected}
  on:click={clickHandler}
  in:slide={{ duration: 300 }}
  out:fade={{ duration: 200 }}
>
  <img src={iconUrl} alt="" draggable="false" />
</button>

<style lang="scss">
  .button {
    position: relative;
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: var(--p, 0);
    border: 0;
    background-color: var(--bg-color);
    opacity: 0.5;
    transition: 0.2s;
    cursor: pointer;

    & img {
      width: 100%;
      filter: invert(var(--invert, var(--img-invert)));
    }

    &:hover {
      opacity: 0.8;
    }

    &.selected {
      opacity: 1;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -4px;
        height: 50%;
        width: 4px;
        height: 100%;
        transform: translateY(-50%);
        background-color: var(--rarity-color-3);
      }
    }
  }
</style>
