export type SearchModel = {
    author: string;
    date: string | Date;
    thumbnail: string;
    profile: string;
    title: string;
    url: string;
}

export type SearchPayLoad = {
    url: string,
    title: string
}