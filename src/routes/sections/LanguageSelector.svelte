<script>
	import { dict } from '$lib/utils/dict';
  	import { getContext } from 'svelte';
	import { ChevronDown, ChevronUp } from 'svelte-ionicons';
	import FLAG_EN from '$lib/images/flag_en.svg'
	import FLAG_ES from '$lib/images/flag.svg'
	
	/**
	 * @typedef {Object} LanguageList
	 * @property {"es"|"en"} key - código de idioma.
	 * @property {string} value - texto en el idioma especificado.
	 * @property {string} flag - ruta de la imagen de la bandera.
	 */
	/** @type {import('$lib/utils/types').DataContext} */
	const { lang } = getContext('ui_context');
	/** @type {LanguageList[]} */
	const languageList = [
		{
			key:"en",
			value:"English (US)",
			flag: FLAG_EN
		},
		{
			key:"es",
			value:"Español (ESP)",
			flag: FLAG_ES
		},
	]

	let glosary = dict[$lang]
	let open = false
	let toggleOpen = ()=>{
		open = !open
	}
	/**
	 * @param {"es"|"en"} newLanguage - A new language code to change the language of the system
	 */
	const changeLanguage = (newLanguage) =>{
		if($lang !== newLanguage){
			$lang = newLanguage
		}
		localStorage.setItem('language', newLanguage === "es" ? 'ES' : 'EN');
	}
	
</script>
<button class="flex md:flex-row flex-col gap-0.5 justify-center items-center cursor-pointer py-0.5 md:relative" on:click={toggleOpen}>
	{#if $lang === "es"}
		<img src={FLAG_ES} alt="FLAG_ES" class="w-[24px] h-[18px]">
	{/if}
	{#if $lang === "en"}
		<img src={FLAG_EN} alt="FLAG_EN" class="w-[24px] h-[18px]">
	{/if}
	{#if open}
		<div class="md:block hidden">
			<ChevronUp color={'var(--color-icon-primary)'} size={20}/>
		</div>
		<div class="md:dropdown">
			{#each languageList as languageItem}
				<div class="py-4 px-2 flex flex-row gap-2" on:click={()=>{changeLanguage(languageItem.key)}}>
					<img src={languageItem.flag} alt={languageItem.key}>
					<span class="label-large-regular text-color-primary">{languageItem.value}</span>
				</div>
			{/each}
		</div>
	{:else}
		<div class="md:block hidden">
			<ChevronDown color={'var(--color-icon-primary)'} size={20}/>
		</div>
	{/if}
	</button>

<style>
</style>
