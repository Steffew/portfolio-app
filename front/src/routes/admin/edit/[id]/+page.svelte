<script lang="ts">
  import ProjectForm from '$lib/ProjectForm.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { get } from 'svelte/store';
	import { API_BASE_URL } from '$lib/config';

  let title = '';
  let description = '';
  let thumbnailUrl = '';
  let slug = '';
  let content = '';
  let errorMessage: string | null = null;

  onMount(async () => {
    const id = get(page).params?.id;
    if (!id) {
      errorMessage = 'Invalid project ID.';
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
      if (!response.ok) throw new Error('Failed to fetch project data');
      const project = await response.json();

      title = project.title;
      description = project.description;
      thumbnailUrl = project.image_url;
      slug = project.slug;
      content = project.content;
    } catch (error) {
      errorMessage = 'Unable to load project data.';
    }
  });
</script>

{#if errorMessage}
  <p class="text-red-500 text-center">{errorMessage}</p>
{:else}
  <ProjectForm
    {title}
    {description}
    {thumbnailUrl}
    {slug}
    {content}
  />
{/if}
