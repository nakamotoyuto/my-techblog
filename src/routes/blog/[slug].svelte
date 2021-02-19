<script context="module" lang="ts">
	import Card, {Content, Media, MediaContent} from '@smui/card';
  export function preload({ params }) {
    return this.fetch(`blog/${params.slug}.json`)
      .then(res => res.json())
      .then(res => ({ post: res }))
  }
</script>

<script lang="ts">
  export let post: { id: string; title: string, html: HTMLElement };
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
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>
<div class="card-container">
	<Card style="width: 320px;">
		<Media class="card-media-16x9" aspectRatio="16x9">
			<MediaContent>
				<h2 class="mdc-typography--headline6" style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">A card with 16x9 media.</h2>
			</MediaContent>
		</Media>
		<Content style="color: #888;">
			<h3>{post.title}</h3>
		</Content>
	</Card>
</div>

<div class="content">
	{@html post.html}
</div>
