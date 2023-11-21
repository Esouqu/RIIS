<script lang="ts">
  export let text: string | number = "";
  export let icon: string = "";
  export let isSelected: boolean = false;
</script>

<button
  type="button"
  class="filter-button"
  class:selected={isSelected}
  on:click
>
  {#if text}
    <span>{text}</span>
  {/if}
  {#if icon}
    <div class="image-wrapper">
      <img src={icon} alt="" draggable="false" />
    </div>
  {/if}
</button>

<style lang="scss">
  .filter-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    width: var(--fltr-btn-w, 50px);
    height: var(--fltr-btn-h, 50px);
    padding: 5px;
    border: 0;
    box-shadow: var(--box-shadow-options);
    line-height: 1;
    color: var(--text-color);
    background-color: var(--bg-color);
    transition: 0.3s;
    user-select: none;
    cursor: pointer;

    &.selected {
      &::before {
        height: 100%;
      }

      & .image-wrapper img {
        filter: invert(0);
      }

      & span {
        color: white;
      }
    }

    &:hover:not(.selected)::before {
      height: 10%;
    }
    &:active:not(.selected)::before {
      height: 30%;
    }

    & span {
      z-index: 1;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 0px;
      background-color: var(--rarity-color-3);
      transition: 0.2s;
    }
    & .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: var(--fltr-btn-size, 50px);
      height: var(--fltr-btn-size, 50px);

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: invert(var(--img-invert));
      }
    }
  }
</style>
