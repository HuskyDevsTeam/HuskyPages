<script>
	import { dict } from '$lib/utils/dict';
  	import { getContext } from 'svelte';
	import { ChevronDown, ChevronUp } from 'svelte-ionicons';
	import FLAG_EN from '$lib/images/flag_en.svg'
	import FLAG_ES from '$lib/images/flag.svg'

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang } = getContext('ui_context');

	let glosary = dict[$lang]
	let open = false
	let toggleOpen = ()=>{
		open = !open
	}
	
</script>
<div class="flex flex-row gap-0.5 justify-center items-center cursor-pointer py-0.5" on:click={toggleOpen}>
	{#if $lang === "es"}
		<img src={FLAG_ES} alt="FLAG_ES" class="w-[24px] h-[18px]">
	{/if}
	{#if $lang === "en"}
		<img src={FLAG_EN} alt="FLAG_EN" class="w-[24px] h-[18px]">
	{/if}
	{#if open}
		<ChevronUp color={'var(--color-icon-primary)'} size={20}/>
	{:else}
		<ChevronDown color={'var(--color-icon-primary)'} size={20}/>
	{/if}
</div>

<style>
</style>
