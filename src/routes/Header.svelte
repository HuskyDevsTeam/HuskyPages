<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import logoInvert from '$lib/images/logo-invert.svg';
	import { dict } from '$lib/utils/dict';
	import { getContext, onMount } from 'svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import ThemeSelector from './ThemeSelector.svelte';
  	import { LogoFacebook, LogoInstagram, LogoGithub, MenuOutline } from 'svelte-ionicons';

	 let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
</script>

<header class="2xl:header-normal flex flex-row items-center justify-center">
	<nav class="px-[32px] 2xl:px-0 flex flex-row-reverse md:flex-row items-center justify-between text-base leading-6 tracking-wide h-[68px] 2xl:max-w-[1288px] grow gap-6">
		<!-- hamburguer menu -->
		<button class="button-active button-small 2xl:hidden">
			<MenuOutline color={'var(--color-icon-primary-invert)'} size={20}/>
		</button>
		<!-- real navbar -->
		<div class="flex flex-row gap-10 items-center md:grow">
			<a href="#header">
				<img class="w-[100px] h-[32px]" src={$theme === "dark" ? logoInvert : logo} alt="HuskyLogo" />
			</a>
			<ul class="2xl:flex flex-row hidden">
				<li class="px-4 py-6">
					<a href="/">{glosary?.layout?.nav_item_1}</a>
				</li>
				<li class="px-4 py-6">
					<a href="/">{glosary?.layout?.nav_item_2}</a>
				</li>
				<li class="px-4 py-6">
					<a href="/">{glosary?.layout?.nav_item_3}</a>
				</li>
				<li class="px-4 py-6">
					<a href="/">{glosary?.layout?.nav_item_4}</a>
				</li>
				<li class="px-4 py-6">
					<a href="/">{glosary?.layout?.nav_item_5}</a>
				</li>
				<li class="px-4 py-6">
					<a href="/">{glosary?.layout?.nav_item_6}</a>
				</li>
			</ul>
		</div>
		<!-- social list and functions -->
		<div class="md:flex hidden flex-row gap-10 p-1 items-center justify-center">
			<ThemeSelector/>
			<LanguageSelector/>
			<a href="#">
				<LogoFacebook color={'var(--color-icon-primary)'} size={24}/>
	
			</a>
			<a href="#">
				<LogoGithub color={'var(--color-icon-primary)'} size={24}/>
	
			</a>
			<a href="#">
				<LogoInstagram color={'var(--color-icon-primary)'} size={24}/>
	
			</a>
		</div>
	</nav>
</header>

