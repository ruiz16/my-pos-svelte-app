<script lang="ts">
	import { AppBar, AppShell, Avatar, Drawer, type DrawerSettings, Toast } from '@skeletonlabs/skeleton';
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	import type { PageData } from '../$types';
	export let data: PageData;

	const baseUrl = import.meta.env.BASE_URL;
	const drawerStore = getDrawerStore();
	import Navigation from '$/routes/menu.svelte';

	function drawerOpen() {
		const drawerSettings: DrawerSettings = {
			id: 'menu',
			// Provide your property overrides:
			bgDrawer: 'bg-[#3C489F] text-white',
			bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
			width: 'w-72',
			padding: 'p-0',
			rounded: 'rounded-xl',
		};
		drawerStore.open(drawerSettings);
	}
</script>

<AppShell slotsidebarleft="bg-[#3C489F] text-white w-0 lg:w-64">
	<svelte:fragment slot="header">
		<Drawer>
			<Navigation />
		</Drawer>
		<AppBar background="bg-[#3C489F] text-white px-6">
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="h-4 w-4 fill-white">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<img
						src={`${baseUrl}images/comptel-gris.png`}
						alt="icono software"
						class="mx-auto h-8"
						style="filter: brightness(0) invert(1);"
					/>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<span class="mr-1 lg:block" style="text-transform: capitalize;">{data.name}</span>
				<Avatar initials="SR" width="w-8" rounded="rounded-full" background="bg-white" />
				<button class="btn btn-primary rounded-md btn-sm bg-red-600">
					<a data-sveltekit-preload-data="off" href="/logout">Cerrar Sesión</a>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		<div id="sidebar-left" class="hidden lg:block">
			<Navigation />
		</div>
	</svelte:fragment>

	<div class="pt-2">
		<slot />
	</div>
	<Toast class="text-white" position="br" />
</AppShell>
