<script>
  import Tinymce from '@tinymce/tinymce-svelte';
  export let title = '';
  export let description = '';
  export let thumbnailUrl = '';
  export let slug = '';
  export let content = '';
  let isFormValid = false;

  $: isFormValid = title && thumbnailUrl && slug && description && content;
</script>

<div class="w-full h-full p-8 bg-gray-900 rounded-lg shadow-2xl">
  <h1 class="text-2xl font-bold text-white mb-6 text-center">{title ? `${title}` : 'Create New Project'}</h1>
  <form class="space-y-6">
    <div>
      <label for="title" class="block text-sm font-medium text-gray-200 mb-1">Title</label>
      <input id="title" type="text" bind:value={title} class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
    </div>
    <div>
      <label for="thumbnailUrl" class="block text-sm font-medium text-gray-200 mb-1">Thumbnail URL</label>
      <input id="thumbnailUrl" type="text" bind:value={thumbnailUrl} class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
    </div>
    <div>
      <label for="slug" class="block text-sm font-medium text-gray-200 mb-1">Slug</label>
      <input id="slug" type="text" bind:value={slug} class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600" />
    </div>
    <div>
      <label for="description" class="block text-sm font-medium text-gray-200 mb-1">Description</label>
      <textarea id="description" bind:value={description} class="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 resize-none" rows="1"></textarea>
    </div>
    <div>
      <label for="content" class="block text-sm font-medium text-gray-200 mb-1">Content</label>
      <Tinymce bind:value={content} apiKey="damj8ccb3m3bhtkoeau5n1pcsys6krdsr5yjducx9lnip2tw" class="w-full" />
    </div>
    <div class="flex justify-end mt-8">
      <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition" disabled={!isFormValid}>Save Project</button>
    </div>
  </form>
</div>

<style>
</style>
