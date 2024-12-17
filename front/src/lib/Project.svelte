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
	class="group relative m-1 w-auto transform overflow-hidden rounded-lg border border-white border-opacity-20 bg-black bg-opacity-50 shadow-md transition-transform hover:shadow-lg"
>
	<img
		src={imageUrl}
		alt={title}
		class="h-64 w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-110"
	/>
	<div
		class="absolute bottom-0 left-0 right-0 flex h-2/3 flex-col justify-end bg-gradient-to-t from-black to-transparent p-4"
	>
		<h2 class="text-xl font-bold text-white">{title}</h2>
		<p class="text-sm text-gray-300">{description}</p>
	</div>
</a>

<style>
</style>
