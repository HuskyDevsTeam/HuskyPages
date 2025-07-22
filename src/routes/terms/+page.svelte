<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
    import Breadcrumbs from './sections/Breadcrumbs.svelte';

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})
	/** @type {import('$lib/utils/types').RouteLink[]} */
    let routes = [
        { name: glosary.terms.title, url: '/terms' }
    ];
	
</script>

<section id="terms" class="relative mb-0 xl:mb-20">
	<div class="max-w-[850px] w-screen h-full relative flex flex-col md:gap-12 gap-10 justify-start items-start pt-[100px] px-5 md:px-8">
		<Breadcrumbs routes={routes} />
		<div class="flex flex-col md:gap-8 gap-6 items-start justify-start w-full pb-8">
			<h1 class="headline-small-semibold">{glosary.terms.title}</h1>
			<div class="p-4 md:p-8 bg-[var(--color-surface-primary)] rounded-lg w-full pb-8 flex flex-col gap-6">
				<h2 class="headline-small-medium">1 - {glosary.terms.section_title_1}</h2>
				<p>{glosary.terms.paragraph_1}</p>
				<p>{glosary.terms.paragraph_2}</p>
				<h3 class="body-medium-semibold">
					{glosary.terms.section_title_2}
				</h3>
				<p>{glosary.terms.paragraph_3}</p>
				<p>{glosary.terms.paragraph_4}</p>
				<p>{glosary.terms.paragraph_5}</p>
				<p>{glosary.terms.paragraph_6}</p>
				<h3 class="body-medium-semibold">
					{glosary.terms.section_title_3}
				</h3>
				<p>{glosary.terms.paragraph_7}<a href="mailto:{glosary.terms.paragraph_7_mailto}">{glosary.terms.paragraph_7_mailto}</a></p>
			</div>
		</div>
	</div>
</section>

