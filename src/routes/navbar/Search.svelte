<script lang="ts">
    import { searchTerm} from '../stores';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    let val = "";
    
    let timer : ReturnType<typeof setTimeout>;
    const debounce = (value: HTMLInputElement) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			$searchTerm = value.value;
        }, 250);
	}

    const enterPress = (event:KeyboardEvent) => {
        if(event.key === "Enter"){
            $searchTerm = (event.currentTarget as HTMLInputElement).value
            goto('/search')
        }
    }
</script>

<div>
    <label for="search-navbar">Search:</label>
    {#if $page.url.pathname === '/'}
        <input bind:value={val} on:keypress={enterPress} type="text" id="search-navbar" class="pl-3 !rounded-full !bg-[#E5EEDF]" placeholder="Search..." />
    {:else}
	    <input bind:value={val} 
                on:keyup={({currentTarget : target}) => debounce(target)} type="text" id="search-navbar" class="pl-3 !rounded-full !bg-[#E5EEDF]" placeholder="Search..." />
    {/if}
</div>
