<script>
    export let title;
    export let description;
    export let imageUrl;
    export let link;
  </script>
  
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col bg-black bg-opacity-50 border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform hover:shadow-lg hover:-translate-y-1 w-auto m-2"
  >
    <img src={imageUrl} alt={title} class="w-full h-64 object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-bold mb-2 text-white">{title}</h2>
      <p class="text-sm text-gray-300">{description}</p>
    </div>
  </a>
  
  <style>
  </style>
  