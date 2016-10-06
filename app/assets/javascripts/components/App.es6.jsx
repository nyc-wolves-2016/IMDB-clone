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

          <NavBar />

          <SearchView onSearchRequest={this.handleSearchRequest} />

          <SearchResults results={this.state.results}/>


        <section className="footer">
          <Footer />
        </section>

      </div>
    )
  }
}
