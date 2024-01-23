<script lang="ts">
	import { IconPlus } from '@tabler/icons-svelte';
	export let url: string;
	export let label: string;
	export let title: string;
	export let className = '';
</script>

<div class={className}>
	<a
		type="button"
		class="btn bg-[#3c489f] text-white mb-4 flex h-4 cursor-pointer justify-around px-4 rounded-md"
		href={url}
		title={title}
	>
		<IconPlus size={12} stroke={5} class="mr-2" /> {label}
	</a>
</div>
