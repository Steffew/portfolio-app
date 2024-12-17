<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { API_BASE_URL } from '$lib/config';

	interface Project {
		title: string;
		image_url: string;
		description: string;
		content: string;
	}

	let project: Project | null = null;
	let errorMessage: string | null = null;

	onMount(async () => {
		const slug = get(page).params.slug; // Extract the 'slug' from the URL
		try {
			const response = await fetch(`${API_BASE_URL}/api/projects/slug/${slug}`);
			if (!response.ok) throw new Error('Failed to fetch project data');
			project = (await response.json()) as Project; // Store the fetched project with type assertion
		} catch (error) {
			errorMessage = 'Unable to load project data.';
		}
	});
</script>

{#if errorMessage}
	<p class="text-center text-red-500">{errorMessage}</p>
{:else if project}
	<div class="mx-auto mt-10 max-w-4xl rounded-lg bg-gray-900 p-6 text-white">
		<h1 class="mb-4 text-3xl font-bold">{project.title}</h1>
		<img src={project.image_url} alt={project.title} class="mb-4 w-full rounded" />
		<p class="mb-4 text-gray-300">{project.description}</p>
		<div class="mt-4 text-gray-200">
			{@html project.content}
			<!-- Render HTML content from the database -->
		</div>
	</div>
{:else}
	<p class="mt-10 text-center text-gray-500">Loading project...</p>
{/if}

<style>
</style>
