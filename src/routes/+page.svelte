<script>
	import SectionAchievements from "./sections/SectionAchievements.svelte";
	import SectionContact from "./sections/SectionContact.svelte";
	import SectionHero from "./sections/SectionHero.svelte";
	import SectionServices from "./sections/SectionServices.svelte";
	import SectionTeam from "./sections/SectionTeam.svelte";
	import SectionTech from "./sections/SectionTech.svelte";
	import SectionWork from "./sections/SectionWork.svelte";

</script>

<svelte:head>
	<title>Husky Devs</title>
	<meta name="description" content="Husky developers website" />
</svelte:head>

<SectionHero/>
<SectionWork/>
<SectionAchievements/>
<SectionServices/>
<SectionTech/>
<SectionTeam/>
<SectionContact/>
