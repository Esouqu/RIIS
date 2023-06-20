<script lang="ts">
  import { fly } from "svelte/transition";
  import ArtButton from "./ArtButton.svelte";
  import { draggable } from "@neodrag/svelte";
  import { onMount } from "svelte";
  import type { Art } from "@prisma/client";
  import CardContainer from "./CardContainer.svelte";
  import getEliteIcon from "$lib/utils/getEliteIcon";

  export let artList: Array<Art> = [];
  // export let factions: Array<string> = [];
  export let artistName: string | null;
  // export let vaName: string;

  let currentImageIdx = 0;
  let flyDirection = 0;
  let isDragged = false;
  let artScale = 1;

  $: currentArt = artList[currentImageIdx].full;

  function handleArtButtonClick(idx: number) {
    const isPositive = currentImageIdx - idx > 0;

    artScale = 1;

    if (isPositive) {
      flyDirection = 300;
    } else {
      flyDirection = -300;
    }
    currentImageIdx = idx;
  }
  function handleArtScroll(e: WheelEvent) {
    const scrollUp = e.deltaY < 0;
    const minScale = 0.7;
    const maxScale = 3;
    e.preventDefault();

    if (scrollUp && artScale < maxScale) {
      artScale += 0.1;
    } else if (!scrollUp && artScale > minScale) {
      artScale -= 0.1;
    }
  }

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
</script>

<div>
  <div class="buttons-wrapper">
    {#each artList as { name, portrait }, idx}
      <ArtButton
        --p={name === "Shop" ? "0" : "5px"}
        --invert={name === "Shop" ? "0" : "1"}
        iconUrl={name === "Shop" ? portrait : getEliteIcon(name)}
        isSelected={idx === currentImageIdx}
        clickHandler={() => handleArtButtonClick(idx)}
      />
    {/each}
  </div>
  {#key currentArt}
    <div
      class="art-wrapper"
      class:dragged={isDragged}
      use:draggable={{
        onDragStart: () => (isDragged = true),
        onDragEnd: () => (isDragged = false),
      }}
      in:fly={{ y: flyDirection, duration: 500 }}
      out:fly={{
        y: flyDirection > 0 ? -Math.abs(flyDirection) : Math.abs(flyDirection),
        duration: 500,
      }}
      on:wheel={(e) => handleArtScroll(e)}
      on:introend={() => (flyDirection = 0)}
    >
      <img src={currentArt} alt="" style:transform={`scale(${artScale})`} />
    </div>
  {/key}
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
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column-reverse;
    gap: 2px;
    z-index: 9999;
  }
  .art-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
    transition: 0.2s;

    &.dragged {
      transition: none;
      z-index: 9999;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: 0.2s;
    }
  }
  .info-wrapper {
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    gap: 10px;
    /* padding: 10px; */
  }
  .info-value {
    width: 100%;
    padding: 0 10px;
    /* text-align: center; */
    /* font-size: 20px; */
  }
</style>
