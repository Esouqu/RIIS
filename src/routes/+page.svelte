<script lang="ts">
  import Contents from "$lib/components/Contents.svelte";
  import EventsFeed from "$lib/components/EventsFeed.svelte";
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>

<main class="main">
  <EventsFeed eventsData={[]} />
</main>
<aside class="aside">
  <Contents events={[]} />
</aside>

<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 1100px;
    margin: 10px 0;
    font-family: "JetBrains Mono", sans-serif;
  }
  .aside {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    height: 100vh;
  }
</style>
