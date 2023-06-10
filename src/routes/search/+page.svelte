<script lang="ts">
    import {words} from './store';
    import Search from './Search.svelte';
</script>

<svelte:head>
	<title>Search</title>
    <link rel="stylesheet" href="src\routes\search\style.css">
</svelte:head>

<div id="result">
    <span id="tag">Results</span>
    {#each words as word}
        <Search search={
            {
                author: "author",
                date: "June 20, 2023",
                thumbnail:`src/lib/images/svelte-welcome.png`,
                artistThumb: "src/lib/images/svelte-welcome.png",
                title: word,
                description: "ASdasdadsASdasdadsASdas"
            }
        }/>
    {/each}
    <!-- {#each {length: 4} as _, i}
        <Search search={
            {
                author: "Composer",
                date: "June 20, 2023",
                thumbnail:`src/lib/images/svelte-welcome.png`,
                artistThumb: "src/lib/images/svelte-welcome.png",
                title: "asdads",
                description: "ASdasdadsASdasdadsASdas"
            }
        }/>
    {/each} -->
</div>
<style>
#result{
    width: 100%;
}
#tag{
    display: block;
    width: 100%;
    border-bottom: var(--border-line);
    margin-top: 2vh;
}
</style>
