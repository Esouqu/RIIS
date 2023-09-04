<script lang="ts">
  export let id: string;
  export let checked: boolean = false;
</script>

<div class="toggle">
  <input type="checkbox" name={id} {id} bind:checked />
  <label for={id} />
</div>

<style lang="scss">
  input[type="checkbox"] {
    display: none;
    appearance: none;
  }

  label {
    position: relative;
    display: block;
    width: 60px;
    height: 30px;
    border-radius: 100px;
    text-indent: -9999px;
    background: grey;
    cursor: pointer;
    user-select: none;
  }

  label::after {
    content: "";
    position: absolute;
    top: 0;
    left: 5px;
    bottom: 0;
    margin: auto 0;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 100%;
    transition: 0.2s;
    user-select: none;
  }

  input:checked + label {
    background: var(--rarity-color-3);
  }

  input:checked + label::after {
    transform: translateX(100%);
  }
</style>
