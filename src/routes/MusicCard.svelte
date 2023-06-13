<script lang="ts">
  import type { MusicModel } from "../types";
  import { Modal, } from 'flowbite-svelte'
  import Youtube from "svelte-youtube-embed";

  export let music: MusicModel;
  let defaultModal = false;
</script>


<button on:click={() => defaultModal = true}>
  <img src={music.thumbnail} alt={music.title} class="thumbnail" />
  <div class="title">{music.title}</div>
  <div class="author">{music.author}</div>
</button>

<Modal bind:open={defaultModal} autoclose outsideclose={true}>
  <br/>
  <Youtube id={`${music.url}`} />
</Modal>

<style>
.thumbnail {
  width: 200px; 
  height: 180px; 
  object-fit: cover; 
  border-radius: 5px;
}
.title{
  font-size: 23px;
  color: white;
}
.author{
  font-size: 13px;
  color: rgb(180, 180, 180);
}
</style>