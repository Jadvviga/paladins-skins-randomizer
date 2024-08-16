<Checkbox
	label={labelParent}
	indeterminate={parentIndeterminate}
	bind:checked={parentChecked}
	on:toggle={(event) => setAllChildrenValue(event)}
/>
<div class="checkbox_group_children">
	{#each checkboxChildren as child, index}
		<Checkbox
			label={child.label}
			bind:checked={child.checked}
			on:toggle={(event) => setChildChecked(event.detail, index)}
		/>
	{/each}
</div>

<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import Checkbox from './Checkbox.svelte';
	import { type FilterCheckbox } from '$lib/skinsData';

	export let labelParent: string;
	export let checkboxChildren: Array<FilterCheckbox>;

	let parentChecked = true;
	$: parentIndeterminate = setParentIndeterminate(checkboxChildren);

	const dispatcher = createEventDispatcher();

	function setChildChecked({ checked, label }: { checked: boolean; label: string }, index: number) {
		checkboxChildren[index].checked = checked;
		checkboxChildren = checkboxChildren;
		dispatcher('toggle', { checked, label });
	}

	function setParentIndeterminate(children: Array<any>) {
		const allChecked = children.every((child) => child.checked === true);
		const allUnchecked = children.every((child) => child.checked === false);
		parentChecked = !allUnchecked;
		return allChecked || allUnchecked ? false : true;
	}

	function setAllChildrenValue(event: any) {
		const { checked, label } = event.detail;
		parentChecked = checked;

		checkboxChildren.forEach((child, index) => {
			setChildChecked({ checked, label: child.label }, index);
		});

		dispatcher('toggle', { checked, label });
	}

	onMount(() => {
		checkboxChildren.forEach((child) => {
			child.checked = true;
		});
	});
</script>

<style>
	.checkbox_group_children {
		padding-left: 25px;
		display: flex;
		align-items: start;
		flex-direction: column;
		justify-content: center;
	}
</style>
