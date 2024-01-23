<script lang="ts">
	export let identifier: string;
	export let label: string;
	export let value = '';
	export let className = '';
	export let type = '';
	export let required = false;
</script>

<span class={className + 'label'}>
	<label for={identifier} class="text-[#3c489f] mt-2">{label}</label>
	{#if type === 'password'}
		<input
			id={identifier}
			class="input bg-slate-200 text-[#3c489f] border-none rounded-md"
			type="password"
			placeholder={label}
			name={identifier}
			required={required}
			bind:value
		/>
	{:else}
		<input
			id={identifier}
			class="input bg-slate-200 text-[#3c489f] border-none rounded-md"
			type="text"
			placeholder={label}
			name={identifier}
			required={required}
			bind:value
		/>
	{/if}
</span>
