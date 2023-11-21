<script lang="ts">
  type SpinnerTypes = {
    size: string | number;
    color: string;
    unit: string;
    duration: string;
    pause: boolean;
  };

  export let color: SpinnerTypes["color"] = "#FF3E00";
  export let unit: SpinnerTypes["unit"] = "px";
  export let duration: SpinnerTypes["duration"] = "0.75s";
  export let size: SpinnerTypes["size"] = "60";
  export let pause: SpinnerTypes["pause"] = false;
</script>

<div
  class="loader"
  class:pause-animation={pause}
  style="--size: {size}{unit}; --color: {color}; --duration: {duration}"
/>

<style lang="scss">
  .loader {
    height: var(--size);
    width: var(--size);
    border: 6px solid white;
    rotate: 45deg;
    /* box-shadow: 0 0px 10px white; */
    /* animation: pulse 0.7s ease-out infinite alternate; */

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      width: 100%;
      height: 100%;
      outline: 6px solid white;
      /* background-color: white; */
      animation: aftershock 0.7s ease-in infinite;
    }
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    100% {
      scale: 1.5;
    }
  }
  @keyframes aftershock {
    0% {
      opacity: 1;
      scale: 1;
    }
    100% {
      opacity: 0;
      scale: 3;
    }
  }
</style>
