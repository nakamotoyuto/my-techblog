<script context="module" lang="ts">
  import Button from '@smui/button';
  export function preload() {
    return this.fetch('blog.json').then(res => res.json())
  }
</script>

<script lang="ts">
  export let contents: { id: string; title: string, html: HTMLElement }[];
</script>

<style lang="scss">
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
<Button on:click={() => alert('Clicked!')}>Just a Button</Button>
<ul>
  {#each contents as content}
    <li><a rel="prefetch" href="blog/{content.id}">{content.title}</a></li>
  {/each}
</ul>