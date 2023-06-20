<script lang="ts">
  import getEliteIcon from "$lib/utils/getEliteIcon";
  import CardContainer from "./CardContainer.svelte";
  import RangeSlider from "./RangeSlider.svelte";
  import Tab from "./Tab.svelte";

  export let phases: Array<number> = [];

  let sliderValue: number = 1;
  let selectedTab: number = 0;

  $: currentPhase = phases[selectedTab];

  function handleRangeInput(event: Event) {
    const target = event.target as HTMLInputElement;

    sliderValue = Number(target.value);
  }
</script>

<CardContainer>
  <div class="tabs-wrapper">
    {#each phases as phase, idx}
      <Tab
        iconUrl={getEliteIcon(phase)}
        isSelected={selectedTab === idx}
        clickHandler={() => (selectedTab = idx)}
      />
    {/each}
  </div>
  <div class="level-card">
    <div class="level-card__head">
      <div class="level-card__counter" />
      <RangeSlider
        value={sliderValue}
        max={currentPhase}
        step={0.1}
        on:mouseup={() => (sliderValue = Math.round(sliderValue))}
        on:input={(e) => handleRangeInput(e)}
      />
    </div>
    <div>
      <div>
        <!-- {#each phases as stats}
          
        {/each} -->
      </div>
      <div />
    </div>
  </div>
</CardContainer>

<style>
</style>
