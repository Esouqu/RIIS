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

<main class="main">
  <section class="section section_art">
    <Container --px={"10px"} --py={"10px"}>
      {#if isLoading}
        <Loader />
      {:else}
        <ArtViewer artList={operator.artList} artistName={operator.artist} />
      {/if}
    </Container>
  </section>

  <section class="section section_info">
    <div class="info-wrapper">
      <div
        class="nameplate"
        in:slide={{ duration: 300 }}
        out:fade={{ duration: 200 }}
      >
        {#if isLoading}
          <Loader />
        {:else}
          <div class="nameplate-inner-wrapper">
            <div class="name-wrapper">
              <h1>{operator.name}</h1>
              <div class="stars-wrapper">
                {#each { length: operator.rarity + 1 } as _, idx}
                  <div class="star" in:fade={{ delay: 50 * idx }} out:fade>
                    <img src={star} alt="" />
                  </div>
                {/each}
              </div>
            </div>
            <div class="class-image-wrapper">
              <img src={getOperatorClassImage(operator.class)} alt="" />
            </div>
            <div class="tags-wrapper">
              <div class="tag">
                <img src={getGenderIcon(operator.gender)} alt="" />
              </div>
              {#each operator.tagList as tag}
                <div class="tag">
                  <span>{tag}</span>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
      <Container
        --px={"20px"}
        --py={"15px"}
        --gap={"15px"}
        --justify={"start"}
        --overflow={"auto"}
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
                  --fontSize={"20px"}
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
    height: 100vh;
    overflow: hidden;
  }
  .section {
    overflow: hidden;

    &_info {
      display: flex;
      justify-content: center;
      font-family: "Overpass", sans-serif;
      margin: 10px 0;
    }

    &_art {
      margin: 10px;
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
    background-color: #f4f5f6;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

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
      filter: invert(1);
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

    & .tag {
      padding: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      background-color: var(--main-color-ultra-white);

      & img {
        height: 100%;
      }
    }
  }
  .talents-wrapper {
    width: 100%;
  }
</style>
