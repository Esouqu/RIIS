<script lang="ts">
  export let text: string | null = null;
  export let iconUrl: string | null = null;
  export let isOnlyIcon: boolean = false;
  export let isSelected: boolean = false;
</script>

<div class="tag" class:selected={isSelected} on:click on:keydown>
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    background-color: var(--main-color-ultra-white);
    transition: 0.2s;
    opacity: 0.4;
    user-select: var(--tag-uSelect, auto);
    cursor: var(--tag-cursor, auto);

    &.selected {
      opacity: 1;
      color: var(--main-color-white);
      background-color: var(--main-color-blue);
    }

    &:hover {
      opacity: 0.7;
    }

    & span {
      font-weight: 500;
    }

    & img {
      height: 100%;
    }
  }
</style>
