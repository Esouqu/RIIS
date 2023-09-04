<script lang="ts">
  import { fade } from "svelte/transition";

  export let image: string;
  export let type: string;
  export let title: string;
  export let details: string;
  export let time: string;

  let isHovered: boolean;
</script>

<div
  class="event-card"
  on:mouseover={() => (isHovered = true)}
  on:mouseout={() => (isHovered = false)}
  on:focus
  on:blur
>
  <img src={image} alt="" />
  {#if isHovered}
    <div class="event-card__info" transition:fade={{ duration: 200 }}>
      <span>{type}</span>
      <span>{title}</span>
      <span>{details}</span>
      <span>{time}</span>
    </div>
  {/if}
</div>

<style lang="scss">
  .event-card {
    position: relative;
    display: flex;
    height: 198px;
    transform: scale(1);
    cursor: pointer;

    &__info {
      position: absolute;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background-color: var(--rarity-color-3);
    }

    & img {
      width: 100%;
      object-fit: cover;
      object-position: top;
      /* filter: brightness(50%); */
    }
  }
</style>
