<script lang="ts">
  import formatLink from "$lib/utils/formatLink";
  import type { EventPost } from "@prisma/client";
  import Container from "./Container.svelte";

  export let events: Array<EventPost>;

  let activeLink: number = 0;
</script>

<div class="wrapper">
  <div class="label-wrapper">
    <span>Contents</span>
  </div>
  <Container --cont-p={"10px"} --cont-gap={"10px"} --cont-align={"start"}>
    {#each events as event, idx}
      <div class="title" class:active={activeLink === idx}>
        <a
          href={`#${formatLink(event.title)}`}
          on:click={() => (activeLink = idx)}
        >
          <h3>{event.title}</h3>
        </a>
      </div>
      {#if idx !== events.length - 1}
        <span class="line" />
      {/if}
    {/each}
  </Container>
</div>

<style lang="scss">
  .wrapper {
    min-width: 300px;
    max-width: 300px;
    padding: 0 30px;
    font-family: "JetBrains Mono", sans-serif;
  }
  .label-wrapper {
    padding: 0 10px;
    color: var(--text-color);
    background-color: var(--bg-color);
  }
  .title {
    padding: 0 10px;
    text-transform: uppercase;

    &.active {
      color: var(--bg-color);
      background-color: var(--rarity-color-3);
    }

    &:hover:not(.active) {
      background-color: var(--bg-sub-accent-color);
    }

    & a {
      color: unset;
      text-decoration: none;
    }

    & h3 {
      margin: 0;
    }
  }
  .line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
  }
</style>
