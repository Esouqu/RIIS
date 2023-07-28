<script lang="ts">
  import type { Range, RangeCell, TalentLevel } from "@prisma/client";
  import TalentButton from "./TalentButton.svelte";
  import replaceTextTags from "$lib/utils/replaceTextTags";
  import getEliteIcon from "$lib/utils/getEliteIcon";
  import getPotentialIcon from "$lib/utils/getPotentialIcon";
  import CardContainer from "./CardContainer.svelte";
  import RangeGrid from "./RangeGrid.svelte";

  type gradientType = "top" | "bottom" | "left" | "right" | "center";
  type titlePositionType = "left" | "right" | "center";
  interface IRangeConnect {
    range: Range & {
      grid: RangeCell[];
    };
  }

  export let title: string = "title";
  export let titlePosition: titlePositionType = "center";
  export let titleGradient: gradientType = "left";
  export let withIcon: boolean = false;
  export let iconUrl: string = "";
  export let description: string = "description";
  export let withBorderRadius: boolean = true;
  export let levels: Array<TalentLevel & IRangeConnect> = [];

  let currentLevel: TalentLevel & IRangeConnect = levels[0];
  let isPotentialActive: boolean = false;

  $: levelsWithoutPotential = levels.filter((level) => level.potential === 0);
  $: levelsWithPotential = levels.filter((level) => level.potential !== 0);

  function changeDescription() {
    const currentPhaseDescription = levelsWithoutPotential.find(
      (lvl) => lvl.phase === currentLevel.phase
    )?.description;
    const currentPotentialDescription = levelsWithPotential.find(
      (lvl) => lvl.phase === currentLevel.phase
    )?.description;

    if (isPotentialActive && currentPotentialDescription) {
      description = currentPotentialDescription;
    } else if (currentPhaseDescription) {
      description = currentPhaseDescription;
    }
  }
  function handlePhaseClick(phase: TalentLevel & IRangeConnect) {
    currentLevel = phase;
    changeDescription();
  }
  function handlePotentialClick() {
    isPotentialActive = !isPotentialActive;
    changeDescription();
  }
</script>

<CardContainer
  withTitle={false}
  {withBorderRadius}
  --cc-p={"0"}
  --cc-gap={"0"}
  --cc-align={"normal"}
  --cc-width={"100%"}
>
  <div
    class="card__title"
    class:gradient-center={titleGradient === "center"}
    class:gradient-top={titleGradient === "top"}
    class:gradient-bottom={titleGradient === "bottom"}
    class:gradient-left={titleGradient === "left"}
    class:gradient-right={titleGradient === "right"}
    class:title-center={titlePosition === "center"}
    class:title-left={titlePosition === "left"}
    class:title-right={titlePosition === "right"}
  >
    <h2>{title}</h2>
    <div class="level-buttons-wrapper">
      {#if levels.length > 0}
        {#each levelsWithoutPotential as level}
          <TalentButton
            iconUrl={getEliteIcon(level.phase)}
            isSelected={currentLevel === level}
            handleClick={() => handlePhaseClick(level)}
          />
        {/each}
        {#if levelsWithPotential.length > 0}
          <TalentButton
            iconUrl={getPotentialIcon(levelsWithPotential[0].potential)}
            isSelected={isPotentialActive}
            handleClick={() => handlePotentialClick()}
          />
        {/if}
      {/if}
    </div>
  </div>
  <div class="card__description">
    {#if withIcon}
      <div class="subclass-image-wrapper">
        <img
          src={`https://raw.githubusercontent.com/Aceship/Arknight-Images/main/ui/subclass/sub_${iconUrl}_icon.png`}
          alt=""
        />
      </div>
    {/if}
    <p>
      {#each replaceTextTags(description) as item}
        {#if item.description && item.title}
          <span style="color: var(--rarity-color-3);">{item.description}</span>
        {:else}
          {item.text}
        {/if}
      {/each}
    </p>
    {#if currentLevel?.range}
      <RangeGrid cells={currentLevel.range.grid} />
    {/if}
  </div>
</CardContainer>

<style lang="scss">
  .card {
    &__title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      padding: 0 10px;

      & h2 {
        margin: 0;
        font-size: var(--tl-fontSize, 20px);
        font-weight: 500;
        line-height: 100%;
        text-transform: capitalize;
      }

      &.title-center {
        justify-content: center;
      }
      &.title-left {
        justify-content: space-between;
      }
      &.title-right {
        justify-content: end;
      }

      &.gradient-center {
        background-image: var(--bg-gradient-center);
      }
      &.gradient-top {
        background-image: var(--bg-gradient-top);
      }
      &.gradient-bottom {
        background-image: var(--bg-gradient-bottom);
      }
      &.gradient-left {
        background-image: var(--bg-gradient-left);
      }
      &.gradient-right {
        background-image: var(--bg-gradient-right);
      }
    }

    &__description {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 15px 20px;

      & p {
        margin: 0;
      }
    }
  }
  .level-buttons-wrapper {
    display: flex;
    gap: 2px;
    height: 100%;
  }
  .subclass-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 5px;

    & img {
      width: 100%;
      padding: 0 100px;
      filter: invert(var(--img-invert));
      transition: 0.2s;
    }
  }
</style>
