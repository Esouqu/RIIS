<script lang="ts">
  import { page } from "$app/stores";
  import event from "$lib/assets/navigation icons/Event_icon.webp";
  import headhunt from "$lib/assets/navigation icons/Headhunt_icon.webp";
  import operator from "$lib/assets/navigation icons/Operator_icon.webp";
  import recruit from "$lib/assets/navigation icons/Recruit_icon.webp";
  import store from "$lib/assets/navigation icons/Store_icon.webp";

  export let isExtended: boolean = false;
  const pages = [
    { name: "Events", path: "/", icon: event },
    { name: "Operators", path: "/operators", icon: operator },
    { name: "Recruiting", path: "/recruiting", icon: recruit },
    { name: "Headhunt", path: "/headhunt", icon: headhunt },
    { name: "Store", path: "/store", icon: store },
  ];
</script>

<nav>
  <ul class="nav-list">
    {#each pages as { name, path, icon } (name)}
      <li
        class="nav-list__item"
        class:active={$page.route.id === path}
        class:extended={isExtended}
      >
        <a href={path} draggable="false">
          <div class="nav-list__icon">
            <img src={icon} alt={`${name} icon`} draggable="false" />
          </div>
          {#if isExtended}
            <span class="nav-list__name">
              {name}
            </span>
          {/if}
        </a>
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
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    font-family: "JetBrains Mono", sans-serif;
    user-select: none;

    &__item {
      position: relative;
      display: flex;
      padding: 10px 20px;
      text-transform: uppercase;
      transition: 0.2s;
      cursor: pointer;

      &.extended {
        padding: 10px 20px 28px 20px;
      }

      &.active {
        color: #f4f5f6;
        background-color: var(--rarity-color-3);

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background-color: #0ea5e9;
        }

        & a {
          color: #f4f5f6;
          cursor: default;
        }

        & img {
          filter: invert(var(--text-color));
        }
      }

      &:hover:not(.active) {
        background-color: var(--hover-color);
      }

      & a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-decoration: none;
        color: var(--text-color);
        transition: 0.1s;
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
