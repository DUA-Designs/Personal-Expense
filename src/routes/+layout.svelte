<script>
	import Header  from './Header.svelte';
	import Boards from './sidebar.svelte';
	import '../app.css';
 
</script>

<div class="app">
	<Header></Header>
	 
       
	<main>
	<Boards></Boards>
		<section class="slot">
		 <slot ></slot>
		</section>
	</main>

	 
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: row;
		/* padding: 1rem; */
		width: 100%;
		/* max-width: 64rem; */
		margin: 0 auto;
		box-sizing: border-box;
	}
 
 
</style>
