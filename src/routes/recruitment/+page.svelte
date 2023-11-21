<script lang="ts">
  import { onMount } from "svelte";
  import type { Operator } from "@prisma/client";
  import Tag from "$lib/components/Tag.svelte";
  import Container from "$lib/components/Container.svelte";
  import fetchWithType from "$lib/utils/fetchWithType";
  import OperatorPortrait from "$lib/components/operator/OperatorPortrait.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import { fade } from "svelte/transition";
  import PageLoader from "$lib/components/PageLoader.svelte";

  const MAX_SELECTED_TAGS = 5;

  let isLoading = true;
  let operators: Operator[] = [];
  let isOperatorsLoading = true;
  let selectedTags: string[] = [];

  onMount(async () => {
    await fetchWithType<Operator[]>(`/api/recruiting`).then(
      (data) => (operators = data)
    );

    isLoading = false;
    isOperatorsLoading = false;
  });

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((activeTag) => activeTag !== tag);
    } else if (selectedTags.length < MAX_SELECTED_TAGS) {
      selectedTags = [...selectedTags, tag];
    }
  }

  function getAllTagConnections(tags: string[]): string[][] {
    const tagConnections: Array<Array<string>> = [[]];

    tags.forEach((tag) => {
      const numConnections = tagConnections.length;

      for (let i = 0; i < numConnections; i++) {
        tagConnections.push([...tagConnections[i], tag]);
      }
    });

    return tagConnections.slice(1);
  }

  function getMatchingOperators(
    operators: Operator[],
    tags: string[]
  ): Operator[] {
    const rarityToTags: { [key: number]: string } = {
      1: "Starter",
      4: "Senior Operator",
      5: "Top Operator",
      0: "Robot",
    };

    return operators.filter(({ recruitmentTagList, rarity }) => {
      const operatorTags = recruitmentTagList.map((tag) => tag.toLowerCase());
      const hasAllTags = tags.every((tag) =>
        operatorTags.includes(tag.toLowerCase())
      );
      const associatedTag = rarityToTags[rarity];

      if (associatedTag && tags.includes(associatedTag)) {
        return hasAllTags;
      } else {
        return rarity !== 1 && rarity !== 5 && rarity !== 0 && hasAllTags;
      }
    });
  }

  $: tags = [
    ...new Set(operators.flatMap((operator) => operator.recruitmentTagList)),
  ];
  $: variants = getAllTagConnections(selectedTags)
    .map((connections) => {
      const matchingOperators = getMatchingOperators(operators, connections);

      return {
        connections,
        matchingOperators: matchingOperators,
        lowestRarity:
          matchingOperators.length > 0
            ? matchingOperators.reduce((min, obj) =>
                obj.rarity < min.rarity ? obj : min
              ).rarity
            : 0,
      };
    })
    .filter((variant) => variant.matchingOperators.length > 0)
    .sort((a, b) => a.matchingOperators.length - b.matchingOperators.length)
    .sort((a, b) => b.lowestRarity - a.lowestRarity);
</script>

<svelte:head>
  <title>Recruitment - RIIS</title>
</svelte:head>

<main class="main">
  <div class="scroll-container">
    {#if isLoading}
      <PageLoader />
    {/if}
    <div class="grid">
      {#if variants.length < 1}
        {#each operators as { id, name, rarity, portraitUrl }}
          <OperatorPortrait
            {name}
            {rarity}
            operatorId={id}
            imageUrl={portraitUrl}
            isInteractable={!isLoading}
            on:click={() => (isLoading = true)}
          />
        {/each}
      {:else}
        {#each variants as { connections, matchingOperators }}
          {#if matchingOperators.length > 0}
            <div class="variant-wrapper">
              <div class="tags-wrapper">
                {#each connections as tag} <Tag text={tag} /> {/each}
              </div>
              <div
                style="display: flex; flex-wrap: wrap; justify-content: center; gap: 5px;"
              >
                {#each matchingOperators as { id, name, rarity, portraitUrl }}
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
            </div>
          {/if}
        {/each}
      {/if}
    </div>
    <div class="filters-wrapper">
      <CardContainer --cc-p={"20px"} --cc-gap={"20px"}>
        <div class="tags-wrapper">
          {#each tags as tag}
            <Tag
              --tag-uSelect={"none"}
              --tag-cursor={"pointer"}
              text={tag}
              isSelectable={true}
              isSelected={selectedTags.includes(tag)}
              on:click={() => toggleTag(tag)}
            />
          {/each}
        </div>
        <button
          type="button"
          class="clear-button"
          on:click={() => (selectedTags = [])}>Clear</button
        >
      </CardContainer>
    </div>
  </div>
</main>

<style lang="scss">
  .tags-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    max-width: 735px;
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

    /* &.scrollEnd {
      opacity: 1;
    } */

    &:hover:not(.scrollEnd) {
      opacity: 1;
    }
  }
  .scroll-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    height: calc(100vh - 40px);
    padding: 20px 40px;
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
  .variant-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
    width: 100%;
  }
  .clear-button {
    padding: 5px 10px;
    border: 0;
    color: #f4f5f6;
    background-color: crimson;
    transition: 0.2s;
    user-select: none;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }
  }
</style>
