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
  {value}
  on:mouseup
  on:input
/>

<style lang="scss">
  .range-slider {
    appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #666666;
    user-select: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 27px;
      height: 27px;
      transform: rotate(45deg);
      box-shadow: 0 0 5px black;
      background-color: white;
      background-size: contain;
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
