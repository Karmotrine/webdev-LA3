<script lang="ts">
    import { searchTerm, searched } from './stores';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let val = "";
    
    let timer : ReturnType<typeof setTimeout>;
    const debounce = (value: HTMLInputElement) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			$searchTerm = value.value;
            console.log($searched)
        }, 250);
	}

    const enterPress = (event:KeyboardEvent) => {
        if(event.key === "Enter"){
            $searchTerm = (event.currentTarget as HTMLInputElement).value
            console.log($searched)
            goto('/search')
        }
    }
</script>

<div>
    {#if $page.url.pathname === '/'}
        <label for="searchBar">Search:</label>
        <input bind:value={val} on:keypress={enterPress} type="text" id="searchBar" />
    {:else}
	    <label for="searchBar">Search:</label>
	    <input bind:value={val} 
                on:keyup={({currentTarget : target}) => debounce(target)} type="text" id="searchBar" />
    {/if}
</div>
