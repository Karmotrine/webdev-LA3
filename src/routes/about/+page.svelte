<script lang="ts">
	export let pageTitle = "About";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content="About Youtify - Inspired by Spotify and YouTube" />
</svelte:head>

<main>
	<div class="about">
		<div class="text-column">
			<h1>ABOUT YOUTIFY</h1>

			<p>
				Youtify is a unique music streaming platform that seamlessly combines the best features of Spotify and YouTube.
				Our goal is to provide a comprehensive and immersive music experience for our users by leveraging the vast music library of YouTube
				along with the convenience and personalized features of Spotify.
			</p>

			<p>
				With Youtify, you can explore an extensive collection of music spanning various genres, artists, and playlists.
				Discover new songs, create your own playlists, and enjoy a curated selection of hand-picked tracks. Whether you're in the mood for
				chart-topping hits, timeless classics, or underground gems, Youtify has you covered.
			</p>

			<p>
				In addition to the extensive music catalog, Youtify offers powerful recommendation algorithms that tailor your listening experience
				based on your preferences. Discover new artists, receive personalized recommendations, and stay up-to-date with the latest music trends.
			</p>

			<p>
				Youtify also allows you to enjoy music videos alongside the audio tracks, bringing your music to life. Watch official music videos,
				live performances, and exclusive content from your favorite artists, all within the Youtify platform.
			</p>
		</div>

		<div class="team-column">
			<h2>OUR TEAM</h2>

			<div class="team-grid">
				<div class="team-member">
					<img src="Denise.jpg" alt="denise" />
					<p>Denise Cruz</p>
				</div>
				<div class="team-member">
					<img src="Eunice.jpg" alt="eunice" />
					<p>Eunice Villanueva</p>
				</div>
				<div class="team-member">
					<img src="Kenshin.jpg" alt="kensh" />
					<p>Kenshin Nablo</p>
				</div>
				<div class="team-member">
					<img src="Yuan.jpg" alt="yuan" />
					<p>Yuan Ureña</p>
				</div>
			</div>
		</div>
	</div>
</main>


<style>
	main {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  min-height: 100vh;
	  background: #FFF2F2;
	  padding: 2rem;
	}
  
	.about {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  margin: 0;
	  position: relative;
	  width: 100%;
	  max-width: 960px;
	}
  
	.text-column,
	.team-column {
	  flex: 1;
	  max-width: 890px;
	}
  
	h1,
	h2,
	p {
	  text-align: center;
	}
  
	h1 {
	  font-style: normal;
	  font-weight: 800;
	  font-size: 2.5rem;
	  line-height: 3rem;
	  color: #596F35;
	  margin-bottom: 1rem;
	}
  
	h2 {
	  margin-top: 2.5rem;
	  font-style: normal;
	  font-weight: 800;
	  font-size: 2rem;
	  line-height: 2.5rem;
	  color: #596F35;
	  margin-bottom: 1rem;
	}
  
	p {
	  margin-bottom: 1rem;
	  line-height: 1.5;
	}
  
	.team-grid {
	  display: flex;
	  justify-content: center;
	  gap: 1rem;
	}
  
	.team-member {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  text-align: center;
	}
  
	.team-member img {
	  width: 200px;
	  height: 250px;
	  object-fit: cover;
	  object-position: center;
	  border-radius: 5px;
	  margin-bottom: 0.5rem;
	}
  
	/* Responsive styles */
	@media screen and (max-width: 600px) {
	  h1 {
		font-size: 1.8rem;
		line-height: 2.2rem;
	  }
  
	  h2 {
		font-size: 1.6rem;
		line-height: 2rem;
		margin-top: 2rem;
	  }
  
	  p {
		font-size: 0.9rem;
		line-height: 1.5rem;
	  }
  
	  .team-member img {
		width: 150px;
		height: 180px;
	  }
	}
  </style>