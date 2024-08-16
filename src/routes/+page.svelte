<div id="wrapper">
	<div class="container">
		<FilterSkins bind:selectedFilters={selectedSkinFilters} />
	</div>
	<div class="container rand_container">
		{#if showText}
			<h3>{text}</h3>
		{:else}
			<h3>{randSkin.name} {randSkin.champion}</h3>
		{/if}
		<img
			class="rand_button {showRandomGif ? 'hidden' : ''}"
			class:disabled
			on:click={initRandomization}
			src={randSkin ? randSkinPath : RAND_BTN_PATH}
			alt="Randomized champion"
		/>
		<img
			class="rand_button rand_img {showRandomGif ? '' : 'hidden'}"
			style="--background-col:{randBtnBorderColor}"
			src={`${$page.url}/img/randomize${randomizeImgId}.gif`}
			alt="Randomized champion"
		/>
		<span class="footer">
			{#if !disabled}
				<h4>currently {skinsInPool} skins in pool</h4>
				<span class="nice" class:hidden={skinsInPool !== 69}>nice</span>
			{:else}
				<span
					class="pool_empty"
					style="font-size: {errorFont}px; color: {errorFont > 16 ? 'red' : 'var(--color-text)'};"
				>
					no skins in pool{errorFont > 20 ? ' >:(' : ''}
				</span>
			{/if}
			<p>(out of {SKINS.length} possible)</p>
		</span>
	</div>
	<div class="container">
		<ChampionSelector bind:championsPool={selectedChampions} />
	</div>
</div>

<audio controls bind:this={audioRandomNode} preload="metadata">
	<source src={random} type="audio/mp3" />
</audio>
<audio controls bind:this={audioErrorNode} preload="metadata">
	<source src={error} type="audio/mp3" />
</audio>

<script lang="ts">
	import { SKINS } from '$lib/skins';
	import {
		getFileName,
		getChampForFile,
		type Skin,
		type SkinFilter,
		Availability
	} from '$lib/skinsData';
	import { page } from '$app/stores';
	import FilterSkins from '../components/FilterSkins.svelte';
	import { FILTERS } from '$lib/filters';
	import ChampionSelector from '../components/ChampionSelector.svelte';
	import random from '$lib/assets/wehikul.mp3';
	import error from '$lib/assets/error.mp3';

	const COLORS = [
		'red',
		'orange',
		'yellow',
		'yellowgreen',
		'green',
		'aqua',
		'dodgerblue',
		'blue',
		'indigo',
		'darkmagenta',
		'deeppink'
	];
	const BORDER_DEFAULT = 'black';
	const TEXT_DEFAULT = 'Click below to get random skin!';
	const RAND_BTN_PATH = `${$page.url}/img/random_btn.png`;

	let randSkin: Skin;
	let randNumber: number;
	let randBtnBorderColor = 'orange';
	let colorCounter = 0;
	let borderColorInterval: number | undefined;
	let stopInterval: number | undefined;
	let text = TEXT_DEFAULT;
	let showRandomGif = false;
	let randomizeImgId = 0;
	let showText = true;

	let errorFont = 16;
	let errorSound = 0.2;
	let audioRandomNode: HTMLMediaElement;
	let audioErrorNode: HTMLMediaElement;

	let selectedSkinFilters: Array<SkinFilter>;
	let selectedChampions: Array<string>;

	let randSkinPath = '';
	let randomizationDuration = 0;

	$: filteredSkins = getFilteredSkins(selectedSkinFilters, selectedChampions);
	$: skinsInPool = filteredSkins.length;
	$: disabled = skinsInPool === 0;

	$: if (audioRandomNode) audioRandomNode.volume = 0.4;
	$: if (audioErrorNode) audioErrorNode.volume = errorSound;

	$: if (!disabled) errorFont = 16;

	function getFilteredSkins(
		skinFilters: Array<SkinFilter>,
		championFilters: Array<string>
	): Array<Skin> {
		let skins = filterBySkins(SKINS, skinFilters);
		return filterByChampions(skins, championFilters);
	}

	function filterByChampions(skins: Array<Skin>, championFilters: Array<string>): Array<Skin> {
		if (!championFilters) {
			return [];
		}

		const shouldBeIncluded = (skin: Skin): boolean => {
			const found = championFilters.findIndex((champ) => champ === skin.champion);

			return found !== -1;
		};
		const skinsCopy = [...skins];

		return skinsCopy.filter((skin) => shouldBeIncluded(skin));
	}

	function filterBySkins(skins: Array<Skin>, skinFilters: Array<SkinFilter>): Array<Skin> {
		if (!skinFilters) {
			return [];
		}

		const shouldBeIncluded = (skin: Skin): boolean => {
			const limitedSkins = skinFilters.find((filter) => filter?.filter === Availability.limited);
			const isLimited = skin.availability === Availability.limited;
			if (limitedSkins && isLimited) {
				return true;
			}
			let oneOfFilters = skinFilters.find((filter) => {
				return filter?.filter === skin.type;
			});
			let everythingElse = false;
			if (skinFilters.find((f) => f.filter === 'all')) {
				everythingElse = FILTERS.every((filter) => {
					return filter !== skin.availability && filter !== skin.type;
				});
			}

			return Boolean(oneOfFilters && !isLimited) || everythingElse;
		};
		const skinsCopy = [...skins];

		return skinsCopy.filter((skin) => shouldBeIncluded(skin));
	}

	function setRandomSkin(): void {
		const SKINS_COUNT = filteredSkins.length;

		randNumber = Math.floor(Math.random() * SKINS_COUNT);
		while (SKINS[randNumber] === randSkin) {
			randNumber = Math.floor(Math.random() * SKINS_COUNT);
		}
		randSkin = filteredSkins[randNumber];
		randSkinPath = getFilePath(randSkin);
	}

	function setBorderColor(): void {
		randBtnBorderColor = COLORS[colorCounter];
		colorCounter++;
		if (colorCounter >= COLORS.length) {
			colorCounter = 0;
		}
	}

	function stopRandomizing(): void {
		randBtnBorderColor = BORDER_DEFAULT;
		showRandomGif = false;
		randomizeImgId = Math.floor(Math.random() * 3);
		window.clearInterval(borderColorInterval);
		window.clearInterval(stopInterval);
		borderColorInterval = undefined;
		stopInterval = undefined;
		showText = false;
	}

	function handleDisabled(): void {
		audioErrorNode.pause();
		audioErrorNode.currentTime = 0;
		audioErrorNode.play();
		errorFont += 2;
		errorSound += 0.1;
		if (errorSound > 1) errorSound = 1;
		if (errorFont > 80) errorFont = 80;
	}

	function initRandomization(): void {
		if (disabled) {
			handleDisabled();
		}
		if (borderColorInterval || disabled) {
			return;
		}

		setRandomSkin();
		text = 'Randomizing...';
		showText = true;
		showRandomGif = true;
		if (randomizationDuration === 0) {
			randomizationDuration = Math.floor(audioRandomNode.duration * 1000);
		}
		borderColorInterval = window.setInterval(setBorderColor, 100);
		stopInterval = window.setInterval(stopRandomizing, randomizationDuration);
		audioRandomNode.play();
	}

	function getFilePath(skin: Skin): string {
		const fileName = getFileName(skin);
		const champ = getChampForFile(skin.champion);
		return `${$page.url}/img/skins_img/${champ}/${fileName}.png`;
	}
</script>

<style>
	#wrapper {
		margin-top: 2em;
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}
	.rand_container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.container:not(:nth-child(2)) {
		flex-basis: 0%;
		flex-grow: 1;
		max-width: 30%;
		text-align: center;
		flex-direction: column;
		display: flex;
		align-items: center;
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
	.footer h4,
	p {
		margin: 5px;
	}
	.pool_empty {
		font-weight: bold;
		margin: 5px;
	}

	.rand_button {
		cursor: pointer;
		font-size: 5em;
		padding: 0;
		margin: 0;
		width: 500px;
		height: 500px;
		border-radius: 20px;
		background-color: black;
		display: block;
		text-align: center;
		padding: 5px;
	}
	.rand_button.disabled {
		cursor: not-allowed;
	}

	.rand_button:hover {
		opacity: 0.85;
	}
	.rand_button:active {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.rand_img {
		background-color: var(--background-col);
	}

	.hidden {
		display: none;
	}

	.nice {
		margin: 0;
		margin-top: 18px;
		padding: 0;
		font-size: 10px;
		color: rgba(0, 0, 0, 0.3);
		position: absolute;
	}

	audio {
		display: none;
	}
</style>
