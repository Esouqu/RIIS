<script lang="ts">
  import EventCard from "$lib/components/EventCard.svelte";
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
      id: 1,
      type: "SIDE STORY",
      title: "LINGERING ECHOES OPEN",
      startTime: "2022 Dec 27 10:00 -7",
      endTime: "2023 Jan 10 03:59 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/af87ff2e2cc4347de09845754d531b32.jpg",
    },
    {
      id: 1,
      type: "SIDE STORY",
      title: "LINGERING ECHOES OPEN",
      startTime: "2022 Dec 27 10:00 -7",
      endTime: "2023 Jan 10 03:59 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/d21277d907eada44268304f646a3a3b6.jpg",
    },
    {
      id: 1,
      type: "SIDE STORY",
      title: "LINGERING ECHOES OPEN",
      startTime: "2022 Dec 27 10:00 -7",
      endTime: "2023 Jan 10 03:59 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/e5a93f82e303b220116399ddbaa09e2e.png",
    },
    {
      id: 1,
      type: "SIDE STORY",
      title: "LINGERING ECHOES OPEN",
      startTime: "2022 Dec 27 10:00 -7",
      endTime: "2023 Jan 10 03:59 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/b12af128c382f08f3e1e687d5bba2f12.png",
    },
    {
      id: 1,
      type: "SIDE STORY",
      title: "LINGERING ECHOES OPEN",
      startTime: "2022 Dec 27 10:00 -7",
      endTime: "2023 Jan 10 03:59 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/f23a7ceeedc4fbf180adecbec3ade013.jpg",
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
        "https://webusstatic.yo-star.com/uy0news/ae/dd5b432f0564a55c369606f7c9c42e62.png",
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
        "https://webusstatic.yo-star.com/uy0news/ae/e747ed2cb4ce97f88acdffb2af042f5b.png",
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
        "https://webusstatic.yo-star.com/uy0news/ae/7b28dba084092ffa06488e611e514cd2.jpg",
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
        "https://webusstatic.yo-star.com/uy0news/ae/73be8079c52fd8dd9cbeb935998406ef.png",
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
        "https://webusstatic.yo-star.com/uy0news/ae/bc06bff9386d091a7976b1e0ac9f6f5a.png",
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
        "https://webusstatic.yo-star.com/uy0news/ae/2f7f75432a869875bd5ab713584c33e5.png",
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
        "https://webusstatic.yo-star.com/uy0news/ae/87f75ebeda1a3dcc7e290bb5e2acaa0d.png",
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
    {
      id: 6,
      type: "OTHER",
      title: "Message in a bottle",
      startTime: "2023 Jan 11 04:00 -7",
      endTime: "2023 Jan 26 04:00 -7",
      createdAt: new Date(),
      content: "",
      imageUrl:
        "https://webusstatic.yo-star.com/uy0news/ae/623dd1450d6c2c098f3755dfbd80f44b.png",
    },
  ];
</script>

<svelte:head>
  <title>Rhoads Island Information Space</title>
</svelte:head>

<main class="scroll-container">
  <div class="events-wrapper">
    {#each arr as event}
      <EventCard
        image={event.imageUrl}
        type={event.type}
        title={event.title}
        details={"Lorem"}
        time={event.startTime}
      />
    {/each}
  </div>
</main>

<style lang="scss">
  .scroll-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
  }
  .events-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    width: 100%;
  }
</style>
