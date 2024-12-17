<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let id: string;
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let slug: string;

	function deleteProject() {
		dispatch('delete', { id });
	}

	function editProject() {
		dispatch('edit', { id });
	}
</script>

<div class="mb-2 flex w-full flex-col rounded border border-gray-400 bg-white bg-opacity-10 p-2">
	<div class="flex items-center">
		<img src={imageUrl} alt={title} class="mr-4 h-20 w-20 object-cover" />
		<div class="flex-1">
			<h2 class="text-lg font-semibold text-white">{title}</h2>
			<p class="text-xs text-gray-100">{description}</p>
		</div>
	</div>
	<div class="mt-2 flex justify-between space-x-2">
		<div class="flex space-x-2">
			<a
				href={slug}
				class="rounded border border-white border-opacity-50 bg-white bg-opacity-20 px-3 py-1 text-white hover:bg-opacity-40"
				>View</a
			>
			<button
				class="rounded border border-white border-opacity-50 bg-white bg-opacity-20 px-3 py-1 text-white hover:bg-opacity-40"
				on:click={editProject}
			>
				Edit
			</button>
		</div>
		<button
			class="rounded border border-red-500 border-opacity-50 bg-red-500 bg-opacity-20 px-3 py-1 text-white hover:bg-opacity-40"
			on:click={deleteProject}
		>
			Delete
		</button>
	</div>
</div>

<style>
</style>
