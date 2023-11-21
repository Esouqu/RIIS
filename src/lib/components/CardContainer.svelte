<script lang="ts">
  export let title: string | null = null;
</script>

<div class="card-container">
  {#if title}
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
    box-shadow: var(--box-shadow-options);
    background-color: var(--bg-sub-color-70);
    /* backdrop-filter: blur(7px) opacity(0.7); */
    overflow: var(--cc-overflow);

    & span {
      font-size: var(--cc-titleSize, 14px);
      font-weight: 500;
    }
  }
</style>
