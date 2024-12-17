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
  <p class="text-red-500 text-center">{errorMessage}</p>
{:else if project}
  <div class="p-6 bg-gray-900 text-white rounded-lg max-w-4xl mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-4">{project.title}</h1>
    <img src={project.image_url} alt={project.title} class="w-full rounded mb-4" />
    <p class="text-gray-300 mb-4">{project.description}</p>
    <div class="mt-4 text-gray-200">
      {@html project.content} <!-- Render HTML content from the database -->
    </div>
  </div>
{:else}
  <p class="text-gray-500 text-center mt-10">Loading project...</p>
{/if}

<style>
</style>
