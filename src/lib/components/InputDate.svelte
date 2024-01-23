<script lang="ts">
	export let identifier: string;
	export let label: string;
	export let value = '';
</script>

<div>
	<label class="form-label" for={identifier}><strong>{label}</strong></label>
	<input id={identifier} class="form-control unstyled" type="date" name={identifier} bind:value />
</div>
