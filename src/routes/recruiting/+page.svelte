<script lang="ts">
  import { onMount } from "svelte";
  import type { Operator } from "@prisma/client";
  import Tag from "$lib/components/Tag.svelte";
  import Container from "$lib/components/Container.svelte";
  import fetchWithType from "$lib/utils/fetchWithType";
  import OperatorPortrait from "$lib/components/OperatorPortrait.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import CardContainer from "$lib/components/CardContainer.svelte";

  const MAX_SELECTED_TAGS = 5;

  let operators: Array<Operator> = [];
  let isOperatorsLoading = true;
  let selectedTags: Array<string> = [];

  onMount(async () => {
    await fetchWithType<Array<Operator>>(`/api/recruiting`).then(
      (data) => (operators = data)
    );

    isOperatorsLoading = false;
  });

  function toggleTag(tag: string) {
    if (selectedTags.includes(tag)) {
      selectedTags = selectedTags.filter((activeTag) => activeTag !== tag);
    } else if (selectedTags.length < MAX_SELECTED_TAGS) {
      selectedTags = [...selectedTags, tag];
    }
  }

  function getAllTagConnections(tags: Array<string>): Array<Array<string>> {
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
    operators: Array<Operator>,
    tags: Array<string>
  ): Array<Operator> {
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

<svelte:head><title>Recruiting</title></svelte:head>

<main class="main">
  <Container --cont-justify={"start"}>
    <div class="scroll-container">
      {#if isOperatorsLoading}
        <Loader />
      {:else}
        <div class="filters-wrapper">
          <CardContainer --cc-p={"20px"} --cc-gap={"20px"} withTitle={false}>
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
        <div class="grid">
          {#if variants.length < 1}
            {#each operators as { name, rarity, id, portraitUrl }, idx}
              <OperatorPortrait
                {name}
                {rarity}
                operatorId={id}
                imageUrl={portraitUrl}
                transitionDelay={5 * idx}
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
                    {#each matchingOperators as { name, rarity, id, portraitUrl }}
                      <OperatorPortrait
                        {name}
                        {rarity}
                        operatorId={id}
                        imageUrl={portraitUrl}
                      />
                    {/each}
                  </div>
                </div>
              {/if}
            {/each}
          {/if}
        </div>
      {/if}
    </div>
  </Container>
</main>

<style lang="scss">
  .main {
    margin: 10px;
  }
  .tags-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    max-width: 735px;
  }
  .filters-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: calc(100% - 40px);
    height: calc(100vh - 60px);
    padding: 20px;
    overflow-y: auto;
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
    gap: 10px;
    width: 100%;
  }
  .clear-button {
    padding: 5px 10px;
    border: 0;
    color: var(--main-color-white);
    background-color: crimson;
    transition: 0.2s;
    user-select: none;
    cursor: pointer;

    &:active {
      opacity: 0.5;
    }
  }
</style>
