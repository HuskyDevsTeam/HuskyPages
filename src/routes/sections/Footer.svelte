<script>
	import logo from '$lib/images/logo.svg';
	import logoInvert from '$lib/images/logo-invert.svg';
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { LogoFacebook, LogoInstagram, LogoGithub } from 'svelte-ionicons';

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
</script>

<footer class="flex flex-row items-center justify-center">
	<div class="py-12 px-4 w-full flex flex-col items-stretch justify-start gap-8 xl:max-w-[1288px]">
		<a href="#header" class="self-center">
			<img class="w-[100px] h-[32px]" src={$theme === "dark" ? logoInvert : logo} alt="HuskyLogo" />
		</a>
		<ul class="flex flex-col md:flex-row items-center justify-center gap-6">
			<li>
				<a href="/#work" class="label-large-medium">{glosary?.layout?.nav_item_1}</a>
			</li>
			<li>
				<a href="/#achievements" class="label-large-medium">{glosary?.layout?.nav_item_2}</a>
			</li>
			<li>
				<a href="/#services" class="label-large-medium">{glosary?.layout?.nav_item_3}</a>
			</li>
			<li>
				<a href="/#tech" class="label-large-medium">{glosary?.layout?.nav_item_4}</a>
			</li>
			<li>
				<a href="/#team" class="label-large-medium">{glosary?.layout?.nav_item_5}</a>
			</li>
			<li>
				<a href="/#contact" class="label-large-medium">{glosary?.layout?.nav_item_6}</a>
			</li>
		</ul>
		<div class="flex flex-row gap-6 p-1 items-center justify-center">
			<a href="https://www.facebook.com/huskydevteam" target="_blank">
				<LogoFacebook color={'var(--color-states-neutral-400)'} size={24}/>
	
			</a>
			<a href="https://github.com/HuskyDevsTeam" target="_blank">
				<LogoGithub color={'var(--color-states-neutral-400)'} size={24}/>
	
			</a>
			<a href="https://www.instagram.com/huskydevteam?igsh=cGFoNHRyMTVmY3A5" target="_blank">
				<LogoInstagram color={'var(--color-states-neutral-400)'} size={24}/>
	
			</a>
		</div>
		<div class="flex flex-col md:flex-row items-center justify-between text-center text-color-secondary label-medium-regular md:pt-8 md:border-t md:border-color-primary">
			<div class="hidden md:flex flex-row gap-8 items-center justify-center">
				<a href="/terms" class="text-color-secondary">{glosary.layout.privacy_policy}</a>
				<a href="/terms" class="text-color-secondary">{glosary.layout.terms_of_use}</a>
			</div>
			<span>
				© 2024 Husky Devs. All rights reserved.
			</span>
		</div>
	</div>

</footer>

<style>
</style>
