<script lang="ts">
  import { fade, fly, slide } from "svelte/transition";
  import type { RangeCell, Skill, SkillLevel } from "@prisma/client";
  import replaceTextTags from "$lib/utils/replaceTextTags";
  import Tab from "./Tab.svelte";
  import RangeSlider from "./RangeSlider.svelte";
  import CardContainer from "./CardContainer.svelte";

  export let skills: Array<
    Skill & {
      levels: Array<
        SkillLevel & {
          range: Array<RangeCell>;
        }
      >;
    }
  >;

  let selectedTab: number = 0;
  let sliderValue = 1;
  let flyDirection = 0;

  $: allLevels = skills[selectedTab].levels;
  $: currentLevel = allLevels[Math.round(sliderValue) - 1];
  $: rangeList = currentLevel.range;
  $: currentLevelDescription = replaceTextTags(currentLevel.description);
  $: detailsList = [
    { title: "SpCost", value: String(currentLevel.spCost) },
    { title: "InitSp", value: String(currentLevel.initSp) },
    { title: "Duration", value: currentLevel.duration },
  ];

  function handleRangeInput(event: Event) {
    const target = event.target as HTMLInputElement;

    sliderValue = Number(target.value);
  }
</script>

<CardContainer
  --cc-gap={"0"}
  --cc-p={"0"}
  --cc-align={"normal"}
  --cc-width={"100%"}
  withTitle={false}
>
  <div class="tabs-wrapper">
    {#each skills as { iconUrl }, idx}
      <Tab
        {iconUrl}
        clickHandler={() => (selectedTab = idx)}
        isSelected={selectedTab === idx}
      />
    {/each}
  </div>
  <div class="skill-card">
    <div class="skill-card__image">
      {#key Math.round(sliderValue)}
        <div class="skill-card__counter">
          <span transition:fly>{Math.round(sliderValue)}</span>
        </div>
      {/key}
      <img src={skills[selectedTab].iconUrl} alt="" />
    </div>
    <div class="skill-card-title-wrapper">
      <div>
        <h2>
          {skills[selectedTab].name}
        </h2>
        <div class="skill-card-types-wrapper">
          <p data-activationType={skills[selectedTab].activationType}>
            {skills[selectedTab].activationType}
          </p>
          {#if skills[selectedTab].chargeType}
            <p data-chargeType={skills[selectedTab].chargeType}>
              {skills[selectedTab].chargeType}
            </p>
          {/if}
        </div>
      </div>
      <RangeSlider
        max={allLevels.length}
        value={sliderValue}
        step={0.1}
        on:mouseup={() => (sliderValue = Math.round(sliderValue))}
        on:input={(e) => handleRangeInput(e)}
      />
    </div>
  </div>
  <div class="skill-card-description-wrapper">
    {#key selectedTab}
      {#key Math.round(sliderValue)}
        <div class="skill-card__description" in:fade={{ duration: 200 }}>
          <p>
            {#each currentLevelDescription as { text, title, description }}
              {#if description && title}
                <span style="color: var(--main-color-blue);">{description}</span
                >
              {:else}
                {text}
              {/if}
            {/each}
          </p>
        </div>
      {/key}
    {/key}
  </div>
  <div class="skill-card-details-wrapper">
    {#each detailsList as { title, value }}
      <div class="skill-card__detail">
        <p>{title}</p>
        <p>{value}</p>
      </div>
    {/each}
    {#if rangeList.length > 0}
      <div class="skill-card__detail">
        <p>Range</p>
        <p>{rangeList.length}</p>
      </div>
    {/if}
  </div>
</CardContainer>

<style lang="scss">
  .tabs-wrapper {
    display: flex;
    gap: 2px;
  }

  .skill-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px 25px 0 25px;
    background-image: var(--bg-gradient-top);

    &__image {
      position: relative;
      display: flex;
      box-shadow: 0 2px 4px black;
      width: 90px;
      height: 90px;
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

      &:hover {
        opacity: 0;
      }

      & span {
        filter: drop-shadow(0 4px 2px black);
      }
    }

    &-title-wrapper {
      width: 100%;

      & h2 {
        font-size: 18px;
        margin: 0;
      }
    }
    &-types-wrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;

      & p {
        margin: 0;

        &::after {
          content: "•";
          padding: 0 5px;
        }

        &:last-child::after {
          content: "";
        }
      }

      & [data-chargeType="Offensive Recovery"] {
        background-color: crimson;
      }
      & [data-chargeType="Defensive Recovery"] {
        background-color: orange;
      }
      & [data-chargeType="Per Second Recovery"] {
        background-color: limegreen;
      }
    }

    &-description-wrapper {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 12px;
      padding: 20px;
      background-color: var(--main-color-gray);
    }
    &__description {
      display: flex;
      flex: 1 1 0;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      white-space: pre-wrap;

      & p {
        margin: 0;
      }
    }

    &-details-wrapper {
      display: flex;
      flex-direction: row;
      gap: 2px;
    }
    &__detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 5px 0;
      background-image: var(--bg-gradient-bottom);

      &:first-child {
        border-radius: 0 0 0 10px;
      }
      &:last-child {
        border-radius: 0 0 10px 0;
      }

      & p {
        margin: 0;

        &:first-child {
          font-weight: 600;
        }
      }
    }
  }

  /* .transition-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;

    & > * {
      grid-row: 1;
      grid-column: 1;
    }
  } */
</style>
