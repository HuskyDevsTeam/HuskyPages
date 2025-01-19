<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import logoInvert from '$lib/images/logo-invert.svg';
	import { dict } from '$lib/utils/dict';
	import { getContext, onMount } from 'svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import ThemeSelector from './ThemeSelector.svelte';
  	import { LogoFacebook, LogoInstagram, LogoGithub, MenuOutline, ArrowUp } from 'svelte-ionicons';

	let glosary = dict["en"]
	let openMenu = false

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
	const toggleMenu = ()=>{
		openMenu = !openMenu
	}
	$: menuMobileClass = openMenu ? "menu-mobile":"menu-mobile-hidden"
</script>

<header id="header" class="xl:header-normal flex flex-row items-center justify-center absolute left-0 right-0 top-0 z-20">
	<nav class="px-[32px] xl:px-0 flex flex-row-reverse md:flex-row items-center justify-between text-base leading-6 tracking-wide h-[68px] xl:max-w-[1288px] grow gap-6">
		<div class="xl:hidden {menuMobileClass} overflow-y-scroll">
			<button on:click={toggleMenu}>
				<ArrowUp color={'var(--color-icon-primary)'} size={24}/>
			</button>
			<a href="#work" on:click={toggleMenu}>{glosary?.layout?.nav_item_1}</a>
			<a href="#achievements" on:click={toggleMenu}>{glosary?.layout?.nav_item_2}</a>
			<a href="#services" on:click={toggleMenu}>{glosary?.layout?.nav_item_3}</a>
			<a href="#tech" on:click={toggleMenu}>{glosary?.layout?.nav_item_4}</a>
			<a href="#team" on:click={toggleMenu}>{glosary?.layout?.nav_item_5}</a>
			<a href="#contact" on:click={toggleMenu}>{glosary?.layout?.nav_item_6}</a>
			<div class="md:hidden flex">
				<ThemeSelector/>
			</div>
			<div class="md:hidden flex">
				<LanguageSelector/>
			</div>
		</div>
		<!-- hamburguer menu -->
		<button class="button-active button-small xl:hidden" on:click={toggleMenu}>
			<MenuOutline color={'var(--color-icon-primary-invert)'} size={20}/>
		</button>
		<!-- real navbar -->
		<div class="flex flex-row gap-10 items-center md:grow">
			<a href="#header">
				<img class="w-[100px] h-[32px]" src={$theme === "dark" ? logoInvert : logo} alt="HuskyLogo" />
			</a>
			<ul class="xl:flex flex-row hidden">
				<li class="px-4 py-6">
					<a href="#work">{glosary?.layout?.nav_item_1}</a>
				</li>
				<li class="px-4 py-6">
					<a href="#achievements">{glosary?.layout?.nav_item_2}</a>
				</li>
				<li class="px-4 py-6">
					<a href="#services">{glosary?.layout?.nav_item_3}</a>
				</li>
				<li class="px-4 py-6">
					<a href="#tech">{glosary?.layout?.nav_item_4}</a>
				</li>
				<li class="px-4 py-6">
					<a href="#team">{glosary?.layout?.nav_item_5}</a>
				</li>
				<li class="px-4 py-6">
					<a href="#contact">{glosary?.layout?.nav_item_6}</a>
				</li>
			</ul>
		</div>
		<!-- social list and functions -->
		<div class="md:flex hidden flex-row gap-10 p-1 items-center justify-center">
			<ThemeSelector/>
			<LanguageSelector/>
			<a href="https://www.facebook.com/huskydevteam" target="_blank">
				<LogoFacebook color={'var(--color-icon-primary)'} size={24}/>
	
			</a>
			<a href="https://github.com/HuskyDevsTeam" target="_blank">
				<LogoGithub color={'var(--color-icon-primary)'} size={24}/>
	
			</a>
			<a href="https://www.instagram.com/huskydevteam?igsh=cGFoNHRyMTVmY3A5" target="_blank">
				<LogoInstagram color={'var(--color-icon-primary)'} size={24}/>
	
			</a>
		</div>
	</nav>
</header>

