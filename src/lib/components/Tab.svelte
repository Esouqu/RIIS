<script lang="ts">
  export let isSelected: boolean = false;
  export let iconUrl: string = "";
  export let clickHandler: () => void = () => {};
</script>

<button
  type="button"
  class="tab"
  class:selected={isSelected}
  on:click={() => clickHandler()}
>
  <div>
    <img src={iconUrl} alt="" draggable="false" />
  </div>
</button>

<style lang="scss">
  .tab {
    display: flex;
    justify-content: center;
    width: 100%;
    border: 0;
    background-color: var(--main-color-ultra-white);
    opacity: 0.5;
    transition: 0.2s;
    cursor: pointer;

    & div {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 40px;
      padding: 5px 0;
      user-select: none;

      & img {
        height: 100%;
      }
    }

    &:hover {
      opacity: 0.8;
    }

    &.selected {
      opacity: 1;
    }
  }
</style>
