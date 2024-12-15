<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import Project from '$lib/Project.svelte';
  
	type ProjectType = {
	  title: string;
	  description: string;
	  image_url: string;
	  slug: string;
	};
  
	let projects: ProjectType[] = [];
	let errorMessage: string | null = null;
	let isLoading: boolean = true;
  
	async function loadProjects() {
	  try {
		const response = await fetch("http://localhost:5000/api/projects");
		if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
		projects = await response.json();
		errorMessage = null;
	  } catch (error: any) {
		console.error("Failed to load projects:", error.message);
		errorMessage = "Failed to connect to the database. Please try again later.";
	  } finally {
		isLoading = false;
	  }
	}
  
	loadProjects();
  </script>
  
  <main>
	<Nav />
	{#if isLoading}
	  <p class="text-center">Loading projects...</p>
	{:else if errorMessage}
	  <p class="text-red-500 text-center">{errorMessage}</p>
	{:else}
	  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
		{#each projects as project}
		  <Project 
			title={project.title}
			description={project.description}
			imageUrl={project.image_url}
			link={`/projects/${project.slug}`}
		  />
		{/each}
	  </div>
	{/if}
  </main>
  
  <style>
  </style>
  