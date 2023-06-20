<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  export let operatorId: string;
  export let name: string;
  export let imageUrl: string;
  export let rarity: number;
</script>

<a
  href={`${$page.route.id}/${operatorId}`}
  in:fade={{ duration: 200, delay: 200 }}
  out:fade={{ duration: 200 }}
>
  <div
    class="operator-portrait"
    class:rarity-1={rarity === 0}
    class:rarity-2={rarity === 1}
    class:rarity-3={rarity === 2}
    class:rarity-4={rarity === 3}
    class:rarity-5={rarity === 4}
    class:rarity-6={rarity === 5}
  >
    <img src={imageUrl} alt="" />
    <div class="operator-portrait__name">
      <span>{name}</span>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    text-decoration: none;
    color: var(--main-color-black);
  }
  .operator-portrait {
    position: relative;
    display: flex;
    width: 90px;
    height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: 0.2s;

    &:hover {
      transform: scale(1.3);
      /* background-image: var(--rarity-color-orange) !important; */
      z-index: 9999;

      & .operator-portrait__name {
        bottom: calc(100%);
        display: block;
        transition: 0.2s;
      }

      &.rarity-1 {
        background-image: linear-gradient(
          15deg,
          var(--sub-color-gray) 0%,
          var(--sub-color-gray) 100%
        );
      }
      &.rarity-2 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-lightgreen) 0%,
          var(--rarity-color-lightgreen) 100%
        );
      }
      &.rarity-3 {
        background-image: linear-gradient(
          15deg,
          var(--main-color-blue) 0%,
          var(--main-color-blue) 100%
        );
      }
      &.rarity-4 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-lightpurple) 0%,
          var(--rarity-color-lightpurple) 100%
        );
      }
      &.rarity-5 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-yellow) 0%,
          var(--rarity-color-yellow) 100%
        );
      }
      &.rarity-6 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-orange) 0%,
          var(--rarity-color-orange) 100%
        );
      }
    }

    &__name {
      position: absolute;
      bottom: 0;
      display: none;
      width: 100%;
      text-align: center;
      background-color: var(--main-color-gray);
    }

    & img {
      width: 100%;
      object-fit: cover;
    }

    &.rarity-1 {
      background-image: linear-gradient(
        15deg,
        var(--sub-color-gray) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-2 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-lightgreen) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-3 {
      background-image: linear-gradient(
        15deg,
        var(--main-color-blue) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-4 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-lightpurple) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-5 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-yellow) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-6 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-orange) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
  }
</style>
