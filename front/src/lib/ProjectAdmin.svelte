<script>
  export let title;
  export let description;
  export let imageUrl;
  export let link;
</script>

<div class="flex flex-col bg-white bg-opacity-10 border border-gray-400 rounded p-2 mb-2 w-full">
  <div class="flex items-center">
    <img src={imageUrl} alt={title} class="w-20 h-20 object-cover mr-4" />
    <div class="flex-1">
      <h2 class="text-lg font-semibold text-white">{title}</h2>
      <p class="text-xs text-gray-100">{description}</p>
    </div>
  </div>
  <div class="mt-2 flex space-x-2 justify-between">
    <div class="flex space-x-2">
      <button class="bg-white bg-opacity-20 text-white px-3 py-1 rounded hover:bg-opacity-40 border border-white border-opacity-50">View</button>
      <button class="bg-white bg-opacity-20 text-white px-3 py-1 rounded hover:bg-opacity-40 border border-white border-opacity-50">Edit</button>
    </div>
    <button class="bg-red-500 bg-opacity-20 text-white px-3 py-1 rounded hover:bg-opacity-40 border border-red-500 border-opacity-50">Delete</button>
  </div>
</div>

<style>
</style>
