<script lang="ts">
  import getEliteIcon from "$lib/utils/getEliteIcon";
  import type {
    OperatorAttributes,
    OperatorPhase,
    PotentialRank,
    Range,
    RangeCell,
  } from "@prisma/client";
  import TabbedCard from "./TabbedCard.svelte";
  import RangeSlider from "./RangeSlider.svelte";
  import RangeGrid from "./RangeGrid.svelte";
  import Toggle from "./Toggle.svelte";

  export let phases: Array<
    OperatorPhase & { attributesKeyFrames: OperatorAttributes[] } & {
      range: Range & { grid: RangeCell[] };
    }
  > = [];
  export let potential: PotentialRank[] = [];
  export let favor: OperatorAttributes;

  let activeTab: number = 0;
  let sliderValue: number = 1;
  let isPotentialActive = false;
  let isFavorActive = false;

  $: currentPhase = phases[activeTab];
  $: currentPhaseMaxLevel = currentPhase.maxLevel;
  $: currentAttributes = [
    [
      {
        name: "Max HP",
        minValue: currentPhase.attributesKeyFrames[0].maxHp,
        maxValue: currentPhase.attributesKeyFrames[1].maxHp,
      },
      {
        name: "ATK",
        minValue: currentPhase.attributesKeyFrames[0].atk,
        maxValue: currentPhase.attributesKeyFrames[1].atk,
      },
      {
        name: "DEF",
        minValue: currentPhase.attributesKeyFrames[0].def,
        maxValue: currentPhase.attributesKeyFrames[1].def,
      },
      {
        name: "RES",
        minValue: currentPhase.attributesKeyFrames[0].magicResistance,
        maxValue: currentPhase.attributesKeyFrames[1].magicResistance,
      },
    ],
    [
      {
        name: "Redeploy",
        minValue: currentPhase.attributesKeyFrames[0].respawnTime,
        maxValue: currentPhase.attributesKeyFrames[1].respawnTime,
      },
      {
        name: "Cost",
        minValue: currentPhase.attributesKeyFrames[0].cost,
        maxValue: currentPhase.attributesKeyFrames[1].cost,
      },
      {
        name: "Block",
        minValue: currentPhase.attributesKeyFrames[0].blockCount,
        maxValue: currentPhase.attributesKeyFrames[1].blockCount,
      },
      {
        name: "ASPD",
        minValue: currentPhase.attributesKeyFrames[0].baseAttackTime,
        maxValue: currentPhase.attributesKeyFrames[1].baseAttackTime,
      },
    ],
  ];
  $: sliderCappedValue =
    sliderValue > currentPhaseMaxLevel ? currentPhaseMaxLevel : sliderValue;

  $: console.log(potential, favor);
</script>

<TabbedCard
  bind:activeTab
  tabsIcons={phases.map((_, idx) => getEliteIcon(idx))}
>
  <div class="title-wrapper" slot="title">
    <div class="counter">
      <span>{sliderCappedValue}</span>
    </div>
    <div class="slider-wrapper">
      <RangeSlider bind:value={sliderCappedValue} max={currentPhaseMaxLevel} />
    </div>
  </div>

  <div class="content" slot="content">
    <div class="attributes-wrapper row">
      <div class="attribute">
        <span>Potential</span>
        <Toggle id="potential" bind:checked={isPotentialActive} />
      </div>
      <div class="attribute">
        <span>Favor</span>
        <Toggle id="favor" bind:checked={isFavorActive} />
      </div>
    </div>
    <div class="attributes-wrapper">
      {#each currentAttributes as row}
        <div class="attribute-row">
          {#each row as { name, minValue, maxValue }}
            {@const rangeDiff = maxValue - minValue}
            {@const perUnitDiff = rangeDiff / (currentPhaseMaxLevel - 1)}
            {@const value = minValue + perUnitDiff * sliderCappedValue}
            {@const roundedValue = Math.round(value - perUnitDiff)}

            <div class="attribute">
              <span>{name}</span>
              <span>{roundedValue}</span>
            </div>
          {/each}
        </div>
      {/each}
    </div>
    <div class="attribute">
      <span>Range</span>
      <div class="attribute__range">
        <RangeGrid cells={currentPhase.range.grid} />
      </div>
    </div>
  </div>
</TabbedCard>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .attributes-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;

    &.row {
      flex-direction: row;
    }
  }
  .attribute {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    padding: 5px 0;
    background-color: var(--bg-accent-color);

    &-row {
      display: flex;
      flex-direction: row;
      gap: 5px;
      width: 100%;
    }

    &__range {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 152px;
      height: 152px;
    }
  }
  .slider-wrapper {
    flex: 1 1 0;
  }
  .title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  .counter {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    outline: 4px solid var(--text-color);
    border-radius: 9999px;
    font-size: 3.052rem;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
    font-variant-numeric: tabular-nums;

    &::before {
      content: "Lv";
      position: absolute;
      top: 0;
      font-size: 24px;
    }
  }
</style>
