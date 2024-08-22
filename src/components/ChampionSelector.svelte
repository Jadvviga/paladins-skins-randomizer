<h3 class="title">Champions' filters:</h3>
<h5 class="title_sm">(currently {championsPool.length} champions in the pool)</h5>

<div class="champion_select">
	<div class="section">
		<h4>IN</h4>
		<Search bind:value={searchPool} />
		<div class="pool" bind:this={poolNode}>
			{#each searchedPool as champion}
				<ChampionTile
					name={champion}
					selected={champion === selectedChampion && selectedPool === 'in'}
					on:championClicked={(event) => handleChampionSelection(event.detail, 'in')}
					on:clickOutside={(event) => handleClickOutside(event.detail)}
				/>
			{/each}
		</div>
	</div>
	<div class="buttons">
		<button class="move_all" bind:this={buttonMoveAll} on:click={moveAll}>move all </button>
		<button class="move_all" bind:this={buttonMoveOne} on:click={moveOne}> move one </button>
	</div>

	<div class="section">
		<h4>OUT</h4>
		<Search bind:value={searchOut} />
		<div class="pool" bind:this={outNode}>
			{#each searchedOut as champion}
				<ChampionTile
					name={champion}
					selected={champion === selectedChampion && selectedPool === 'out'}
					on:championClicked={(event) => handleChampionSelection(event.detail, 'out')}
					on:clickOutside={(event) => handleClickOutside(event.detail)}
				/>
			{/each}
		</div>
	</div>
</div>

<script lang="ts">
	import { CHAMPIONS } from '$lib/champions';
	import ChampionTile from './ChampionTile.svelte';
	import Search from './Search.svelte';

	const championList: Array<string> = Object.values(CHAMPIONS).map((champ) => {
		return champ;
	});

	const TILE_HEIGHT = 64;

	export let championsPool: Array<string> = [...championList];
	let championsOut: Array<string> = [];

	$: searchedPool = getSearched(championsPool, searchPool);
	$: searchedOut = getSearched(championsOut, searchOut);

	let selectedChampion = '';
	let selectedPool: 'in' | 'out' | '' = '';

	let buttonMoveAll: HTMLElement;
	let buttonMoveOne: HTMLElement;

	let poolNode: HTMLElement;
	let outNode: HTMLElement;

	let searchPool = '';
	let searchOut = '';

	function getSearched(pool: Array<string>, search: string): Array<string> {
		if (!search) {
			return pool;
		}
		return pool.filter((champ) => champ.toLowerCase().includes(search.toLowerCase()));
	}

	function handleChampionSelection(
		{ name, selected }: { name: string; selected: boolean },
		pool: 'in' | 'out'
	): void {
		if (selected) {
			selectedPool = '';
			selectedChampion = '';
			return;
		}
		selectedChampion = name;
		selectedPool = pool;
	}

	function moveAll(): void {
		const toPool = championsOut.length > championsPool.length;
		if (toPool) {
			championsPool = [...championList];
			championsOut = [];
		} else {
			championsPool = [];
			championsOut = [...championList];
		}
		selectedChampion = '';
		selectedPool = '';
		searchOut = '';
		searchPool = '';
	}

	function moveOne(): void {
		if (!selectedChampion || selectedPool === '') {
			return;
		}
		if (selectedPool === 'in') {
			moveToOut();
		} else {
			moveToPool();
		}
		searchOut = '';
		searchPool = '';
	}

	function moveToOut(): void {
		championsPool = championsPool.filter((champ) => champ !== selectedChampion);
		championsOut.unshift(selectedChampion);
		championsOut = championsOut.sort();
		selectedPool = 'out';

		const index = championsOut.findIndex((name) => name === selectedChampion);
		outNode.scrollTo(0, TILE_HEIGHT * index);
	}

	function moveToPool(): void {
		championsOut = championsOut.filter((champ) => champ !== selectedChampion);
		championsPool.unshift(selectedChampion);
		championsPool = championsPool.sort();
		selectedPool = 'in';

		const index = championsPool.findIndex((name) => name === selectedChampion);
		poolNode.scrollTo(0, TILE_HEIGHT * index);
	}

	function handleClickOutside({ target }: { target: EventTarget }): void {
		if (buttonMoveAll.contains(target as Node) || buttonMoveOne.contains(target as Node)) {
			return;
		}
		selectedChampion = '';
		searchOut = '';
		searchPool = '';
	}
</script>

<style>
	.champion_select {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		gap: 10px;
	}
	.pool {
		width: 215px;
		height: 550px;
		border: 1px solid var(--color-text);
		background-color: white;
		border-radius: 5px;
		gap: 2px;
		padding: 5px;
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.buttons {
		margin-top: -40px;
		height: 550px;
		gap: 20px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.section {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 3px;
	}

	button {
		background-color: var(--color-theme-3);
		border-radius: 5px;
		border: none;
		padding: 2px;
		text-transform: uppercase;
		font-weight: 600;
		color: var(--color-bg-1);
		word-wrap: break-word;
		min-width: 40px;
		max-width: 70px;
		cursor: pointer;
		min-height: 40px;
		font-size: 20px;
	}

	button:hover {
		background-color: var(--color-theme-1);
	}

	h4,
	.title {
		margin: 0;
	}

	.title_sm {
		margin: 0;
	}
</style>
