<script lang="ts">
  import type {
    OperatorAttributes,
    OperatorPhase,
    PotentialRank,
    Range,
    RangeCell,
  } from "@prisma/client";
  import RangeSlider from "../RangeSlider.svelte";
  import RangeGrid from "../RangeGrid.svelte";

  export let phase: OperatorPhase & {
    attributesKeyFrames: OperatorAttributes[];
  } & {
    range: Range & { grid: RangeCell[] };
  };
  // export let potential: PotentialRank[] = [];
  // export let favor: OperatorAttributes;
  // export let isFavorActive: boolean;
  // export let isPotentialActive: boolean;

  let sliderValue: number = 1;

  $: phaseMaxLevel = phase.maxLevel;
  $: attributes = [
    [
      {
        name: "Max HP",
        minValue: phase.attributesKeyFrames[0].maxHp,
        maxValue: phase.attributesKeyFrames[1].maxHp,
      },
      {
        name: "ATK",
        minValue: phase.attributesKeyFrames[0].atk,
        maxValue: phase.attributesKeyFrames[1].atk,
      },
      {
        name: "DEF",
        minValue: phase.attributesKeyFrames[0].def,
        maxValue: phase.attributesKeyFrames[1].def,
      },
      {
        name: "RES",
        minValue: phase.attributesKeyFrames[0].magicResistance,
        maxValue: phase.attributesKeyFrames[1].magicResistance,
      },
    ],
    [
      {
        name: "Redeploy",
        minValue: phase.attributesKeyFrames[0].respawnTime,
        maxValue: phase.attributesKeyFrames[1].respawnTime,
      },
      {
        name: "Cost",
        minValue: phase.attributesKeyFrames[0].cost,
        maxValue: phase.attributesKeyFrames[1].cost,
      },
      {
        name: "Block",
        minValue: phase.attributesKeyFrames[0].blockCount,
        maxValue: phase.attributesKeyFrames[1].blockCount,
      },
      {
        name: "ASPD",
        minValue: phase.attributesKeyFrames[0].baseAttackTime,
        maxValue: phase.attributesKeyFrames[1].baseAttackTime,
      },
    ],
  ];
  $: sliderCappedValue =
    sliderValue > phaseMaxLevel ? phaseMaxLevel : sliderValue;
</script>

<div class="level">
  <div class="counter">
    <span style="line-height: 1;">{sliderCappedValue}</span>
    <p>Level</p>
  </div>

  <div class="attributes-wrapper">
    {#each attributes as row}
      <div class="attribute-row">
        {#each row as { name, minValue, maxValue }}
          {@const rangeDiff = maxValue - minValue}
          {@const perUnitDiff = rangeDiff / (phaseMaxLevel - 1)}
          {@const value = minValue + perUnitDiff * sliderCappedValue}
          {@const roundedValue = Math.round(value - perUnitDiff)}

          <div class="attribute">
            <span class="attribute__title">{name}</span>
            <span>
              {roundedValue}{name === "Redeploy" || name === "ASPD" ? "s" : ""}
            </span>
          </div>
        {/each}
      </div>
    {/each}
    <div class="attribute column">
      <!-- <span>Range</span> -->
      <div class="attribute__range">
        <RangeGrid cells={phase.range.grid} />
      </div>
    </div>
  </div>

  <div class="slider-wrapper">
    <RangeSlider bind:value={sliderCappedValue} max={phaseMaxLevel} />
  </div>
</div>

<style lang="scss">
  .level {
    width: 100%;
  }
  .attributes-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .attribute {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 5px 0;
    background-color: var(--bg-accent-color);

    &__title {
      font-weight: 500;
    }

    &-row {
      display: flex;
      flex-direction: column;
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
    &.column {
      flex-direction: column;
    }
  }
  .slider-wrapper {
    flex: 1 1 0;
  }
  .counter {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 64px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;

    & p {
      font-size: 24px;
      margin: 0;
    }
  }
</style>
