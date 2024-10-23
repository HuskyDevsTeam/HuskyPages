<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
	
</script>

<section class="relative bg-[var(--color-surface-secondary)] mb-0">
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center py-8 md:pt-20 md:pb-18 xl:pb-9">
		<div class=" relative flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<article class="flex flex-col gap-12 md:gap-16 items-center justify-center max-h-full">
				<div class="flex flex-col gap-6 items-center px-5 md:px-8 pb-6 md:pb-20">
					<div class="flex flex-col gap-3 items-center xl:px-28">
						<h3 class="body-overline-medium text-color-brand text-center">{glosary.section_2.section_title}</h3>
						<h1 class="md:display-small-extrabold headline-medium-bold text-color-primary">{glosary.section_2.article_title}</h1>
					</div>
					<p class="text-center body-medium-regular text-color-secondary">{glosary.section_2.article_text}</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 px-10 gap-y-8 gap-x-8 w-full">
					<div class="flex flex-col items-center gap-3">
						<h4 class="display-medium-extrabold text-color-brand">{'4+ '+glosary.section_2.card_unit_1 }</h4>
						<span class="label-large-semibold text-color-primary">{glosary.section_2.card_title_1}</span>
					</div>
					<div class="flex flex-col items-center gap-3 md:border-r md:border-l md:border-color-primary">
						<h4 class="display-medium-extrabold text-color-brand">{'20+'}</h4>
						<span class="label-large-semibold text-color-primary">{glosary.section_2.card_title_2}</span>
					</div>
					<div class="flex flex-col items-center gap-3">
						<h4 class="display-medium-extrabold text-color-brand">{'10+'}</h4>
						<span class="label-large-semibold text-color-primary">{glosary.section_2.card_title_3}</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

