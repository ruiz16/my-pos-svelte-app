<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { enhance } from '$app/forms';
	import { user } from '../../stores';
	export let form;
	export let data;

	const baseUrl = import.meta.env.BASE_URL;

	let thisForm: HTMLFormElement;

	$: clearUser = data?.clearUser;
	$: {
		if (clearUser) user.set(undefined);
	}

	let showPassword: boolean = false;
</script>

<main class="flex justify-center items-center h-full">
	<div class="card mb-3 shadow flex flex-col items-center justify-center pt-8 w-[420px]">
		<div class="pb-6 w-[80%]">
			<img src={`${baseUrl}images/icono_nomina.png`} alt="icono software" class="mx-auto h-[160px]" />
			<form class="mx-3 pt-4" bind:this={thisForm} use:enhance method="post" action="?/login">
				<Input type="text" identifier="user" label="Usuario*" value={form?.email ?? ''} required={true} />
				<Input type="password" identifier="password" label="Contraseña" required={true} />
				{#if form?.error}
					<p class="text-red-500 pt-2">Error: {form.message}</p>
				{/if}
				<button class="btn bg-[#3c489f] text-white w-full mt-5 border-none" type="submit">Aceptar</button>
			</form>
		</div>
	</div>
</main>
