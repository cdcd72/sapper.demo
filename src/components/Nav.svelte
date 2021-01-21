<script lang="ts">
  export let segment: string;
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <i class="fas fa-bars" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a
          class="nav-link"
          aria-current={segment === undefined ? "page" : undefined}
          href=".">home</a
        >
        <a
          class="nav-link"
          aria-current={segment === "about" ? "page" : undefined}
          href="about">about</a
        >
        <a
          rel="prefetch"
          class="nav-link"
          aria-current={segment === "blog" ? "page" : undefined}
          href="blog">blog</a
        >
      </div>
    </div>
  </div>
</nav>
