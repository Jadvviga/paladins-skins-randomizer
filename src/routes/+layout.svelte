<div class="app">
	<header>
		<a href="{base}/">Paladins skin randomizer</a>
	</header>

	<main>
		<slot />
	</main>

	<footer bind:clientHeight={footerHeight}>
		<span>version 1.0. | Tidal Surge Update</span>
		<span style="flex: 100;" />
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/statistics' ? 'page' : undefined}>
					<a href="https://github.com/Jadvviga/paladins-skin-randomizer" target="_blank">GitHub</a>
				</li>
				<li aria-current={$page.url.pathname === '/gallery' ? 'page' : undefined}>
					<span popovertarget="credits" on:click={toggleCredits}>Credits</span>
				</li>
			</ul>
		</nav>
	</footer>
</div>

<div id="credits" popover="manual" bind:this={credits} style="--height: {footerHeight + 5}px;">
	<span on:click={toggleCredits}>X</span>
	<p>Skin randomizer by jadvviga</p>
	<p>
		Character images, skins and names from video game 'Paladins, Champions of the Realm' by Evil
		Mojo Studios
	</p>
	<p>Randomization music - 'Wormhole' by Bartek Brosz, from video game 'Rex and Time Machine'</p>
</div>

<script lang="ts">
	import '../styles.css';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let credits: HTMLElement;
	let footerHeight: number;

	function toggleCredits(): void {
		credits.togglePopover();
	}
</script>

<style>
	#credits {
		background-color: var(--color-bg-2);
		border: none;
		border-radius: 5px;
		width: 300px;
		height: 210px;
		position: absolute;
		inset: unset;
		right: unset;
		bottom: unset;
		bottom: var(--height);
		right: 5px;
		margin: 0;
		text-align: left;
		color: var(--color-bg-1);
	}

	#credits p {
		margin: 10px 0;
	}

	#credits span {
		display: block;
		margin: 0 0 20px 0;
		text-align: right;
		cursor: pointer;
		transition: color 0.2s linear;
	}

	#credits span:hover {
		color: var(--color-theme-1);
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding: 12px;
		gap: 12px;
		height: 40px;
		background-color: var(--color-bg-2);
		color: var(--color-bg-1);
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-bg-2);
	}

	nav {
		display: flex;
		flex: 1;
		justify-content: start;
		align-items: center;
	}

	header a {
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1.6rem;
		padding: 0.5em 0;
		margin: auto;
		color: var(--color-bg-1);
		text-decoration: none;
		transition: color 0.2s linear;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		padding: 0 1.5em;
	}

	nav a,
	nav span {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-weight: 700;
		font-size: 0.8rem;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		color: var(--color-bg-1);
		cursor: pointer;
		user-select: none;
	}

	a:hover,
	nav span:hover {
		color: var(--color-theme-1);
	}
</style>
