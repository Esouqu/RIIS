<script lang="ts">
  import type { ICell } from "$lib/interfaces";

  export let cells: ICell[] = [];

  $: isHaveOrigin =
    cells.filter((cell) => cell.row === 0 && cell.col === 0).length > 0;
</script>

<div class="range-grid">
  <div class="range-grid__inner">
    {#each cells as { row, col } (`${row}${col}`)}
      {@const rowPlus = row >= 0 ? row + 1 : row - 1}
      {@const colPlus = col >= 0 ? col + 1 : col - 1}
      {@const isOrigin = row === 0 && col === 0}

      <span
        class="range-grid__cell"
        class:origin={isOrigin}
        style="--cell-row: {rowPlus}; --cell-col: {colPlus}"
      />
    {/each}
    {#if !isHaveOrigin}
      <span
        class="range-grid__cell"
        class:origin={true}
        style="--cell-row: {1}; --cell-col: {1}"
      />
    {/if}
  </div>
</div>

<style lang="scss">
  .range-grid {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &__inner {
      display: grid;
      grid-auto-columns: 17px;
      grid-auto-rows: 17px;
      gap: 2px;
    }
    &__cell {
      grid-area: var(--cell-row) / var(--cell-col) / auto / auto;
      border: 2px solid var(--text-color);
      box-shadow: var(--box-shadow-options);
      background-color: var(--bg-color);
      user-select: none;

      &.origin {
        background-color: var(--text-color);
      }
    }
  }
</style>
