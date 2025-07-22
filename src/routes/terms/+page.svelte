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

<section id="terms" class="pt-[100px]">
    <Breadcrumbs routes={routes} />
</section>

