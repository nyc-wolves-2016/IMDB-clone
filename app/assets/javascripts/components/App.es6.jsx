class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
    this.handleSearchRequest = this.handleSearchRequest.bind(this);
  }

  handleSearchRequest(result) {
    // grab the input from the form, which will be state
    // take that input, and make your ajax call
    // then set the state of your movies to the reponse
    this.setState({
        results: result
      })
  }


  render() {
    return (
      <div className="big-container">
        <header id="top-nav">
          <div id="brand">
            <h1>IMDb - Clone</h1>
          </div>

          <SearchView onSearchRequest={this.handleSearchRequest} />

          {/*
            Search results will update depending on the state.
            pages loads with no movies, so this will be empty
            ajax response will update with react magic
          */}

          {/* <SearchResults results={this.state.movies} /> */}
        </header>

        <SearchResults results={this.state.results}/>

        <section className="container">
          <ArticlesView />

          {/* <TopMoviesView /> */}


        </section>

        <section className="footer">

          <footer>
            <p>Awesome website, made originally by Neel Gupta.</p>
          </footer>

        </section>
      </div>
    )
  }
}
