<script lang="ts">
  import Contents from "$lib/components/Contents.svelte";
  import EventsFeed from "$lib/components/EventFeed.svelte";
  import type { EventPost } from "@prisma/client";

  const arr: EventPost[] = [
    {
      id: 1,
      type: "SIDE STORY",
      title: "LINGERING ECHOES OPEN",
      startTime: "2022 Dec 27 10:00 -7",
      endTime: "2023 Jan 10 03:59 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/619bcae024e9bc37062fb6dc702a930e.png",
    },
    {
      id: 4,
      type: "OTHER",
      title: "Message in a bottle",
      startTime: "2023 Jan 11 04:00 -7",
      endTime: "2023 Jan 26 04:00 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/00effd7aa8ef75d7891dfd51570bcbe6.jpg",
    },
    {
      id: 2,
      type: "OTHER",
      title: "Message in a bottle",
      startTime: "2023 Jan 11 04:00 -7",
      endTime: "2023 Jan 26 04:00 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/00effd7aa8ef75d7891dfd51570bcbe6.jpg",
    },
    {
      id: 3,
      type: "OTHER",
      title: "Message in a bottle",
      startTime: "2023 Jan 11 04:00 -7",
      endTime: "2023 Jan 26 04:00 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/00effd7aa8ef75d7891dfd51570bcbe6.jpg",
    },
    {
      id: 6,
      type: "OTHER",
      title: "Message in a bottle",
      startTime: "2023 Jan 11 04:00 -7",
      endTime: "2023 Jan 26 04:00 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/00effd7aa8ef75d7891dfd51570bcbe6.jpg",
    },
  ];
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>

<div>
  <main class="main">
    <EventsFeed eventsData={arr} />
  </main>
  <aside class="aside">
    <Contents events={arr} />
  </aside>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-direction: row;
  }
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 1100px;
    margin: 10px;
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
