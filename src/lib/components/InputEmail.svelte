<script lang="ts">
	export let identifier: string;
	export let label: string;
	export let value = '';
</script>

<div>
	<label class="form-label" for={identifier}><strong>{label}</strong></label>
	<input
		id={identifier}
		class="form-control unstyled"
		type="email"
		name={identifier}
		bind:value
		pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$"
	/>
</div>
