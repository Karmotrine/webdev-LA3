<!-- <script>
  import Search from './Search.svelte'
  import "../app.postcss";
</script>

<div>
  <Search />
  <main>
    <slot />
  </main>
</div> -->
<script>
  import "../app.postcss";
  // import Header from "./Header.svelte";
  import Navbar from "./navbar/Navbar.svelte";
  import Footer from "./footer/Footer.svelte"
  import "./styles.css";
</script>

<div class="app">
  <Navbar />

  <main>
    Main content here
    <slot/>
  </main>

  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    /* max-width: 64rem; */
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
