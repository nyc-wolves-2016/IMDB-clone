class App extends React.Component {


  render() {
    return (
      <div class="big-container">
        <header id="top-nav">
          <div id="brand">
            <h1>IMDb - Clone</h1>
          </div>

          <SearchView />

        <div id="container">
            <h3 class="title">Title</h3>
            <p class="plot">Plot</p>
            <span class="poster">Poster</span>
            <span class="year">Year</span>
            <span>TODO: IMDB Rating / Votes</span>
            <span>TODO: Tomatoes Rating / Votes /Image</span>
        </div>
        </header>

        <section class="container">
          <ArticlesView />

          <TopMoviesView />


        </section>

        <section class="footer">

          <footer>
            <p>Awesome website, made originally by Neel Gupta.</p>
          </footer>

        </section>
      </div>
    )
  }
}
