<script>
  import "../app.css";
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

