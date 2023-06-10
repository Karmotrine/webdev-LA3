<script lang="ts">
    import type { SearchModel } from './model';

    import { searchTerm, searched } from '../stores';
    import Search from './Result.svelte';
    //if from backend use async-set
</script>

<svelte:head>
	<title>Search</title>
    <link rel="stylesheet" href="src\routes\search\style.css">
</svelte:head>

<div id="result">
    <span><a href="/">Return {$searchTerm}</a></span>
    <span id="tag">Results</span>
    {#if $searched !== undefined}
        {#if $searched.length === 0 && $searchTerm}
            <p>No Results</p>
        {:else}
            {#each $searched as searchItem}
                <Search search={searchItem}/>
            {/each}
        {/if}
    {:else}     
        <p>Loading</p>
    {/if}
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
