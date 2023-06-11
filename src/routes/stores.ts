import { writable, derived } from "svelte/store";
import { MockData } from "./word-store";
import { MusicData } from "./data-server";
import type { SearchModel, SearchPayLoad } from "./search/model";
import type { Writable } from "svelte/store";

export const searchTerm = writable("")
export const searchData: Writable<SearchModel[]> = writable(MusicData) 
export const searched = derived(
	[searchTerm, searchData],
	([$searchTerm, $searchData]) => {
		if($searchTerm){
            let data = $searchData.filter(data => 
                data.title.toLowerCase().includes($searchTerm.toLowerCase()) || 
                data.author.toLowerCase().includes($searchTerm.toLowerCase()))
            if(data.length) return data
        }
        if(!$searchData.length) return undefined
        return []
    }
) 
export const urlLoad: Writable<SearchPayLoad> = writable()