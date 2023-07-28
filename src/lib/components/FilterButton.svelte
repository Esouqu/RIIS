<script lang="ts">
  export let text: string | number = "";
  export let icon: string = "";
  export let isSelected: boolean = false;
  export let handleClick: () => void;
</script>

<button
  type="button"
  class="filter-button"
  class:selected={isSelected}
  on:click={() => handleClick()}
>
  {#if { icon }}
    <div class="image-wrapper">
      <img src={icon} alt="" />
    </div>
  {/if}
  {#if text}
    <span>{text}</span>
  {/if}
</button>

<style lang="scss">
  .filter-button {
    width: 50px;
    height: 100%;
    padding: 5px;
    border: 0;
    background-color: var(--bg-accent-color);
    opacity: 0.4;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    &.selected {
      background-color: var(--rarity-color-3);
      opacity: 1;

      & img {
        filter: invert(0);
      }
    }
  }
  .image-wrapper {
    display: flex;

    & img {
      width: 100%;
      filter: invert(var(--img-invert));
    }
  }
</style>
