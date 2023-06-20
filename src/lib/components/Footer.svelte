<script lang="ts">
  import githubLogo from '../assets/socials/github-dark.svg';
  import discordLogo from '../assets/socials/discord-dark.svg';

  const logos = [
    { link: 'https://github.com/logos', imageUrl: githubLogo },
    { link: 'https://discord.com/branding', imageUrl: discordLogo }
  ];
</script>

<footer class="footer">
  {#each logos as logo}
    <div class="image-wrapper">
      <a href={logo.link} target='_blank' rel="noopener noreferrer">
        <img src={logo.imageUrl} alt='logo'>
      </a>
    </div>
  {/each}
</footer>

<style lang="scss">
  .footer {
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .image-wrapper {
    width: 40px;

    & img {
      width: 100%;
    }
  }
</style>