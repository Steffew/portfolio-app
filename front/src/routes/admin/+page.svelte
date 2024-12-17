<script lang="ts">
	import NavAdmin from '$lib/NavAdmin.svelte';
	import ProjectAdmin from '$lib/ProjectAdmin.svelte';
	import { fetchProjects, createProject, updateProject, deleteProject } from '$lib/projectService';
	import type { ProjectType } from '$lib/projectService';
	import { goto } from '$app/navigation';

	let projects: ProjectType[] = [];
	let errorMessage: string | null = null;
	let isLoading: boolean = true;

	async function loadProjects() {
		try {
			projects = await fetchProjects();
			errorMessage = null;
		} catch (error: any) {
			console.error('Failed to load projects:', error.message);
			errorMessage = 'Failed to connect to the database. Please try again later.';
		} finally {
			isLoading = false;
		}
	}

	async function handleCreate(newProject: ProjectType) {
		try {
			const createdProject = await createProject(newProject);
			projects = [...projects, createdProject];
		} catch (error: any) {
			console.error('Error creating project:', error.message);
			errorMessage = 'Failed to create a new project.';
		}
	}

	async function handleUpdate(id: string, updatedData: Partial<ProjectType>) {
		try {
			const updatedProject = await updateProject(id, updatedData);
			projects = projects.map((project) => (project.slug === id ? updatedProject : project));
		} catch (error: any) {
			console.error('Error updating project:', error.message);
			errorMessage = 'Failed to update the project.';
		}
	}

	async function handleDelete(id: string) {
		try {
			await deleteProject(id);
			location.reload();
		} catch (error: any) {
			console.error('Error deleting project:', error.message);
			errorMessage = 'Failed to delete the project.';
		}
	}

	loadProjects();
</script>

<main>
	<NavAdmin />
	{#if isLoading}
		<p class="text-center">Loading projects...</p>
	{:else if errorMessage}
		<p class="text-center text-red-500">{errorMessage}</p>
	{:else}
		<div class="mx-auto mt-4 max-w-4xl">
			{#each projects as project}
				<ProjectAdmin
					id={project._id}
					title={project.title}
					description={project.description}
					imageUrl={project.image_url}
					slug={`/projects/${project.slug}`}
					on:edit={(event) => goto(`/admin/edit/${event.detail.id}`)}
					on:delete={(event) => handleDelete(event.detail.id)}
				/>
			{/each}
		</div>
	{/if}
</main>

<style>
</style>
