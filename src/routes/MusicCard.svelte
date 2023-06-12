<script lang="ts">
  import type { MusicModel } from "../types";

  export let music: MusicModel;
</script>


<div>
  <img src={music.thumbnail} alt={music.title} class="thumbnail" />
  <div class="title">{music.title}</div>
  <div class="author">{music.author}</div>
</div>
<style>
.thumbnail {
  width: 200px; 
  height: 180px; 
  object-fit: cover; 
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