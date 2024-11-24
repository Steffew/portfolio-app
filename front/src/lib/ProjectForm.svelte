<script>
  import HtmlEditor from '$lib/HtmlEditor.svelte';
  export let title = '';
  export let description = '';
  export let thumbnailUrl = '';
  export let slug = '';
  export let content = '';
</script>

<div class="w-full h-full flex items-center justify-center bg-white bg-opacity-5">
  <div class="w-full h-full p-8 rounded-lg shadow-2xl">
    <h1 class="text-2xl font-bold text-white mb-6 text-center">{title ? `${title}` : 'Create New Project'}</h1>
    <form class="space-y-6">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-200 mb-2">Title</label>
        <input id="title" type="text" bind:value={title} class="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
      </div>
      <div>
        <label for="thumbnailUrl" class="block text-sm font-medium text-gray-200 mb-2">Thumbnail URL</label>
        <input id="thumbnailUrl" type="text" bind:value={thumbnailUrl} class="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
      </div>
      <div>
        <label for="slug" class="block text-sm font-medium text-gray-200 mb-2">Slug</label>
        <input id="slug" type="text" bind:value={slug} class="w-full p-3 rounded bg-gray-800 text-white border border-gray-600" />
      </div>
      <div>
        <label for="description" class="block text-sm font-medium text-gray-200 mb-2">Description</label>
        <textarea id="description" bind:value={description} class="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 resize-none" rows="1"></textarea>
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-200 mb-2">Content</label>
        <div>
        <label for="content" class="block text-sm font-medium text-gray-200 mb-2">Content</label>
        <div id="content" class="w-full p-3 rounded bg-gray-800 text-white border border-gray-600">
          <svelte:component this={HtmlEditor} bind:value={content} />
        </div>
      </div>
      </div>
      <div class="flex justify-end mt-8">
        <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Save Project</button>
      </div>
    </form>
  </div>
</div>

<style>
</style>
