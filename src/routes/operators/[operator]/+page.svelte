<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { page } from "$app/stores";
  import type {
    Art,
    Operator,
    OperatorAttributes,
    OperatorPhase,
    PotentialRank,
    Range,
    RangeCell,
    Skill,
    SkillLevel,
    Talent,
    TalentLevel,
  } from "@prisma/client";
  import star from "$lib/assets/star.svg";
  import ArtViewer from "$lib/components/ArtViewer.svelte";
  import Container from "$lib/components/Container.svelte";
  import Loader from "$lib/components/Loader.svelte";
  import OperatorTalent from "$lib/components/operator/OperatorTalent.svelte";
  import fetchWithType from "$lib/utils/fetchWithType";
  import OperatorSkills from "$lib/components/operator/OperatorSkills.svelte";
  import getOperatorClassImage from "$lib/utils/getOperatorClassImage";
  import Tag from "$lib/components/Tag.svelte";
  import OperatorLevels from "$lib/components/operator/OperatorLevel.svelte";
  import CardContainer from "$lib/components/CardContainer.svelte";
  import getEliteIcon from "$lib/utils/getEliteIcon";
  import getPotentialIcon from "$lib/utils/getPotentialIcon";
  import FilterButton from "$lib/components/FilterButton.svelte";

  interface IRangeConnect {
    range: Range & {
      grid: RangeCell[];
    };
  }

  interface IOperatorConnects {
    artList: Art[];
    skills: Array<
      Skill & {
        levels: Array<SkillLevel & IRangeConnect>;
      }
    >;
    talents: Array<
      Talent & {
        levels: Array<TalentLevel & IRangeConnect>;
      }
    >;
    phases: Array<
      OperatorPhase & { attributesKeyFrames: OperatorAttributes[] } & {
        range: Range & { grid: RangeCell[] };
      }
    >;
    potential: PotentialRank[];
    favor: OperatorAttributes;
  }

  export let data;
  let selectedPhase = 0;
  let selectedSkillIdx = 0;
  let isPotentialActive = false;
  let isFavorActive = false;

  $: operator = data.operator as Operator & IOperatorConnects;
  // $: console.log(data);

  function handleEliteButtonClick(idx: number) {
    selectedSkillIdx = 0;
    selectedPhase = idx;
  }

  // $: console.log(operator);
</script>

<svelte:head>
  <title>{operator ? operator.name : "Operator"} - RIIS</title>
</svelte:head>

<main class="main">
  <section class="section section_art">
    <ArtViewer artList={operator.artList} artistName={operator.artist} />
  </section>

  <section class="section section_info">
    <div class="info-wrapper">
      <CardContainer
        --cc-direction="column"
        --cc-justify="start"
        --cc-gap="20px"
        --cc-p="20px"
        --cc-overflow="auto"
      >
        <div class="nameplate">
          <div class="name-wrapper">
            {#if operator.name.split(" the ").length > 1}
              <div>
                <h1>{operator.name.split(" the ")[0]}</h1>
                <h2>the {operator.name.split(" the ")[1]}</h2>
              </div>
            {:else}
              <h1>{operator.name}</h1>
            {/if}
            <div class="stars-wrapper">
              {#each { length: operator.rarity + 1 } as _, idx}
                <div class="star" in:fade={{ delay: 50 * idx }}>
                  <img src={star} alt="star" />
                </div>
              {/each}
            </div>
          </div>
          <div class="classes-wrapper">
            <div class="class-image-wrapper">
              <img src={getOperatorClassImage(operator.class)} alt="" />
            </div>
            <div class="class-image-wrapper">
              <img
                src={`https://raw.githubusercontent.com/Aceship/Arknight-Images/main/ui/subclass/sub_${operator.subClass}_icon.png`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="tags-wrapper">
          <Tag text={operator.gender} />
          {#each operator.tagList as tag}
            <Tag text={tag} />
          {/each}
        </div>
        <div class="elite-buttons-wrapper">
          {#each operator.phases as _, idx}
            <FilterButton
              icon={getEliteIcon(idx)}
              isSelected={selectedPhase === idx}
              on:click={() => handleEliteButtonClick(idx)}
              --fltr-btn-w="100%"
              --fltr-btn-h="auto"
              --fltr-btn-size="30px"
            />
          {/each}
          <FilterButton
            icon={getPotentialIcon(6)}
            isSelected={isPotentialActive}
            on:click={() => (isPotentialActive = !isPotentialActive)}
            --fltr-button-w="100%"
            --fltr-btn-h="auto"
            --fltr-btn-size="30px"
          />
          <!-- <FilterButton
            text="F"
            isSelected={isFavorActive}
            on:click={() => (isFavorActive = !isFavorActive)}
            --fltr-button-w="100%"
            --fltr-btn-h="auto"
            --fltr-btn-size="30px"
          /> -->
        </div>

        <Container --cont-gap="20px" --cont-p="20px">
          <OperatorTalent
            title={operator.subClass}
            description={operator.trait}
          />
          {#if operator.talents.length > 0}
            {#each operator.talents as { name, levels }}
              {@const baseLevel = levels.find(
                (level) =>
                  level.potential === 0 && level.phase === selectedPhase
              )}
              {@const potentialLevel = levels.find(
                (level) =>
                  level.potential !== 0 && level.phase === selectedPhase
              )}

              {#if isPotentialActive && potentialLevel}
                <OperatorTalent
                  title={name}
                  description={potentialLevel.description}
                  range={potentialLevel.range?.grid}
                />
              {:else if baseLevel}
                <OperatorTalent
                  title={name}
                  description={baseLevel.description}
                  range={baseLevel.range?.grid}
                />
              {/if}
            {/each}
          {/if}
        </Container>

        {#if operator.skills.length > 0}
          <Container --cont-gap="20px" --cont-p="20px">
            <OperatorSkills
              skills={operator.skills}
              {selectedPhase}
              bind:selectedSkillIdx
            />
          </Container>
        {/if}
        <Container --cont-gap="20px" --cont-p="20px">
          <OperatorLevels phase={operator.phases[selectedPhase]} />
        </Container>
      </CardContainer>
    </div>
  </section>
</main>

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: 1fr auto;
    height: 100vh;
    overflow: hidden;
  }
  .section {
    overflow: hidden;

    &_art {
      position: relative;
      width: 100%;
      height: 100%;
    }
    &_info {
      display: flex;
      justify-content: center;
    }
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    min-width: 500px;
    max-width: 500px;
    overflow: auto;
  }
  .nameplate {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
  .name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
      margin: 0;
      font-size: 39.09px;
      line-height: 1;
      font-weight: 600;
      text-align: center;
      text-transform: uppercase;
    }

    & h2 {
      margin: 0;
      font-size: 1.25rem;
      line-height: 1;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
  .classes-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .class-image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: invert(var(--img-invert));
    }
  }
  .stars-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;

    & .star {
      display: flex;
      margin-right: -7px;
    }
  }
  .tags-wrapper {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .elite-buttons-wrapper {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: 100%;
  }
</style>
