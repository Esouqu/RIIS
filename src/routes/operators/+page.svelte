<script lang="ts">
  import { onMount } from "svelte";
  import type { Operator } from "@prisma/client";
  import Container from "../../lib/components/Container.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import OperatorPortrait from "$lib/components/OperatorPortrait.svelte";
  import getOperatorClassImage from "$lib/utils/getOperatorClassImage";
  import FilterButton from "$lib/components/FilterButton.svelte";
  import fetchWithType from "$lib/utils/fetchWithType";
  import CardContainer from "$lib/components/CardContainer.svelte";

  const classFilterOptions = [
    { name: "caster", icon: getOperatorClassImage("caster") },
    { name: "medic", icon: getOperatorClassImage("medic") },
    { name: "pioneer", icon: getOperatorClassImage("pioneer") },
    { name: "sniper", icon: getOperatorClassImage("sniper") },
    { name: "special", icon: getOperatorClassImage("special") },
    { name: "support", icon: getOperatorClassImage("support") },
    { name: "tank", icon: getOperatorClassImage("tank") },
    { name: "warrior", icon: getOperatorClassImage("warrior") },
  ];

  let operators: Array<Operator> = [];
  let isOperatorsLoading = true;
  let searchValue: string = "";
  let selectedClasses: Array<string> = [];

  onMount(async () => {
    isOperatorsLoading = true;

    await fetchWithType<Array<Operator>>(`/api/operators`).then(
      (data) => (operators = data)
    );

    isOperatorsLoading = false;
  });

  $: filteredOperators = operators.filter((operator) => {
    const nameMatch =
      !searchValue ||
      operator.name.toLowerCase().includes(searchValue.toLowerCase());
    const classesMatch =
      selectedClasses.length < 1 ||
      selectedClasses.includes(operator.class.toLowerCase());

    return nameMatch && classesMatch;
  });

  function toggleOperatorClass(id: string) {
    if (selectedClasses.includes(id)) {
      selectedClasses = selectedClasses.filter((opClass) => opClass !== id);
    } else {
      selectedClasses = [...selectedClasses, id];
    }
  }
</script>

<main class="main">
  <Container
    htmlTag="div"
    --justify={"start"}
    --py={"20px"}
    --px={"20px"}
    --gap={"40px"}
  >
    <div class="filters-wrapper">
      <CardContainer title="Search">
        <div class="input-wrapper">
          <input
            type="text"
            id="search"
            class="search"
            maxlength="20"
            placeholder="Operator name"
            bind:value={searchValue}
          />
        </div>
      </CardContainer>
      <CardContainer title="Class">
        <div class="filter-buttons-wrapper">
          {#each classFilterOptions as { name, icon }}
            <FilterButton
              {icon}
              isSelected={selectedClasses.includes(name)}
              handleClick={() => toggleOperatorClass(name)}
            />
          {/each}
        </div>
      </CardContainer>
    </div>
    {#if isOperatorsLoading}
      <Loader />
    {:else}
      <div class="grid">
        {#each filteredOperators as { id, name, portraitUrl, rarity } (id)}
          <OperatorPortrait
            {name}
            {rarity}
            operatorId={id}
            imageUrl={portraitUrl}
          />
        {/each}
      </div>
    {/if}
  </Container>
</main>

<style lang="scss">
  .main {
    margin: 10px;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
  .filters-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .filter-buttons-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .input-wrapper {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;
      width: 90%;
      height: 2px;
      margin: 0 auto;
      opacity: 0.3;
      background-color: var(--main-color-black);
    }

    & input {
      position: relative;
      margin: 0 10px;
      padding: 0 10px;
      border: 0;
      font-size: 18px;
      font-weight: 500;
      background-color: unset;

      &::placeholder {
        color: #0f0f0f50;
      }

      &:focus {
        outline: none;
      }
    }
  }
</style>
