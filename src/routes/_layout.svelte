<script lang="ts">
  import Nav from "../components/Nav.svelte";

  export let segment: string;
</script>

<Nav {segment} />

<main>
  <slot />
</main>

<style lang="scss">
  @import "../styles/main";
  main {
    position: relative;
    max-width: 56em;
    background-color: $test-color;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
