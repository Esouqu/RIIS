<script lang="ts">
  export let text: string | null;
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
  <span>{text ? text : "Conviction"}</span>
</div>

<style lang="scss">
  .tag {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 5px;
    box-shadow: var(--box-shadow-options);
    background-color: var(--bg-color);

    & span {
      position: relative;
      z-index: 1;
      font-weight: 500;
    }

    &_selectable {
      user-select: none;
      cursor: pointer;

      &:hover:not(.selected)::before {
        height: 10%;
      }
      &:active:not(.selected)::before {
        height: 30%;
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

      &.selected {
        color: #f4f5f6;

        &::before {
          height: 100%;
        }
      }
    }
  }
</style>
