<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { IconHome, IconUserCircle, IconBuildingStore, IconCaretDown } from '@tabler/icons-svelte';
	import { onMount } from 'svelte';

	interface Seleccionado {
		ul?: HTMLElement;
		arrow?: HTMLElement;
		index?: number;
	}

	let divElement;
	const baseUrl = import.meta.env.BASE_URL;
	const drawerStore = getDrawerStore();

	function drawerClose() {
		drawerStore.close();
	}

	function menuToggle() {
		function link(element: HTMLElement) {
			let ul: any;
			let arrow: any;
			let seleccionado: Seleccionado = {};

			function observeCallback() {
				ul = element.parentNode?.querySelector('ul');
				arrow = element.querySelector('.icono-caret');
				const height = ul.children.length * 48;
				ul.style.height = '0px';

				element.addEventListener('click', () => {
					if (seleccionado.ul !== undefined) {
						if (ul === seleccionado.ul) {
							seleccionado.ul = undefined;
							seleccionado.arrow = undefined;
							rotate(0, arrow);
							ul.style.height = '0px';
						} else {
							seleccionado.ul.style.height = '0px';
							seleccionado.ul = ul;
							seleccionado.arrow = arrow;
							ul.style.height = `${height}px`;
							rotate(180, arrow);
						}
					} else {
						rotate(180, arrow);
						seleccionado.ul = ul;
						seleccionado.arrow = arrow;
						seleccionado.index = 0;
						ul.style.height = `${height}px`;
					}
				});
			}

			// Observar cambios en el atributo 'menuToggle'
			// Si necesitas observar cambios en otros atributos, puedes agregarlos aquí
			onMount(() => {
				observeCallback();
			});
		}

		return { link };
	}

	function rotate(degrees: number, element: HTMLElement) {
		element!.style.transform = `rotate(${degrees}deg)`;
	}

	// Inicializar el componente y la lógica de la directiva
	const { link } = menuToggle();
</script>

<!-- TODO: crear menu iterable.  -->

<nav class="list-nav">
	<img src={`${baseUrl}images/icono_nomina.png`} alt="icono software" class="mx-auto mt-4 h-32" />
	<ul class="sidebar-menu">
		<li class="noselect flex items-center justify-start hover:bg-sky-700">
			<a href="/app/home" rel="noopener noreferrer" title="Ir a inicio" on:click={drawerClose} class="h-16 w-full text-white">
				<IconHome class="mx-1" size={24} stroke={0.5} />
				Inicio
			</a>
		</li>
		<li class="noselect items-center justify-start hover:bg-sky-700">
			<span
				bind:this={divElement}
				use:link
				class="sidebar-menu__link flex h-16 cursor-pointer items-center justify-start px-4 hover:bg-sky-700"
			>
				<span class="flex w-full">
					<IconBuildingStore class="mx-1" size={24} stroke={0.5} />
					Empresas
				</span>
				<IconCaretDown class="icono-caret mx-1" size={24} stroke={0.5} />
			</span>
			<ul class="sidebar-menu-second-level collexpanded">
				<li class="noselect h-6 flex" style="min-height: 48px;">
					<a href="/app/empresas" rel="noopener noreferrer" title="Ir a empresas"> Empresas </a>
				</li>
				<li class="noselect h-6 flex" style="min-height: 48px;">
					<a href="/app/sucursales" rel="noopener noreferrer" title="Ir a sucursales"> Sucursales </a>
				</li>
			</ul>
		</li>
	</ul>
</nav>

<span class="copy-right"> © Comptel System Ltda. <br />Versión: 1.0 </span>
