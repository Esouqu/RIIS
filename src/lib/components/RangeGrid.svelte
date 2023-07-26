<script lang="ts">
  interface ICell {
    row: number;
    col: number;
  }

  export let cells: ICell[] = [];
</script>

<div class="range-grid">
  <div class="range-grid__inner">
    {#each cells as cell}
      <span
        class={`range-grid__cell row-${
          cell.row >= 0 ? cell.row + 1 : cell.row - 1
        } col-${cell.col >= 0 ? cell.col + 1 : cell.col - 1}`}
      />
    {/each}
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
      grid-auto-columns: 20px;
      grid-auto-rows: 20px;
      gap: 2px;
    }
    &__cell {
      grid-area: var(--rg-row) / var(--rg-col) / auto / auto;
      border: 2px solid var(--text-color);
      box-shadow: var(--box-shadow-options);
      background-color: var(--bg-color);
      user-select: none;

      &.row-1.col-1 {
        background-color: var(--text-color);
      }

      &.row-1 {
        grid-row: 1 / auto;
      }
      &.row-2 {
        grid-row: 2 / auto;
      }
      &.row-3 {
        grid-row: 3 / auto;
      }
      &.row-4 {
        grid-row: 4 / auto;
      }
      &.row-5 {
        grid-row: 5 / auto;
      }
      &.row--1 {
        grid-row: -1 / auto;
      }
      &.row--2 {
        grid-row: -2 / auto;
      }
      &.row--3 {
        grid-row: -3 / auto;
      }
      &.row--4 {
        grid-row: -4 / auto;
      }
      &.row--5 {
        grid-row: -5 / auto;
      }

      &.col-1 {
        grid-column: 1 / auto;
      }
      &.col-2 {
        grid-column: 2 / auto;
      }
      &.col-3 {
        grid-column: 3 / auto;
      }
      &.col-4 {
        grid-column: 4 / auto;
      }
      &.col-5 {
        grid-column: 5 / auto;
      }
      &.col--1 {
        grid-column: -1 / auto;
      }
      &.col--2 {
        grid-column: -2 / auto;
      }
      &.col--3 {
        grid-column: -3 / auto;
      }
      &.col--4 {
        grid-column: -4 / auto;
      }
      &.col--5 {
        grid-column: -5 / auto;
      }
    }
  }
</style>
