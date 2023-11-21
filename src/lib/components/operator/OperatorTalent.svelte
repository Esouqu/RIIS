<script lang="ts">
  import type { ICell } from "$lib/interfaces";
  import replaceTextTags from "$lib/utils/replaceTextTags";
  import RangeGrid from "../RangeGrid.svelte";

  export let title: string;
  export let description: string;
  export let range: ICell[] | null = null;
</script>

<div class="talent">
  <div class="talent__title">
    <h2>{title}</h2>
  </div>
  <div class="talent__description">
    <p>
      {#each replaceTextTags(description) as { text, value }}
        {#if text && value}
          <span style="color: var(--rarity-color-3);">{value}</span>
        {:else}
          {text}
        {/if}
      {/each}
    </p>
    {#if range}
      <RangeGrid cells={range} />
    {/if}
  </div>
</div>

<style lang="scss">
  .talent {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;

    &__title {
      & h2 {
        margin: 0;
        font-size: var(--tl-fontSize, 20px);
        font-weight: 500;
        line-height: 100%;
        text-transform: capitalize;
      }
    }

    &__description {
      display: flex;
      gap: 10px;

      & p {
        margin: 0;
        font-variant-numeric: tabular-nums;
      }
    }
  }
</style>
