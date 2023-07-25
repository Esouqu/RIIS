<script lang="ts">
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { page } from "$app/stores";
  import type {
    Art,
    Operator,
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
  import TalentCard from "$lib/components/TalentCard.svelte";
  import fetchWithType from "$lib/utils/fetchWithType";
  import SkillCard from "$lib/components/SkillCard.svelte";
  import getOperatorClassImage from "$lib/utils/getOperatorClassImage";
  import getGenderIcon from "$lib/utils/getGenderIcon";
  import Tag from "$lib/components/Tag.svelte";

  interface IOperatorConnects {
    artList: Array<Art>;
    skills: Array<
      Skill & {
        levels: Array<
          SkillLevel & {
            range: Array<RangeCell>;
          }
        >;
      }
    >;
    talents: Array<
      Talent & {
        levels: Array<TalentLevel>;
        range: Array<RangeCell>;
      }
    >;
  }

  let operator: Operator & IOperatorConnects;
  let isLoading = true;

  onMount(async () => {
    isLoading = true;

    await fetchWithType<Operator & IOperatorConnects>(
      `/api/operators/${$page.params.operator}`
    ).then((data) => (operator = data));

    isLoading = false;
  });
</script>

<svelte:head>
  <title>{operator ? operator.name : "Operator"}</title>
</svelte:head>

<main class="main">
  <section class="section section_art">
    <Container>
      {#if isLoading}
        <Loader />
      {:else}
        <ArtViewer artList={operator.artList} artistName={operator.artist} />
      {/if}
    </Container>
  </section>

  <section class="section section_info">
    <div class="info-wrapper">
      <div class="nameplate">
        {#if isLoading}
          <Loader />
        {:else}
          <div class="nameplate-inner-wrapper">
            <div class="name-wrapper">
              <h1>{operator.name}</h1>
              <div class="stars-wrapper">
                {#each { length: operator.rarity + 1 } as _, idx}
                  <div class="star" in:fade={{ delay: 50 * idx }}>
                    <img src={star} alt="star" />
                  </div>
                {/each}
              </div>
            </div>
            <div class="class-image-wrapper">
              <img src={getOperatorClassImage(operator.class)} alt="" />
            </div>
            <div class="tags-wrapper">
              <Tag iconUrl={getGenderIcon(operator.gender)} isOnlyIcon={true} />
              {#each operator.tagList as tag}
                <Tag text={tag} />
              {/each}
            </div>
          </div>
        {/if}
      </div>
      <Container
        --cont-px={"20px"}
        --cont-py={"15px"}
        --cont-gap={"15px"}
        --cont-justify={"start"}
        --cont-overflow={"auto"}
      >
        {#if isLoading}
          <Loader />
        {:else}
          <TalentCard
            title={operator.subClass}
            titleGradient={"center"}
            withIcon={true}
            iconUrl={operator.subClass}
            description={operator.trait !== null ? operator.trait : undefined}
            withBorderRadius={true}
          />

          {#if operator.talents.length > 0}
            <div class="talents-wrapper">
              {#each operator.talents as talent, idx}
                <TalentCard
                  title={talent.name}
                  titlePosition={"left"}
                  titleGradient={"left"}
                  description={talent.levels[0].description}
                  levels={talent.levels}
                  withBorderRadius={operator.talents.length - 1 === idx}
                />
              {/each}
            </div>
          {/if}

          {#if operator.skills.length > 0}
            <SkillCard skills={operator.skills} />
          {/if}
        {/if}
      </Container>
    </div>
  </section>
</main>

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    height: 100vh;
    overflow: hidden;
  }
  .section {
    overflow: hidden;

    &_info {
      display: flex;
      justify-content: center;
    }
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 500px;
    max-width: 500px;
  }
  .nameplate {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: var(--bg-sub-accent-color);
    box-shadow: var(--box-shadow-options);
    transition: 0.2s;

    &-inner-wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
  }
  .name-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 340px;

    & h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  .class-image-wrapper {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 98px;
    height: 98px;

    & img {
      width: 100%;
      filter: invert(var(--img-invert));
      transition: 0.2s;
    }
  }
  .stars-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: -5px;

    & .star {
      margin-right: -7px;
    }
  }
  .tags-wrapper {
    display: flex;
    gap: 5px;
  }
  .talents-wrapper {
    width: 100%;
  }
</style>
