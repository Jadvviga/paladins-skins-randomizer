<input type="text" bind:value placeholder="Search..." />

<script lang="ts">
	export let value = '';
</script>

<style>
	input {
		background-image: url('/search.png');
		background-repeat: no-repeat;
		padding-left: 24px;
		border-radius: 2px;
		border: 1px solid var(--color-text);
		height: 24px;
		width: 180px;
	}

	input:focus,
	input:focus-visible {
		border: 1px solid var(--color-theme-3);
		box-shadow: none;
		outline: 1px solid var(--color-theme-3);
	}
</style>
