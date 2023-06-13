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
  import Navbar from "./Navbar.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="app">
  <Navbar />

  <main>
    <slot />
  </main>

  <Footer />
</div>
