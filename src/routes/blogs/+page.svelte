<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>Blogs</h1>

<div class="container">
	{#each data.blogs as blog}
		<a href={`/blogs/${blog.id}`}>
			{blog.title}
		</a>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}
</style>
