<script>
	import SectionAchievements from "./SectionAchievements.svelte";
	import SectionContact from "./SectionContact.svelte";
	import SectionHero from "./SectionHero.svelte";
	import SectionServices from "./SectionServices.svelte";
	import SectionTeam from "./SectionTeam.svelte";
	import SectionTech from "./SectionTech.svelte";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<SectionHero/>
<SectionAchievements/>
<SectionServices/>
<SectionTech/>
<SectionTeam/>
<SectionContact/>
