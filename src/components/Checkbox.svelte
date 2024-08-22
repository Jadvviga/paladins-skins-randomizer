<div class="checkbox_wrapper">
	<label class="checkbox">
		<input type="checkbox" bind:checked bind:indeterminate on:change={toggleCheckbox} />
		<span class="checkmark" />
		<span class="label"> {label} </span>
	</label>
	{#if tooltip}
		<div
			class="tooltip"
			on:mouseenter={() => (showTooltip = true)}
			on:mouseleave={() => (showTooltip = false)}
		>
			<span style="margin: auto">?</span>
			{#if showTooltip}
				<div class="tooltipText" transition:fade={{ delay: 0, duration: 200 }}>{tooltip}</div>
			{/if}
		</div>
	{/if}
</div>

<script lang="ts">
	import { checkedAll } from '$lib/stores';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let showTooltip = false;

	export let label = 'Checkbox';
	export let checked = true;
	export let indeterminate = false;
	export let tooltip = '';

	let unsubscribe: VoidFunction = () => undefined;

	const dispatcher = createEventDispatcher();

	function toggleCheckbox() {
		dispatcher('toggle', { checked, label });
	}

	onMount(() => {
		unsubscribe = checkedAll.subscribe((val) => (checked = val));
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<style>
	.checkbox_wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		margin: 10px 0;
	}

	.checkbox {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		cursor: pointer;
		font-size: 16px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.checkbox input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	.checkmark {
		height: 20px;
		width: 20px;
		border-radius: 20%;
		border: 2px solid var(--color-theme-2);
	}

	.checkbox:hover input ~ .checkmark {
		border: 2px solid var(--color-theme-3);
	}

	.checkbox input:checked ~ .checkmark {
		background-color: var(--color-theme-3);
		border: 2px solid var(--color-theme-3);
	}

	.checkbox input:indeterminate ~ .checkmark {
		background-color: var(--color-theme-3);
		border: 2px solid var(--color-theme-3);
	}

	.checkmark:after {
		content: '';
		display: none;
	}

	.checkbox input:checked:not(:indeterminate) ~ .checkmark:after {
		display: block;
		left: 9px;
		top: 5px;
		width: 5px;
		height: 10px;
		margin: 2px auto;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}

	.checkbox input:indeterminate ~ .checkmark:after {
		display: block;
		width: 10px;
		margin: 8px auto;
		border: 2px solid white;
	}

	.tooltip {
		display: inline-block;
		font-size: 12px;
		border: 1px solid var(--color-theme-2);
		background-color: var(--color-theme-2);
		border-radius: 100%;
		color: white;
		font-weight: bold;
		width: 12px;
		height: 12px;
		padding: 3px;
		cursor: pointer;
	}

	.tooltipText {
		border-radius: 0 10px 10px 10px;
		background-color: var(--color-theme-2);
		display: inline-block;
		padding: 10px;
		text-align: justify;
		opacity: 80%;
		position: relative;
		left: 16px;
		width: 150px;
	}
</style>
