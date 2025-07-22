<script>
	import { getContext } from 'svelte';
	import { MoonOutline, SunnyOutline } from 'svelte-ionicons';

	/** @type {import('$lib/utils/types').DataContext} */
	const { theme } = getContext('ui_context');
	const toggleTheme = ()=>{
		if($theme === "dark"){
			$theme = "light"
		}else{
			$theme = "dark"
		}
		localStorage.setItem('theme', $theme === "dark" ? 'dark' : 'light');

        $theme === "dark"
            ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark');
	}

    

</script>

<div class="cursor-pointer" on:click={toggleTheme}>
	{#if $theme === "dark"}
	<SunnyOutline color={'var(--color-icon-primary)'} size={24}/>
	{:else}
	<MoonOutline color={'var(--color-icon-primary)'} size={24}/>
	{/if}
</div>

<style>
</style>
