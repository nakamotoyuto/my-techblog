<script lang="ts">
	import Header from '../components/Header.svelte'

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
	.main{
		padding: 40px 20px;
	}
</style>

<Header />

<main class="main">
	<slot></slot>
</main>