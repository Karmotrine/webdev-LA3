<script lang='ts'>
    import type {SearchModel} from './model'
    export let search: SearchModel
</script>

<button class="container">
    <div class="thumbnail">
        <img src={search.thumbnail} alt="thumbnail">
    </div>
    <div class="content">
        <div class="music">
            <span class="title">{search.title}</span>
            {#if search.date instanceof Date}
                <span class="date">{search.date.getDate()}</span>
            {:else}
                <span class="date">{search.date}</span>
            {/if}
        </div>
        <div class="details">
            <div class="artist">
                <div class="profile">
                    <img src={search.profile} alt="artist">
                </div>
                <span class="name">{search.author}</span>
            </div>
            <!-- <div class="desc">{search.description}</div> -->
        </div>
    </div>
</button>

<style>
.container{
    max-width: 100%;
    padding: 2vh 0;
    display: flex;
    align-items: flex-start;
    border-bottom: var(--border-line);
}
.thumbnail{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    max-width: 480px;
    /* aspect-ratio: 16/9; */
    overflow: hidden;
    margin-right: 2%;
    background-color: #121212;
}
.thumbnail img{
    min-width: 100%;
    height: 100%;
    object-fit: cover;
}
.content{
    font-size: clamp(1rem, 7.5vw, 1.5rem);
    width: 100%;
    display: flex;
    flex-direction: column;
}
.music{
    text-align: left;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 40%;
    padding-bottom: 10%;
    width: inherit;
}
.music .title{
    width: inherit;
    height: max-content;
    display: inline-block;
    text-transform: uppercase;
    font-weight: bold;
}
.music .date{
    text-transform: capitalize;
    font-size: 1rem;
    line-height: .5rem;
}
.details{
    display: inline-block;
}
.artist{
    display: flex;
    align-items: center;
    bottom: 0;
}
.profile{
    display: flex;
    align-items: center;
    border-radius: 100px;
    aspect-ratio: 1/1;
    width: 64px;
    margin-right: .25rem;
    mix-blend-mode: multiply;
}
.profile img{
    object-fit: cover;
}

@media screen and (max-width: 720px) {
    .thumbnail{
        min-width: 50vw;
    }
    .artist .profile{
        max-width: 25%;
    }
    .artist{
        padding: 10% 0;
    }
}
@media screen and (max-width: 400px) {
    .container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .music{
        font-size: 12px;
        background-color: rgb(52, 52, 52);
        color: white;
        position: absolute;
        padding: 2% 10%;
        border-radius: 0 50px 50px 0;
        height: max-content;
        bottom: 1px;
    }
    .artist{
        padding: 0;
    }
    .thumbnail img{
        position: relative;
    }
    .thumbnail{
        min-width: 100%;
        margin-right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .profile{
        position: absolute;
        display: none;
        mix-blend-mode: normal;
        z-index: 25;
        width: 18.5vw;
        aspect-ratio: 1/1;
    }
    .name{
        display: none;
    }
}
</style>