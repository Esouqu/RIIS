<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { Range, RangeCell, Skill, SkillLevel } from "@prisma/client";
  import replaceTextTags from "$lib/utils/replaceTextTags";
  import Tab from "./Tab.svelte";
  import RangeSlider from "./RangeSlider.svelte";
  import CardContainer from "./CardContainer.svelte";
  import RangeGrid from "./RangeGrid.svelte";

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

  let selectedTab = 0;
  let sliderValue = 1;

  $: allLevels = skills[selectedTab].levels;
  $: currentLevel = allLevels[Math.round(sliderValue) - 1];
  $: currentLevelDescription = replaceTextTags(currentLevel.description);
  $: detailsList = [
    { title: "SP Cost", value: currentLevel.spCost },
    { title: "Initial SP", value: currentLevel.initSp },
    {
      title: "Duration",
      value: currentLevel.duration <= 0 ? null : currentLevel.duration,
    },
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
                <span style="color: var(--rarity-color-3);">{description}</span>
              {:else}
                {text}
              {/if}
            {/each}
          </p>
        </div>
      {/key}
    {/key}
    {#if currentLevel.range}
      <RangeGrid cells={currentLevel.range.grid} />
    {/if}
  </div>
  <div class="skill-card-details-wrapper">
    {#each detailsList as { title, value }}
      {#if value !== null}
        <div class="skill-card__detail">
          <p>{title}</p>
          <p>{value}</p>
        </div>
      {/if}
    {/each}
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
      box-shadow: 0 2px 4px #0f0f0f;
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
        font-size: 20px;
        font-weight: 500;
        margin: 0;
      }
    }
    &-types-wrapper {
      display: flex;
      flex-direction: row;
      margin-bottom: 15px;

      & p {
        margin: 0;
      }

      & p:not(:last-child) {
        &::after {
          content: "•";
          padding: 0 5px;
        }
      }

      & [data-chargeType="Offensive Recovery"] {
        padding: 0 5px;
        color: white;
        background-color: crimson;
      }
      & [data-chargeType="Defensive Recovery"] {
        padding: 0 5px;
        background-color: orange;
      }
      & [data-chargeType="Per Second Recovery"] {
        padding: 0 5px;
        color: #0f0f0f;
        background-color: limegreen;
      }
    }

    &-description-wrapper {
      display: flex;
      gap: 15px;
      padding: 20px 30px;
    }
    &__description {
      display: flex;
      flex: 1 1 0;
      align-items: center;
      font-size: 16px;
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
      padding: 10px 0;
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
          font-weight: 500;
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
