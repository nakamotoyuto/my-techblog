<script context="module" lang="ts">
  export function preload({ params }) {
    return this.fetch(`blog/${params.slug}.json`)
      .then(res => res.json())
      .then(res => ({ post: res }))
  }
</script>

<script lang="ts">
  export let post: { id: string; title: string, updatedAt: string, html: HTMLElement };
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content{
		padding: 40px 20px;
		margin: 40px auto;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
	}
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.content__ttl{
		padding-bottom: 10px;
		font-size: 27px;
		border-bottom:1px solid black;
	}
</style>

<svelte:head>
	<title>mytechblog|{post.title}</title>
</svelte:head>

<div class="content">
	<h2 class="content__ttl">{post.title}</h2>
	<p class="content__updatedAt">{post.updatedAt}</p>
	{#if post.html[0].html}
		{@html post.html[0].html}
	{:else if post.html[0].richeditor}
		{@html post.html[0].richeditor}
	{/if}
</div>
