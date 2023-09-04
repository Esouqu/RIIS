<script lang="ts">
  export let value: number;
  export let min: number = 1;
  export let max: number = 10;
  export let step: number = 1;
</script>

<input
  id="level-range"
  class="range-slider"
  type="range"
  {min}
  {max}
  {step}
  bind:value
/>

<style lang="scss">
  .range-slider {
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    box-shadow: inset 0 2px rgba(0, 0, 0, 0.3);
    background: #c0c0c0;
    user-select: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 27px;
      height: 27px;
      transform: rotate(45deg);
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
      background-color: white;
      background-size: contain;
      user-select: none;
      cursor: pointer;
    }

    &::-webkit-slider-thumb:hover {
      filter: brightness(80%);
    }

    &::-webkit-slider-thumb:active {
      filter: brightness(150%);
    }
  }
</style>
