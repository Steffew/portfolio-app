<script lang="ts">
	import Tinymce from '@tinymce/tinymce-svelte';
	import { API_BASE_URL } from '$lib/config';
	import { goto } from '$app/navigation';

	export let title: string = '';
	export let description: string = '';
	export let thumbnailUrl: string = '';
	export let slug: string = '';
	export let content: string = '';
	export let projectId: string = ''; // Pass project ID explicitly

	let isFormValid: boolean = false;
	let errorMessage: string | null = null;

	// Explicitly check form validity
	$: isFormValid = !!(title && thumbnailUrl && slug && description && content);

	async function handleSave(e: Event) {
		e.preventDefault();
		try {
			if (!projectId) throw new Error('Missing project ID');

			const response = await fetch(`${API_BASE_URL}/api/projects/${projectId}`, {
				method: 'PUT', // Use ID to update the existing project
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title,
					description,
					image_url: thumbnailUrl,
					slug, // Allow updating slug
					content
				})
			});

			if (!response.ok) {
				const errorResponse = await response.text(); // Handle HTML errors
				throw new Error(errorResponse || 'Failed to update project');
			}

			// Redirect to admin page after successful update
			goto('/admin');
		} catch (error: unknown) {
			errorMessage =
				'An error occurred while updating the project. Ensure the project ID and payload are correct.';
			console.error('Error:', error);
		}
	}
</script>

<div class="h-full w-full rounded-lg bg-gray-900 p-8 shadow-2xl">
	<h1 class="mb-6 text-center text-2xl font-bold text-white">
		{title ? `${title}` : 'Edit Project'}
	</h1>
	<form class="space-y-6" on:submit={handleSave}>
		<div>
			<label for="title" class="mb-1 block text-sm font-medium text-gray-200">Title</label>
			<input
				id="title"
				type="text"
				bind:value={title}
				class="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
			/>
		</div>
		<div>
			<label for="thumbnailUrl" class="mb-1 block text-sm font-medium text-gray-200"
				>Thumbnail URL</label
			>
			<input
				id="thumbnailUrl"
				type="text"
				bind:value={thumbnailUrl}
				class="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
			/>
		</div>
		<div>
			<label for="slug" class="mb-1 block text-sm font-medium text-gray-200">Slug</label>
			<input
				id="slug"
				type="text"
				bind:value={slug}
				class="w-full rounded border border-gray-600 bg-gray-800 p-2 text-white"
			/>
		</div>
		<div>
			<label for="description" class="mb-1 block text-sm font-medium text-gray-200"
				>Description</label
			>
			<textarea
				id="description"
				bind:value={description}
				class="w-full resize-none rounded border border-gray-600 bg-gray-800 p-2 text-white"
				rows="1"
			></textarea>
		</div>
		<div>
			<label for="content" class="mb-1 block text-sm font-medium text-gray-200">Content</label>
			<Tinymce
				bind:value={content}
				apiKey="damj8ccb3m3bhtkoeau5n1pcsys6krdsr5yjducx9lnip2tw"
				class="w-full"
			/>
		</div>
		{#if errorMessage}
			<p class="text-sm text-red-500">{errorMessage}</p>
		{/if}
		<div class="mt-8 flex justify-end">
			<button
				type="submit"
				class="rounded bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
				disabled={!isFormValid}
			>
				Save Project
			</button>
		</div>
	</form>
</div>

<style>
</style>
