<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { languagesEnum, themesEnum } from '$lib/utils/types';
	import { browser } from '$app/environment';

    let darkMode = true;
	if (browser) {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            darkMode = false;
        }
    }
	
	/**
	 * @typedef {Object} DataContext
	 * @property {import("$lib/utils/types").languagesEnum} lang - El nombre del usuario.
	 * @property {import("$lib/utils/types").themesEnum} theme - La edad del usuario.
	 */

	/** @type {DataContext} */
	export let data;

	// Create a store and update it when necessary...
	/** @type {import("svelte/store").Writable<import("$lib/utils/types").languagesEnum>} */
	const lang = writable(languagesEnum.ENGLISH);

	/** @type {import("svelte/store").Writable<import("$lib/utils/types").themesEnum>} */
	const theme = writable(darkMode ? themesEnum.DARK : themesEnum.LIGHT);

	// ...and add it to the context for child components to access
	setContext('ui_context', {lang, theme});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer/>
</div>

<style>
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
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
