import { API_BASE_URL } from '$lib/config';

export type ProjectType = {
	_id: string;
	title: string;
	description: string;
	image_url: string;
	slug: string;
};

export async function fetchProjects(): Promise<ProjectType[]> {
	const response = await fetch(`${API_BASE_URL}/api/projects`);
	if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
	return response.json();
}

export async function createProject(newProject: ProjectType): Promise<ProjectType> {
	const response = await fetch(`${API_BASE_URL}/api/projects`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newProject)
	});
	if (!response.ok) throw new Error('Failed to create project.');
	return response.json();
}

export async function updateProject(
	id: string,
	updatedData: Partial<ProjectType>
): Promise<ProjectType> {
	const response = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(updatedData)
	});
	if (!response.ok) throw new Error('Failed to update project.');
	return response.json();
}

export async function deleteProject(id: string): Promise<void> {
	const response = await fetch(`${API_BASE_URL}/api/projects/${id}`, {
		method: 'DELETE'
	});
	if (!response.ok) throw new Error('Failed to delete project.');
}
