<script lang="ts">
  export let operatorId: string;
  export let name: string;
  export let imageUrl: string;
  export let rarity: number;
  export let isInteractable: boolean;
</script>

<a href={`operators/${operatorId}`} on:click>
  <div
    class="operator-portrait rarity-{rarity}"
    class:interactable={isInteractable}
  >
    <img src={imageUrl} alt="" draggable="false" />
    <div class="operator-portrait__name">
      <span>{name}</span>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    text-decoration: none;
    color: var(--text-color);
  }
  .operator-portrait {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 100%;
    box-shadow: var(--box-shadow-options);
    transition: 0.2s;
    pointer-events: all;

    &:not(.interactable) {
      pointer-events: none;
    }

    &:hover {
      transform: scale(1.3);
      z-index: 9999;

      & .operator-portrait__name {
        top: 100%;
        display: block;
        transition: 0.2s;
      }

      &.rarity-0 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-1) 0%,
          var(--rarity-color-1) 100%
        );
      }
      &.rarity-1 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-2) 0%,
          var(--rarity-color-2) 100%
        );
      }
      &.rarity-2 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-3) 0%,
          var(--rarity-color-3) 100%
        );
      }
      &.rarity-3 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-4) 0%,
          var(--rarity-color-4) 100%
        );
      }
      &.rarity-4 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-5) 0%,
          var(--rarity-color-5) 100%
        );
      }
      &.rarity-5 {
        background-image: linear-gradient(
          15deg,
          var(--rarity-color-6) 0%,
          var(--rarity-color-6) 100%
        );
      }
    }

    &__name {
      position: absolute;
      top: 0;
      display: none;
      min-width: 100%;
      text-align: center;
      background-color: var(--bg-color);
    }

    & img {
      width: 100%;
      object-fit: cover;
    }

    &.rarity-0 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-1) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-1 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-2) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-2 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-3) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-3 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-4) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-4 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-5) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
    &.rarity-5 {
      background-image: linear-gradient(
        15deg,
        var(--rarity-color-6) 0%,
        rgba(244, 245, 246, 0) 90%
      );
    }
  }
</style>
