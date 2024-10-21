<script>
	import { dict } from '$lib/utils/dict';
	import { getContext } from 'svelte';
	import { LogoInstagram, LogoLinkedin, LogoGithub } from 'svelte-ionicons'
	import teamChemi from '$lib/images/team_chemi.jpg'
	import teamLuis from '$lib/images/team_luis.jpg'
	import teamManuel from '$lib/images/team_manuel.jpg'
	import teamJavier from '$lib/images/team_javier.jpg'

	let glosary = dict["en"]

	/** @type {import('$lib/utils/types').DataContext} */
	const { lang, theme } = getContext('ui_context');
	lang.subscribe(el=>{
		glosary = dict[el]
	})

	$: list = [
		{
			title:glosary.section_5.team_title_1,
			description:glosary.section_5.team_description_1,
			image:teamChemi,
			name:"Chemi Martínez",
			instagram:"",
			linkedin:"",
			github:"",
		},
		{
			title:glosary.section_5.team_title_2,
			description:glosary.section_5.team_description_2,
			image:teamLuis,
			name:"Luis Vásquez",
			instagram:"",
			linkedin:"",
			github:"",
		},
		{
			title:glosary.section_5.team_title_3,
			description:glosary.section_5.team_description_3,
			image:teamManuel,
			name:"Manuel Farias",
			instagram:"",
			linkedin:"",
			github:"",
		},
		{
			title:glosary.section_5.team_title_4,
			description:glosary.section_5.team_description_4,
			image:teamJavier,
			name:"Javier Nuñez",
			instagram:"",
			linkedin:"",
			github:"",
		},
	]
	
</script>

<section class="relative">
	<div class="max-w-[1512px] w-screen h-full relative flex justify-center items-center overflow-hidden py-16 md:py-20 xl:px-20">
		<div class="flex flex-col xl:flex-row xl:items-center xl:gap-[110px] h-full w-full max-w-[1288px] z-10">
			<article class="flex flex-col gap-14 items-center max-h-full">
				<div class="flex flex-col gap-6 items-center px-5 md:px-8">
					<h1 class="md:display-small-extrabold headline-medium-bold text-color-primary">{glosary.section_5.article_title}</h1>
					<p class="text-center body-medium-regular text-color-secondary">{glosary.section_5.article_text}</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-8 gap-y-12 gap-x-8">
					{#each list as member}
						<div class="flex flex-col gap-4 justify-center items-center text-center">
							<div class="w-[112px] h-[112px] rounded-full overflow-hidden flex justify-center items-center">
								<img src={member.image} alt={member.name} class="w-[114px] h-[114px] rounded-full object-center object-cover">

							</div>
							<div class="flex flex-col justify-center items-stretch gap-3 grow">
								<div>
									<h5 class="label-medium-medium text-color-primary">{member.name}</h5>
									<span class="body-small-regular text-color-secondary">{member.title}</span>
								</div>
								<p class="border-color-primary border-t border-b py-3 body-xsmall-regular text-color-secondary h-full">
									{member.description}
								</p>
							</div>
							<div class="flex flex-row gap-4 items-center justify-center">
								<a href={member.instagram}>
									<LogoInstagram color={'var(--color-icon-neutral)'} size={24}/>
								</a>
								<a href={member.linkedin}>
									<LogoLinkedin color={'var(--color-icon-neutral)'} size={24}/>
								</a>
								<a href={member.github}>
									<LogoGithub color={'var(--color-icon-neutral)'} size={24}/>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</article>
		</div>
	</div>
</section>

