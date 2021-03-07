<script context="module" lang="ts">
  import Card, {Content} from '@smui/card';
  export function preload() {
    return this.fetch('blog.json').then(res => res.json())
  }
</script>

<script lang="ts">
  export let contents: { id: string; title: string, createdAt: string,html: HTMLElement }[];
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
  a {
    text-decoration: none;
  }
  .card__content{
    display: flex;
  }
  .card__img{
    margin-right: 15px;
    width: 20%
  }
  .card__rightBox{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .card__date{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .subTitle{
    text-align: center;
  }
  .blog{
    margin-bottom: 15px;
  }
  .blog:last-of-type{
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
		.card__rightBox{
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h2 class="subTitle">新着記事一覧</h2>
<ul class="blogList">
  {#each contents as content}
    <li class="blog">
      <a rel="prefetch" href="blog/{content.id}">
        <div class="card-container">
          <Card>
            <Content  style="color: #888;">
              <div class="card__content">
                <img class="card__img" src="https://i.gzn.jp/img/2018/01/15/google-gorilla-ban/00.jpg" alt="記事タイトル"/>
                <div class="card__rightBox">
                  <h3 class="card__title">{content.title}</h3>
                  <time class="card__date">{content.createdAt}</time>
                </div>
              </div>
            </Content>
          </Card>
        </div>
      </a>
    </li>
  {/each}
</ul>