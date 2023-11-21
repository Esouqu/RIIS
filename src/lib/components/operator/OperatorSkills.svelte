<script lang="ts">
  import type { Range, RangeCell, Skill, SkillLevel } from "@prisma/client";
  import replaceTextTags from "$lib/utils/replaceTextTags";
  import RangeSlider from "../RangeSlider.svelte";
  import RangeGrid from "../RangeGrid.svelte";
  import initianSPIcon from "$lib/assets/skill icons/play_arrow.svg";
  import spCostIcon from "$lib/assets/skill icons/bolt.svg";
  import durationIcon from "$lib/assets/skill icons/hourglass_bottom.svg";
  import lockIcon from "$lib/assets/lock.svg";

  export let skills: Array<
    Skill & {
      levels: Array<
        SkillLevel & {
          range: Range & {
            grid: RangeCell[];
          };
        }
      >;
    }
  >;
  export let selectedPhase: number;
  export let selectedSkillIdx = 0;

  let sliderValue = 1;

  $: allLevels = skills[selectedSkillIdx].levels;
  $: currentLevel = allLevels[sliderValue - 1];
  $: currentLevelDescription = replaceTextTags(currentLevel.description);
  $: detailsList = [
    { icon: initianSPIcon, value: currentLevel.initSp },
    { icon: spCostIcon, value: currentLevel.spCost },
    {
      icon: durationIcon,
      value: currentLevel.duration <= 0 ? null : `${currentLevel.duration}s`,
    },
  ];
</script>

<div class="skills">
  <div class="skills-images-wrapper">
    {#each skills as skill, idx}
      {#if selectedPhase >= idx}
        <button
          class="skills__button"
          class:selected={selectedSkillIdx === idx}
          on:click={() => (selectedSkillIdx = idx)}
        >
          {#if selectedSkillIdx === idx}
            <div class="skills__counter">
              <span>{sliderValue}</span>
            </div>
          {/if}
          <img src={skill.iconUrl} alt="" draggable="false" />
        </button>
      {:else}
        <div class="skills__button disabled">
          <img src={lockIcon} alt="" />
        </div>
      {/if}
    {/each}
  </div>

  <!-- <div> -->
  <div class="skills-title-wrapper">
    <h2>
      {skills[selectedSkillIdx].name}
    </h2>
    <div class="skills-types-wrapper">
      <p data-activationType={skills[selectedSkillIdx].activationType}>
        {skills[selectedSkillIdx].activationType}
      </p>
      {#if skills[selectedSkillIdx].chargeType}
        <p data-chargeType={skills[selectedSkillIdx].chargeType}>
          {skills[selectedSkillIdx].chargeType}
        </p>
      {/if}
    </div>
    <div class="skills-details-wrapper">
      {#each detailsList as { icon, value }}
        {#if value !== null}
          <div class="skills__detail">
            <img src={icon} alt="" draggable="false" />
            <p>{value}</p>
          </div>
        {/if}
      {/each}
    </div>
  </div>

  <div class="skills-description-wrapper">
    <div class="skills__description">
      <p class:centered={!currentLevel.range}>
        {#each currentLevelDescription as { text, value }}
          {#if text && value}
            <span style="color: var(--rarity-color-3); font-weight: 600;"
              >{value}</span
            >
          {:else}
            {text}
          {/if}
        {/each}
      </p>
    </div>
    {#if currentLevel.range}
      <RangeGrid cells={currentLevel.range.grid} />
    {/if}
  </div>
  <!-- </div> -->
  <RangeSlider bind:value={sliderValue} max={allLevels.length} />
</div>

<style lang="scss">
  .skills-images-wrapper {
    display: flex;
    gap: 10px;
  }
  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    &__button {
      position: relative;
      display: flex;
      justify-content: center;
      box-shadow: 0 2px 4px #0f0f0f;
      width: 90px;
      height: 90px;
      padding: 0;
      border: 0;
      opacity: 0.5;
      background-color: none;
      transition: 0.2s;
      filter: grayscale(1);

      &:hover:not(.selected):not(.disabled) {
        opacity: 0.7;
        filter: grayscale(0.5);
      }

      &:not(.selected) {
        cursor: pointer;
      }

      &.selected {
        opacity: 1;
        filter: grayscale(0);
      }

      & img {
        width: 100%;
      }

      &.disabled {
        background-color: var(--bg-color);

        & img {
          width: 80%;
          filter: invert(var(--img-invert));
        }

        &:not(.selected) {
          cursor: default;
        }
      }
    }
    &__counter {
      position: absolute;
      bottom: 0;
      left: 5px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      color: white;
      transition: 0.2s;
      user-select: none;

      & span {
        filter: drop-shadow(0 4px 2px black);
      }
    }

    &-title-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;

      & h2 {
        font-size: 20px;
        font-weight: 500;
        margin: 0;
      }
    }
    &-types-wrapper {
      display: flex;
      flex-direction: row;

      & p {
        margin: 0;
      }

      & p:not(:last-child) {
        &::after {
          content: "•";
          padding: 0 5px;
        }
      }
    }

    &-description-wrapper {
      display: flex;
      gap: 15px;
    }

    &__description {
      display: flex;
      flex: 1 1 0;
      align-items: center;
      font-size: 16px;
      white-space: pre-wrap;
      font-variant-numeric: tabular-nums;

      & p {
        margin: 0;
        text-align: start;

        &.centered {
          text-align: center;
        }
      }
    }

    &-details-wrapper {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }

    &__detail {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-variant-numeric: tabular-nums;

      & img {
        filter: invert(var(--img-invert));
      }

      & p {
        margin: 0;

        &:first-child {
          font-weight: 500;
        }
      }
    }
  }
</style>
