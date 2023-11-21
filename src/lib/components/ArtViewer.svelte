<script lang="ts">
  import ArtButton from "./ArtButton.svelte";
  import { draggable } from "@neodrag/svelte";
  import { onMount } from "svelte";
  import type { Art } from "@prisma/client";
  import CardContainer from "./CardContainer.svelte";
  import getEliteIcon from "$lib/utils/getEliteIcon";

  export let artList: Art[] = [];
  export let artistName: string | null;
  // export let factions: Array<string> = [];
  // export let vaName: string;

  const minScale = 0.7;
  const maxScale = 3;

  let currentImageIdx = 0;
  let artScale = 1;

  onMount(async () => {
    await Promise.all(
      artList.map((art) => {
        return new Promise((resolve, reject) => {
          const img = new Image();

          img.onload = resolve;
          img.onerror = reject;
          img.src = art.full;
        });
      })
    );
  });

  function handleArtButtonClick(idx: number) {
    artScale = 1;
    currentImageIdx = idx;
  }

  function handleArtScroll(e: WheelEvent) {
    const scrollUp = e.deltaY < 0;

    if (scrollUp && artScale < maxScale) {
      artScale += 0.1;
    } else if (!scrollUp && artScale > minScale) {
      artScale -= 0.1;
    }
  }
</script>

<div>
  <div class="buttons-wrapper">
    {#each artList as { name, portrait }, idx}
      <ArtButton
        --p={name === "Shop" ? "0" : "5px"}
        --invert={name === "Shop" ? "0" : null}
        iconUrl={name === "Shop" ? portrait : getEliteIcon(name)}
        isSelected={idx === currentImageIdx}
        clickHandler={() => handleArtButtonClick(idx)}
      />
    {/each}
  </div>
  <div class="art-list-wrapper">
    {#each artList as { name, full }, idx}
      <div
        class="art-wrapper"
        class:active={idx === currentImageIdx}
        style="--image-offset: {idx > currentImageIdx ? -300 : 300}px;"
        use:draggable
        on:wheel|preventDefault={(e) => handleArtScroll(e)}
      >
        <!-- <div class="image-placeholder" /> -->
        <img
          src={full}
          alt="{name} art"
          style:transform={`scale(${artScale})`}
        />
      </div>
    {/each}
  </div>
  <div class="info-wrapper">
    <CardContainer title="Info" --cc-align={"start"}>
      <div class="info-value">
        <span>Artist:</span>
        <span>{artistName ?? "none"}</span>
      </div>
      <div class="info-value">
        <span>Voice:</span>
        <span>{"none"}</span>
      </div>
    </CardContainer>
  </div>
</div>

<style lang="scss">
  .buttons-wrapper {
    position: absolute;
    top: 30px;
    left: 40px;
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
    z-index: 9999;
  }
  .art-wrapper {
    position: absolute;
    z-index: 0;
    display: flex;
    height: 100%;
    width: 100%;
    translate: 0 var(--image-offset);
    opacity: 0;
    transition: translate 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
      opacity 0.4s linear;
    cursor: grab;

    &.active {
      z-index: 1;
      translate: 0 0;
      opacity: 1;
    }
    &:active {
      transition: none;
      z-index: 9999;
      cursor: grabbing;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 0.2s;
      filter: drop-shadow(2px 4px 6px black);
    }
  }
  .info-wrapper {
    position: absolute;
    left: 40px;
    bottom: 30px;
    display: flex;
    gap: 10px;
  }
  .info-value {
    width: 100%;
    padding: 0 10px;
  }
  .art-list-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
  }
  /* .image-placeholder {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: 0.2s;
    background-image: linear-gradient(
      15deg,
      var(--main-color-blue) 0%,
      rgba(244, 245, 246, 0) 90%
    );
  } */
</style>
