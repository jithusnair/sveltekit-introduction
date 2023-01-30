<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div>
	<h1>
		{data.blog.title}
	</h1>

	{@html data.blog.synopsis}
</div>

<style>
	div {
		padding: 1rem;
	}
</style>
