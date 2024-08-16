<h3>Skins' filters:</h3>
<div class="checkbox_list">
	<div class="toggle_all">
		<Checkbox label="Toggle all" indeterminate={allIndeterminate} on:toggle={toggleAll} />
	</div>

	{#each skinFilters as filter}
		{#if filter.isParent}
			<CheckboxGroup
				labelParent={filter.label}
				checkboxChildren={getChildren(filter)}
				on:toggle={handleFilters}
			/>
		{:else if !filter.parent}
			<Checkbox label={filter.label} tooltip={filter.tooltip} on:toggle={handleFilters} />
		{/if}
	{/each}
</div>

<script lang="ts">
	import { SkinType, Availability, type SkinFilter, type FilterCheckbox } from '$lib/skinsData';
	import { checkedAll } from '$lib/stores';
	import Checkbox from './Checkbox.svelte';
	import CheckboxGroup from './CheckboxGroup.svelte';

	const skinFilters: Array<SkinFilter> = [
		{
			label: 'Default skins',
			filter: SkinType.default
		},
		{
			label: 'Recolors',
			tooltip:
				'Recolors of default model of champion, including recolors of old models.\nDOES NOT INCLUDE LIMITED SKINS\n(like recolors from season passes)',
			filter: SkinType.baseRecolor
		},
		{
			label: "'Special' skins",
			tooltip:
				'Special skins available only via special means and not via purchase - for example by having a specific account or getting a stream drop.\nExamples: X Androxus, TF2 Barik, Mixer Khan.\n  DOES NOT INCLUDE LIMITED SKINS',
			filter: SkinType.special
		},
		{
			label: 'Parts n Pieces skins',
			tooltip:
				"Skins where the only change is character's part, like hat, shield or other clothing part.\nDOES NOT INCLUDE LIMITED SKINS",
			filter: SkinType.hat
		},
		{
			label: 'Mastery skins',
			isParent: true
		},
		{
			label: 'Cosmic skins',
			parent: 'Mastery skins',
			filter: SkinType.cosmic
		},
		{
			label: 'Obsidian skins',
			parent: 'Mastery skins',
			filter: SkinType.obsidian
		},
		{
			label: 'Golden skins',
			parent: 'Mastery skins',
			filter: SkinType.golden
		},
		{
			label: 'Limited skins',
			tooltip: 'Skins available only during limited time (season pass, event pass etc.)',
			filter: Availability.limited
		},
		{
			label: 'Everything else',
			filter: 'all'
		}
	];

	export let selectedFilters = [...skinFilters];
	$: allIndeterminate =
		selectedFilters.length !== skinFilters.length && selectedFilters.length !== 0;

	function getChildren(filter: SkinFilter): Array<FilterCheckbox> {
		const children: Array<FilterCheckbox> = [];
		skinFilters.forEach((f) => {
			if (f.parent === filter.label) {
				children.push({ label: f.label, checked: true });
			}
		});
		return children;
	}

	function handleFilters(event: any) {
		const { checked, label } = event.detail;
		const filter = skinFilters.find((f) => f.label === label);
		if (!filter) {
			return;
		}
		if (checked) {
			selectedFilters.push(filter);
		} else {
			selectedFilters = selectedFilters.filter((f) => f.label !== label);
		}
		selectedFilters = selectedFilters;
	}

	function toggleAll(event: any) {
		const { checked } = event.detail;
		if (checked) {
			selectedFilters = [...skinFilters];
		} else {
			selectedFilters = [];
		}
		checkedAll.set(checked);
	}
</script>

<style>
	.checkbox_list {
		display: flex;
		align-items: start;
		flex-direction: column;
		justify-content: center;
	}

	.toggle_all {
		margin-top: -20px;
		margin-bottom: 20px;
		font-weight: bold;
	}
</style>
