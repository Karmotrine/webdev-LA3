<script lang='ts'>
    import type {SearchModel} from './model'
    export let search: SearchModel
</script>

<div class="container">
    <div class="thumbnail">
        <img src={search.thumbnail} alt="thumbnail">
    </div>
    <div class="content">
        <div class="music">
            <span class="title">{search.title}</span>
            <span class="date">{search.date}</span>
        </div>
        <div class="details">
            <div class="artist">
                <div class="profile">
                    <img src={search.artistThumb} alt="artist">
                </div>
                <span class="name">{search.author}</span>
            </div>
            <div class="desc">{search.description}</div>
        </div>
    </div>
</div>

<style>
.container{
    max-width: 100%;
    height: max-content;
    padding: 2vh 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: var(--border-line);
}
.content{
    font-size: 12px;
}
.thumbnail{
    width: 40%;
    max-width: 30vw;
    max-height: 25vh;
    aspect-ratio: 16/9;
    overflow: hidden;
    margin-right: 2%;
}
.thumbnail img{
    min-width: 100%;
    height: 100%;
    object-fit: contain;
}
.content{
    display: flex;
    flex-direction: column;
    width: 60%;
    word-wrap: break-word;
}
.music{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    min-width: max-content;
    height: 40%;
    padding-bottom: 5%;
}
.music .title{
    text-transform: uppercase;
    font-weight: bold;
}
.music .date{
    text-transform: capitalize;
    font-size: .5rem;
    line-height: .5rem;
}
.artist{
    display: flex;
    align-items: center;
    margin-bottom: 2.5%;
}
.profile{
    display: flex;
    align-items: center;
    border-radius: 100px;
    aspect-ratio: 1/1;
    width: 32px;
    margin-right: .25rem;
}
.profile img{
    object-fit: cover;
}

@media screen and (max-width: 320px) {
    .thumbnail{
        min-width: 50vw;
    }
    .desc{
        display: none;
    }
    .artist .profile{
        max-width: 25%;
    }
    .artist{
        padding: 10% 0;
    }
}
@media screen and (max-width: 250px) {
    .container{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .music{
        background-color: rgb(225, 225, 225);
        position: absolute;
        padding: 2% 10%;
        border-radius: 20px;
        height: max-content;
        bottom: 2.5%;
        left: 2%;
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
    .content .details{
        display: none;
    }
}
</style>