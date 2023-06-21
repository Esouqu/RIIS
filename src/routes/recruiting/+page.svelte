<script lang="ts">
  import Container from "$lib/components/Container.svelte";
  import Tag from "$lib/components/Tag.svelte";
  import { onMount } from "svelte";
  import type { Operator } from "@prisma/client";
  import fetchWithType from "$lib/utils/fetchWithType";
  import OperatorPortrait from "$lib/components/OperatorPortrait.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import CardContainer from "$lib/components/CardContainer.svelte";

  const MAX_SELECTED_TAGS = 5;
  const qualifications: Array<string> = [
    "Starter",
    "Senior Operator",
    "Top Operator",
  ];
  const positions: Array<string> = ["Melee", "Range"];
  const classes: Array<string> = [
    "Guard",
    "Medic",
    "Vanguard",
    "Caster",
    "Sniper",
    "Defender",
    "Supporter",
    "Specialist",
  ];
  const tags: Array<string> = [
    "Healing",
    "Support",
    "DPS",
    "AoE",
    "Slow",
    "Survival",
    "Defence",
    "Debuff",
    "Shift",
    "Crowd Control",
    "Nuker",
    "Summon",
    "Fast-Redeploy",
    "DP-Recovery",
    "Robot",
  ];

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
</script>

<svelte:head><title>Recruiting</title></svelte:head>

<main class="main">
  <Container --cont-justify={"start"}>
    <div class="scroll-container">
      <div class="filters-wrapper">
        <CardContainer --cc-p={"20px"} --cc-gap={"20px"} withTitle={false}>
          <div class="tags-wrapper">
            {#each [qualifications, positions, classes, tags] as section}
              {#each section as tag, idx}
                <Tag
                  --tag-uSelect={"none"}
                  --tag-cursor={"pointer"}
                  text={tag}
                  isSelected={selectedTags.includes(tag)}
                  on:click={() => toggleTag(tag)}
                />
              {/each}
            {/each}
          </div>
        </CardContainer>
      </div>
      {#if isOperatorsLoading}
        <Loader />
      {:else}
        <div class="grid">
          {#each operators as { id, name, rarity, portraitUrl }}
            <OperatorPortrait
              {name}
              {rarity}
              operatorId={id}
              imageUrl={portraitUrl}
            />
          {/each}
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
    max-width: 730px;
  }
  .filters-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
    height: 135px;
  }
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: calc(100vh - 60px);
    padding: 20px;
    overflow-y: auto;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;
  }
</style>
