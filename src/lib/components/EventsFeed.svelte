<script lang="ts">
  import { slide } from "svelte/transition";
  import { linear } from "svelte/easing";
  import Container from "./Container.svelte";
  import type { EventPost } from "@prisma/client";
  import formatLink from "$lib/utils/formatLink";

  export let eventsData: Array<EventPost>;

  let hoveredArticle: string | null = null;
</script>

<div>
  {#each eventsData as event, idx}
    <Container
      --px={"30px"}
      --py={"20px"}
      htmlTag="article"
      id={formatLink(event.title)}
      isHovered={hoveredArticle === event.title}
      on:mouseleave={() => (hoveredArticle = null)}
      on:mouseenter={() => (hoveredArticle = event.title)}
    >
      <div class="top-wrapper">
        <div class="title-wrapper">
          <div>{event.type}</div>
          <h2>{event.title}</h2>
        </div>
        <span class="date">{event.startTime}</span>
      </div>
      <span class="line" />
      {#if idx === 0}
        <div class="image-wrapper">
          <img src={event.imageUrl} alt="" />
        </div>
      {:else}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          magnam, aliquid nemo nostrum veniam suscipit provident reiciendis
          corporis ut cumque sequi recusandae non iusto autem modi ipsam facere
          cum. Molestias adipisci rem obcaecati laudantium, facilis hic
          exercitationem eligendi nam voluptas!
        </p>
      {/if}
      {#if hoveredArticle === event.title}
        <div
          class="button-wrapper"
          transition:slide={{
            duration: 100,
            easing: linear,
          }}
        >
          <button>READ MORE+</button>
        </div>
      {/if}
    </Container>
  {/each}
</div>

<style lang="scss">
  .top-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;

    & .title-wrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 4px;

      & h2 {
        margin: 0;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }

      & div {
        position: relative;
        font-weight: 600;
        text-transform: uppercase;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 4px;
          background-color: rgb(14 165 233);
        }
      }
    }

    & .date {
      display: flex;
      align-items: flex-start;
      text-align: right;
      min-width: 120px;
      max-width: 120px;
    }
  }
  .line {
    width: 100%;
    height: 2px;
    margin: 10px 0;
    background-color: var(--main-color-black);
  }
  .image-wrapper {
    display: flex;
    width: 100%;

    & img {
      width: 100%;
    }
  }
  .button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    & button {
      padding: 5px 10px;
      border: none;
      color: white;
      background-color: var(--main-color-blue);
      transition: 0.2s;
      cursor: pointer;
    }
  }

  p {
    margin: 0;
  }
</style>
