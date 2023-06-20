<script lang="ts">
  import { page } from "$app/stores";

  const pages = [
    { name: "Events", path: "/" },
    { name: "Operators", path: "/operators" },
    { name: "Recruiting", path: "/recruiting" },
    { name: "Headhunt", path: "/headhunt" },
    { name: "Store", path: "/store" },
  ];

  // const lastViewed = $page.url.split('/')
</script>

<nav>
  <!-- <pre>
    {JSON.stringify($page, null, 2)}
  </pre> -->
  <ul class="nav-list">
    {#each pages as currentPage}
      <li
        class="nav-list__item"
        class:active={$page.route.id === currentPage.path}
      >
        <a href={currentPage.path}>{currentPage.name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  .nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 25px;
    width: 250px;
    padding: 0;
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    font-family: "JetBrains Mono", sans-serif;
    user-select: none;

    &__item {
      position: relative;
      display: flex;
      width: 100%;
      text-transform: uppercase;
      transition: 0.2s;
      cursor: pointer;

      &.active {
        border-left: 4px solid #0ea5e9;
        color: var(--main-color-white);
        background-color: var(--main-color-blue);

        & a {
          cursor: default;
        }
      }

      &:hover:not(.active) {
        background-color: var(--bg-color-white-50);
      }

      & a {
        width: 100%;
        padding: 0 20px;
        text-decoration: none;
        color: var(--text-color-black);
        transition: 0.1s;
      }
    }
  }
</style>
