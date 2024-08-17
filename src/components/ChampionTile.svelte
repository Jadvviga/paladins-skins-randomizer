<svelte:body on:click={handleClickOutside} />
<div bind:this={tileNode} class="champion_tile" class:selected on:click={toggleSelection}>
	<img class="icon" src={icon} alt="Portrait of champion {name}" />
	<span class="name">{name}</span>
</div>

<script lang="ts">
	import { getChampForFile } from '$lib/skinsData';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	export let name: string;
	export let selected = false;

	let tileNode: HTMLElement;

	const dispatcher = createEventDispatcher();

	$: icon = getIconName(name);

	function getIconName(champion: string): string {
		const name = getChampForFile(champion);
		const icon = name.concat('_', 'icon');
		return `${$page.url}/img/champ_icons/${icon}.png`;
	}

	function toggleSelection(): void {
		dispatcher('championClicked', { name, selected });
	}

	function handleClickOutside(event: MouseEvent): void {
		const { target } = event;
		if (tileNode?.contains(target as Node) || selected === false) {
			return;
		}
		dispatcher('clickOutside', { target });
	}
</script>

<style>
	.champion_tile {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: start;
		gap: 20px;
		width: 200px;
		border: 1px solid var(--color-theme-3);
		background-color: var(--color-bg-1);
		border-radius: 5px;
		cursor: pointer;
	}

	.selected {
		background-color: var(--color-theme-1);
		box-shadow: var(--color-theme-1) 0px 3px 8px;
	}

	.selected .name {
		color: var(--color-bg-1);
	}
	.icon {
		width: 64px;
		height: 64px;
	}

	.name {
		font-size: 22px;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-ms-user-select: none;
	}
</style>
