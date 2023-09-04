<script lang="ts">
  export let tabsIcons: string[] = [];
  export let activeTab = 0;
</script>

<div class="tabbed-card">
  <div class="tabs-wrapper">
    {#each tabsIcons as icon, idx}
      <button
        type="button"
        class="tab"
        class:selected={activeTab === idx}
        on:click={() => (activeTab = idx)}
      >
        <div>
          <img src={icon} alt="" draggable="false" />
        </div>
      </button>
    {/each}
  </div>

  <div class="card">
    <div class="card-title">
      <slot name="title" />
    </div>

    <div class="card-content">
      <slot name="content" />
    </div>
  </div>

  {#if $$slots.additions}
    <slot name="additions" />
  {/if}
</div>

<style lang="scss">
  .tabbed-card {
    width: var(--tabbed-w, 100%);
  }
  .tabs-wrapper {
    display: flex;
    gap: 2px;
  }
  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 0;
    background-color: var(--bg-accent-color);
    opacity: 0.5;
    transition: 0.2s;
    cursor: pointer;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 5px 0;
      user-select: none;

      & img {
        width: 40px;
      }
    }

    &:hover {
      opacity: 0.8;
    }

    &.selected {
      opacity: 1;
    }
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 25px;
    background-image: linear-gradient(
      180deg,
      var(--bg-accent-color) 0%,
      var(--bg-color) 150px
    );

    &-content {
      padding: 0 5px;
    }
  }
</style>
