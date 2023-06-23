<script lang="ts">
  export let isSelected: boolean = false;
  export let iconUrl: string = "";
  export let handleClick: () => void;
</script>

<button
  type="button"
  class="level-button"
  class:selected={isSelected}
  on:click={() => handleClick()}
>
  <img src={iconUrl} alt="" draggable="false" />
</button>

<style lang="scss">
  .level-button {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    border: 0;
    opacity: 0.5;
    background-color: var(--bg-accent-color);
    transition: 0.2s;
    cursor: pointer;

    & img {
      width: 30px;
      filter: invert(var(--img-invert));
    }

    &.selected {
      /* background-color: #0f0f0f; */
      opacity: 1;
    }
  }
</style>
