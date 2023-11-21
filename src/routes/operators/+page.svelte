<script lang="ts">
  import { onMount } from "svelte";
  import Loader from "$lib/components/Loader.svelte";
  import OperatorPortrait from "$lib/components/operator/OperatorPortrait.svelte";
  import getOperatorClassImage from "$lib/utils/getOperatorClassImage";
  import FilterButton from "$lib/components/FilterButton.svelte";
  import fetchWithType from "$lib/utils/fetchWithType";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import type { Operator } from "@prisma/client";
  import starIcon from "$lib/assets/star.svg";
  import moreIcon from "$lib/assets/More.png";
  import { fade, slide } from "svelte/transition";
  import Tag from "$lib/components/Tag.svelte";
  import PageLoader from "$lib/components/PageLoader.svelte";

  const classFilterOptions = [
    { name: "caster", icon: getOperatorClassImage("caster") },
    { name: "medic", icon: getOperatorClassImage("medic") },
    { name: "vanguard", icon: getOperatorClassImage("vanguard") },
    { name: "sniper", icon: getOperatorClassImage("sniper") },
    { name: "specialist", icon: getOperatorClassImage("specialist") },
    { name: "supporter", icon: getOperatorClassImage("supporter") },
    { name: "defender", icon: getOperatorClassImage("defender") },
    { name: "guard", icon: getOperatorClassImage("guard") },
  ];
  const OPERATOR_MAX_RARITY = 6;

  let operators: Operator[] = [];
  let isOperatorsLoading = true;
  let isLoading = true;

  let searchValue: string = "";
  let selectedClasses: string[] = [];
  let selectedRarity: number | null = null;
  let selectedGender: string = "";
  let selectedPosition: string = "";
  let selectedSkillCharge: string[] = [];
  let selectedSkillActivation: string[] = [];

  let isFiltersExtended: boolean = false;
  let isScrollEnd: boolean = false;
  let parentContainer: HTMLElement;

  onMount(async () => {
    await fetchWithType<Operator[]>(`/api/operators`).then(
      (data) => (operators = data)
    );

    isLoading = false;
    isOperatorsLoading = false;
  });

  $: filteredOperators = operators.filter((operator) => {
    const nameMatch =
      !searchValue ||
      operator.name.toLowerCase().includes(searchValue.toLowerCase());
    const classesMatch =
      selectedClasses.length < 1 ||
      selectedClasses.includes(operator.class.toLowerCase());
    const rarityMatch =
      selectedRarity === null || selectedRarity === operator.rarity;
    const genderMatch = !selectedGender || operator.gender === selectedGender;
    const rangeMatch =
      !selectedPosition || operator.position === selectedPosition;

    return (
      nameMatch && classesMatch && rarityMatch && genderMatch && rangeMatch
    );
  });

  function handleScroll() {
    const reachedEnd =
      parentContainer.scrollTop + parentContainer.clientHeight >=
      parentContainer.scrollHeight;
    isScrollEnd = reachedEnd;
  }

  function selectClass(idx: string) {
    if (selectedClasses.includes(idx)) {
      selectedClasses = selectedClasses.filter((opClass) => opClass !== idx);
    } else {
      selectedClasses = [...selectedClasses, idx];
    }
  }

  function toggleRarity(idx: number) {
    if (selectedRarity !== idx) {
      selectedRarity = idx;
    } else {
      selectedRarity = null;
    }
  }

  function toggleGender(idx: string) {
    if (selectedGender !== idx) {
      selectedGender = idx;
    } else {
      selectedGender = "";
    }
  }

  function togglePosition(idx: string) {
    if (selectedPosition !== idx) {
      selectedPosition = idx;
    } else {
      selectedPosition = "";
    }
  }

  function selectSkillCharge(idx: string) {
    if (selectedSkillCharge.includes(idx)) {
      selectedSkillCharge = selectedSkillCharge.filter(
        (skillCharge) => skillCharge !== idx
      );
    } else {
      selectedSkillCharge = [...selectedSkillCharge, idx];
    }
  }

  function selectSkillActivation(idx: string) {
    if (selectedSkillActivation.includes(idx)) {
      selectedSkillActivation = selectedSkillActivation.filter(
        (skillActivation) => skillActivation !== idx
      );
    } else {
      selectedSkillActivation = [...selectedSkillActivation, idx];
    }
  }
</script>

<svelte:head>
  <title>Operators - RIIS</title>
</svelte:head>

<main
  class="scroll-container"
  bind:this={parentContainer}
  on:scroll={handleScroll}
>
  {#if isLoading}
    <PageLoader />
  {/if}
  <div class="grid">
    {#each filteredOperators as { id, name, portraitUrl, rarity }}
      <OperatorPortrait
        {name}
        {rarity}
        operatorId={id}
        imageUrl={portraitUrl}
        isInteractable={!isLoading}
        on:click={() => (isLoading = true)}
      />
    {/each}
  </div>
  <div class="filters-wrapper" class:scrollEnd={isScrollEnd}>
    <CardContainer --cc-p="0">
      {#if isFiltersExtended}
        <div class="filters" transition:slide>
          <div class="filters-section-wrapper">
            <span>Gender</span>
            <div class="filters-section column">
              <Tag
                text="Male"
                isSelectable={true}
                isSelected={selectedGender?.includes("Male")}
                on:click={() => toggleGender("Male")}
              />
              <Tag
                text="Female"
                isSelectable={true}
                isSelected={selectedGender?.includes("Female")}
                on:click={() => toggleGender("Female")}
              />
            </div>
          </div>
          <div class="filters-section-wrapper">
            <span>Range</span>
            <div class="filters-section column">
              <Tag
                text="Melee"
                isSelectable={true}
                isSelected={selectedPosition?.includes("Melee")}
                on:click={() => togglePosition("Melee")}
              />
              <Tag
                text="Ranged"
                isSelectable={true}
                isSelected={selectedPosition?.includes("Ranged")}
                on:click={() => togglePosition("Ranged")}
              />
            </div>
          </div>
          <!-- <div class="filters-section-wrapper">
            <span>Skill Charge</span>
            <div class="filters-section column">
              <Tag
                text="Offensive"
                isSelectable={true}
                isSelected={selectedSkillCharge?.includes("Offensive")}
                on:click={() => selectSkillCharge("Offensive")}
              />
              <Tag
                text="Defensive"
                isSelectable={true}
                isSelected={selectedSkillCharge?.includes("Defensive")}
                on:click={() => selectSkillCharge("Defensive")}
              />
              <Tag
                text="Per Second"
                isSelectable={true}
                isSelected={selectedSkillCharge?.includes("Per Second")}
                on:click={() => selectSkillCharge("Per Second")}
              />
            </div>
          </div>
          <div class="filters-section-wrapper">
            <span>Skill Activation</span>
            <div class="filters-section column">
              <Tag
                text="Auto"
                isSelectable={true}
                isSelected={selectedSkillActivation?.includes("Auto")}
                on:click={() => selectSkillActivation("Auto")}
              />
              <Tag
                text="Manual"
                isSelectable={true}
                isSelected={selectedSkillActivation?.includes("Manual")}
                on:click={() => selectSkillActivation("Manual")}
              />
              <Tag
                text="Passive"
                isSelectable={true}
                isSelected={selectedSkillActivation?.includes("Passive")}
                on:click={() => selectSkillActivation("Passive")}
              />
            </div>
          </div>
          <div />
          <div />
          <div />
          <div /> -->
        </div>
      {/if}
      <div class="filters">
        <div class="filters-section-wrapper">
          <span>Search</span>
          <div class="filters-section">
            <div class="input-wrapper">
              <div class="input-inner-wrapper">
                <input
                  type="text"
                  id="search"
                  class="search"
                  maxlength="20"
                  placeholder="Operator name"
                  bind:value={searchValue}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="filters-section-wrapper">
          <span>Class</span>
          <div class="filters-section row">
            {#each classFilterOptions as { name, icon }}
              <FilterButton
                {icon}
                isSelected={selectedClasses.includes(name)}
                on:click={() => selectClass(name)}
              />
            {/each}
          </div>
        </div>
        <div class="filters-section-wrapper">
          <span>Rarity</span>
          <div class="filters-section row">
            {#each { length: OPERATOR_MAX_RARITY } as _, idx}
              <FilterButton
                text={idx + 1}
                icon={starIcon}
                isSelected={selectedRarity === idx}
                on:click={() => toggleRarity(idx)}
                --img-invert="0"
              />
            {/each}
          </div>
        </div>
      </div>
    </CardContainer>
    <CardContainer --cc-p="0">
      <button
        type="button"
        class="filters-extend-button"
        class:active={isFiltersExtended}
        on:click={() => (isFiltersExtended = !isFiltersExtended)}
      >
        <img src={moreIcon} alt="" draggable="false" />
      </button>
    </CardContainer>
  </div>
</main>

<style lang="scss">
  .scroll-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - 40px);
    padding: 40px 40px 0 40px;
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
  .filters-extend-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100%;
    border: none;
    background-color: transparent;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: var(--bg-sub-accent-color);
    }

    &.active {
      background-color: var(--bg-sub-accent-color);

      & img {
        rotate: 90deg;
      }
    }

    & img {
      width: 100%;
      filter: invert(var(--img-invert));
      transition: 0.2s;
    }
  }
  .filters-wrapper {
    position: sticky;
    bottom: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
    max-width: 100%;
    padding: 40px 20px;
    opacity: 0.7;
    transition: 0.2s;

    &.scrollEnd {
      opacity: 1;
    }

    &:hover:not(.scrollEnd) {
      opacity: 1;
    }
  }
  .filters {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
  .input-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .input-inner-wrapper {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      width: 90%;
      height: 2px;
      margin: 0 auto;
      background-color: var(--text-color);
    }

    & input {
      position: relative;
      margin: 0 10px;
      padding: 0 10px;
      border: 0;
      font-size: 18px;
      line-height: 1;
      color: var(--text-color);
      background-color: unset;

      &::placeholder {
        opacity: 0.7;
        color: var(--text-color);
      }

      &:focus {
        outline: none;
      }
    }
  }
  .filters-section {
    display: flex;
    gap: 5px;
    height: 100%;

    &.row {
      flex-direction: row;
    }

    &.column {
      flex-direction: column;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 10px;

      & span {
        font-weight: 500;
        line-height: 1;
        color: var(--text-color);
      }
    }
  }
</style>
