<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import event from "$lib/assets/navigation icons/Event_icon.webp";
  import headhunt from "$lib/assets/navigation icons/Headhunt_icon.webp";
  import operator from "$lib/assets/navigation icons/Operator_icon.webp";
  import recruit from "$lib/assets/navigation icons/Recruit_icon.webp";
  import store from "$lib/assets/navigation icons/Store_icon.webp";

  export let isExtended: boolean = false;
  const pages = [
    { name: "Home", path: "/", icon: event, isReadyToShow: true },
    {
      name: "Operators",
      path: "/operators",
      icon: operator,
      isReadyToShow: true,
    },
    {
      name: "Recruitment",
      path: "/recruitment",
      icon: recruit,
      isReadyToShow: true,
    },
    {
      name: "Headhunt",
      path: "/headhunt",
      icon: headhunt,
      isReadyToShow: false,
    },
    { name: "Store", path: "/store", icon: store, isReadyToShow: false },
  ];
</script>

<nav>
  <ul class="nav-list">
    {#each pages as { name, path, icon, isReadyToShow } (name)}
      <li
        class="nav-list__item"
        class:active={$page.route.id === path}
        class:extended={isExtended}
        class:disabled={!isReadyToShow}
        on:click={() => isReadyToShow && goto(path)}
        on:keydown={() => isReadyToShow && goto(path)}
      >
        <div class="nav-list__icon">
          <img src={icon} alt={`${name} icon`} draggable="false" />
        </div>
        {#if isExtended && isReadyToShow}
          <span class="nav-list__name">
            {name}
          </span>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  nav {
    width: 100%;
  }
  .nav-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    line-height: 1;
    font-size: 12.8px;
    font-weight: 600;
    user-select: none;

    &__item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      text-transform: uppercase;
      color: var(--text-color);
      transition: 0.2s;
      cursor: pointer;

      &.disabled {
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          background-image: repeating-linear-gradient(
            45deg,
            #0f0f0f,
            #0f0f0f 10px,
            var(--rarity-color-5) 10px,
            var(--rarity-color-5) 20px
          );
          opacity: 0.7;
        }

        &:hover {
          cursor: default;
        }
      }

      &.extended {
        padding: 10px 20px 28px 20px;
      }

      &.active {
        color: #f4f5f6;
        background-color: var(--rarity-color-3);
        cursor: default;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background-color: #0ea5e9;
        }

        & img {
          filter: invert(var(--text-color));
        }
      }

      &:hover:not(.active):not(.disabled) {
        background-color: var(--hover-color);
      }
    }

    &__icon {
      display: flex;
      width: 40px;

      & img {
        width: 100%;
        filter: invert(var(--img-invert));
      }
    }

    &__name {
      position: absolute;
      bottom: 10px;
    }
  }
</style>
