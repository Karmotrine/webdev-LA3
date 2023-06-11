<script lang="ts">
	import type { SearchModel } from "./model";
    import { urlLoad } from "../stores";
    import { goto } from "$app/navigation";
	export let search: SearchModel;

    const payLoad = () => {
        urlLoad.set(
			{
				url: search.url,
				title: search.title
			}
		)
        goto('/')
    }
</script>

<button class="container" on:click={payLoad}>
	<div class="thumbnail">
		<img src={search.thumbnail} alt="thumbnail" />
	</div>
	<div class="content">
		<div class="music">
			<span class="title">{search.title}</span>
			<div class="name-date">
				<span class="name">{search.author}</span>
				{#if search.date instanceof Date}
					<span class="date">{search.date.getDate()}</span>
				{:else}
					<span class="date">{search.date}</span>
				{/if}
			</div>
		</div>
		<div class="details">
			<div class="artist">
				<div class="profile">
					<img src={search.profile} alt="artist" />
				</div>
				<span class="name">{search.author}</span>
			</div>
		</div>
	</div>
</button>

<style>
	.container {
		max-width: 100%;
		padding: 2vh 0;
		display: flex;
		align-items: flex-start;
		border-bottom: var(--border-line);
	}
	.thumbnail {
		align-self: center;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 32.5%;
		min-width: 32.5%;
		width: 32.5%;
		
		/* max-width: 540px; */
		aspect-ratio: 16/9;
		overflow: hidden;
		margin-right: 2%;
		background-color: #121212;
	}
	.thumbnail img {
		min-width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.content {
		font-size: clamp(1rem, 3.5vw, 1.5rem);
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.music {
		text-align: left;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		height: 40%;
		padding-bottom: 15%;
		width: inherit;
	}
	.music .name{
		display: none;
	}
	.music .title {
		width: 80%;
		height: max-content;
		display: inline-block;
		text-transform: uppercase;
		font-weight: bold;
	}
	.music .name-date {
		text-transform: capitalize;
		font-size: 1rem;
		line-height: 0.5rem;
	}
    .music .name{
        font-weight: bold;
    }
	.details {
		display: inline-block;
	}
	.artist {
		display: flex;
		align-items: center;
		bottom: 0;
	}
	.profile {
        width: clamp(48px, 5vw, 96px);
		display: flex;
		align-items: center;
		border-radius: 100px;
		aspect-ratio: 1/1;
		margin-right: 0.25rem;
		mix-blend-mode: multiply;
	}
	.profile img {
		object-fit: cover;
	}

	@media screen and (max-width: 600px) {
		.thumbnail {
			min-width: 100%;
			margin-right: 0;
		}
		.artist {
			padding: 10% 0;
		}
		.container {
            overflow-wrap: break-word;
			font-size: clamp(.75em, 1vw, 1.25em);
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
		}
		.content {
			flex-direction: row-reverse;
			align-items: center;
		}
		.music {
        	padding-bottom: 0;
		}
		.music .name{
			display: inline-block;
		}
        .music .title{
            width: 100%;
        }
        .details{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .details .profile{
            max-width: clamp(16px, 10vw, 128px);
        }
        .details .profile img{
            max-width: 100%;
        }
        .details .name{
            display: none;
        }
	}
</style>
