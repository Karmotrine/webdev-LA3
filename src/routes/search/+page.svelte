<script lang="ts">
    import { searchTerm, searched} from '../stores';
    import Search from './Result.svelte';
</script>

<svelte:head>
	<title>Search</title>
    <link rel="stylesheet" href="src\routes\search\style.css">
</svelte:head>

<div id="result">
    <span id="tag">Results</span>
    {#if $searched !== undefined}
        {#if $searched.length === 0 && $searchTerm}
            <p id="none">No Results</p>
        {:else}
            {#each $searched as searchItem}
                <Search search={searchItem}/>
            {/each}
        {/if}
    {:else}     
        <p id="Loading">Loading</p>
    {/if}
</div>
<style>
#result{
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    padding: 0 2vw;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
}
#tag{
    display: block;
    width: 100%;
    border-bottom: var(--border-line);
    margin-top: 2vh;
    font-size: 2.5em;
    font-weight: bolder;
}
#none{
    justify-content: center;
    text-align: center;
    font-size: 10em;
    transform: all 100ms ease 20ms;
}
@media screen and (max-width: 720px){
    #none{
        font-size: 10vw;
    }
}
</style>
