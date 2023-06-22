<script lang="ts">
  export let title: string = "Title";
  export let withTitle: boolean = true;
  export let withBorderRadius: boolean = true;
</script>

<div class="card-container" class:bordered={withBorderRadius}>
  {#if withTitle}
    <span>{title}</span>
  {/if}
  <slot />
</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: var(--cc-direction, column);
    justify-content: var(--cc-justify, center);
    align-items: var(--cc-align, center);
    gap: var(--cc-gap, 5px);
    width: var(--cc-width, auto);
    padding: var(--cc-p, 10px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background-color: var(--main-color-gray);
    transition: 0.2s;

    & span {
      font-size: var(--cc-titleSize, 14px);
      font-weight: 500;
    }

    &.bordered {
      border-radius: 0 0 10px 10px;
    }
  }
</style>
