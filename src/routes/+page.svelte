<script lang="ts">
  export const csr = true;
  import { MusicData } from "../data-server";
  import { LMusicData } from "../latest";
  import MusicCard from "./MusicCard.svelte"

  let currentIndexPopular = 0;
  let currentIndexLatest = 0;

  const shuffledMusicData = shuffle([...MusicData]);
  const shuffledLMusicData = shuffle([...LMusicData]);
  let limitedMusicData = shuffledMusicData.slice(0, 7);
  let limitedLMusicData = shuffledLMusicData.slice(0, 7);

  function showNextPopularSong() {
    currentIndexPopular = (currentIndexPopular + 1) % shuffledMusicData.length;
    const nextSong = shuffledMusicData[currentIndexPopular];
    if (!limitedMusicData.includes(nextSong)) {
      limitedMusicData = [
        ...limitedMusicData.slice(1),
        nextSong
      ];
    } else {
      showNextPopularSong();
    }
  }

  function showPreviousPopularSong() {
    currentIndexPopular = (currentIndexPopular - 1 + shuffledMusicData.length) % shuffledMusicData.length;
    const previousSong = shuffledMusicData[currentIndexPopular];
    if (!limitedMusicData.includes(previousSong)) {
      limitedMusicData = [
        previousSong,
        ...limitedMusicData.slice(0, limitedMusicData.length - 1)
      ];
    } else {
      showPreviousPopularSong();
    }
  }

  function showNextLatestSong() {
    currentIndexLatest = (currentIndexLatest + 1) % shuffledLMusicData.length;
    const nextSong = shuffledLMusicData[currentIndexLatest];
    if (!limitedLMusicData.includes(nextSong)) {
      limitedLMusicData = [
        ...limitedLMusicData.slice(1),
        nextSong
      ];
    } else {
      showNextLatestSong();
    }
  }

  function showPreviousLatestSong() {
    currentIndexLatest = (currentIndexLatest - 1 + shuffledLMusicData.length) % shuffledLMusicData.length;
    const previousSong = shuffledLMusicData[currentIndexLatest];
    if (!limitedLMusicData.includes(previousSong)) {
      limitedLMusicData = [
        previousSong,
        ...limitedLMusicData.slice(0, limitedLMusicData.length - 1)
      ];
    } else {
      showPreviousLatestSong();
    }
  }


  function shuffle(array: any[]): any[] {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="bg">
  <section>
    <h2>Popular Songs</h2>
    <div class="grid-container">

      {#each limitedMusicData as music}
        <div class="grid-item">
          <MusicCard music={music}/>
        </div>
      {/each}
    </div>
    {#if limitedMusicData.length < shuffledMusicData.length}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="arrow next" on:click={showNextPopularSong}>
        &rarr;
      </div>
    {/if}
    {#if currentIndexPopular > 0}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="arrow previous" on:click={showPreviousPopularSong}>
        &larr;
      </div>
    {/if}
  </section>

  <section>
    <h2>Latest Songs</h2>
    <div class="grid-container">

      {#each limitedLMusicData as music}
        <div class="grid-item">
          <MusicCard music={music}/>
        </div>
      {/each}
    </div>
    {#if limitedLMusicData.length < shuffledLMusicData.length}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="arrow next" on:click={showNextLatestSong}>
        &rarr;
      </div>
    {/if}
    {#if currentIndexLatest > 0}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="arrow previous" on:click={showPreviousLatestSong}>
        &larr;
      </div>
    {/if}
  </section>
</div>

<style>
  .bg {
    background-color: #FFF2F2;
    padding: 20px;
    overflow: hidden;
  }

  section {
    margin-top: 35px;
    margin-bottom: 40px;
    position: relative;
  }

  h2 {
    font-size: 35px;
    margin-bottom: 10px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    gap: 20px;
    transition: background-color 0.3s ease-in-out;
  }

  .grid-item:hover {
    background-color: #363131;
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: left;
    background-color: #0B0101;
    height: 300px;
    cursor: pointer;
    border-radius: 10px;
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #596F35;
    color: #FFF;
    font-size: 20px;
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out;
  }

  .arrow:hover {
    background-color: #868f78;
    color:black;
  }

  .next {
    right: -15px;
  }

  .previous {
    left: -15px;
  }
</style>

