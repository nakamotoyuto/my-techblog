<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
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

<Nav {segment}/>

<main class="main">
	<slot></slot>
</main>