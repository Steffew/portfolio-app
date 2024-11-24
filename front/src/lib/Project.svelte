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
    class="relative bg-black bg-opacity-50 border border-white border-opacity-20 rounded-lg shadow-md overflow-hidden transition-transform transform hover:shadow-lg w-auto m-1 group"
  >
    <img src={imageUrl} alt={title} class="w-full h-64 object-cover transition-transform transform group-hover:scale-110 duration-500 ease-out" />
    <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent h-2/4 flex flex-col justify-end">
      <h2 class="text-xl font-bold text-white">{title}</h2>
      <p class="text-sm text-gray-300">{description}</p>
    </div>
  </a>
  
  <style>
  </style>
  