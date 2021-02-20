<script context="module" lang="ts">
  import Card, {Content, Media, MediaContent} from '@smui/card';
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
		padding: 0;
  }
  li {
		list-style: none;
	}
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
<ul>
  {#each contents as content}
    <li><a rel="prefetch" href="blog/{content.id}">
      <div class="card-container">
        <Card>
          <Media class="card-media-16x9" aspectRatio="2x2">
            <MediaContent>
              <h2 class="mdc-typography--headline6" style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0;">A card with 16x9 media.</h2>
            </MediaContent>
          </Media>
          <Content style="color: #888;">
            <h3>{content.title}</h3>
          </Content>
        </Card>
      </div>
      </a></li>
  {/each}
</ul>