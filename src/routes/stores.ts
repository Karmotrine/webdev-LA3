import { writable, derived } from "svelte/store";
import { words, MockData } from "./word-store";
import type { SearchModel } from "./search/model";
import type { Writable } from "svelte/store";

export const searchTerm = writable("")
export const searchData: Writable<SearchModel[]> = writable(MockData) 
export const searched = derived(
	[searchTerm, searchData],
	([$searchTerm, $searchData]) => {
		if($searchTerm){
            let data = $searchData.filter(data => data.title.startsWith($searchTerm))
            if(data.length) return data
        }
        if(!$searchData.length) return undefined
        return []
    }
) 