<script lang="ts">
  export let text: string | null = null;
  export let iconUrl: string | null = null;
  export let isOnlyIcon: boolean = false;
  export let isSelected: boolean = false;
  export let isSelectable: boolean = false;
</script>

<div
  class="tag"
  class:selected={isSelected}
  class:tag_selectable={isSelectable}
  on:click
  on:keydown
>
  {#if iconUrl}
    <img src={iconUrl} alt="" />
  {/if}
  {#if !isOnlyIcon}
    <span>{text}</span>
  {/if}
</div>

<style lang="scss">
  .tag {
    padding: 5px;
    box-shadow: var(--box-shadow-options);
    background-color: var(--bg-accent-color);
    transition: 0.2s;
    opacity: 1;

    & span {
      font-weight: 500;
    }

    & img {
      height: 100%;
      filter: invert(var(--img-invert));
      transition: 0.2s;
    }

    &_selectable {
      opacity: 0.4;
      user-select: none;
      cursor: pointer;

      &.selected {
        opacity: 1;
        color: #f4f5f6;
        background-color: var(--rarity-color-3);
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
