<script>
    import IconHome from "../../../components/icons/IconHome.svelte";
	/** @type {import('$lib/utils/types').RouteLink[]} */
    export let routes = []
</script>

<div class="flex flex-row gap-1 items-center justify-start">
    <a href="/">
        <IconHome color="var(--color-icon-brand)" />
    </a>
    {#each routes as route}
        <span class="text-color-secondary w-6 h-6 flex items-center justify-center">/</span>
        <a href={route.url} class="text-color-secondary label-medium-regular">
            {route.name}
        </a>
    {/each}
</div>