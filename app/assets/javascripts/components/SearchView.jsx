class SearchView extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var searchData = this.refs.searchRequest.value;
    var baseUrl = 'https://www.omdbapi.com/?t=';
    // Grab data
    $.ajax({
      url: baseUrl + searchData,
      method: 'GET'
    })
    .done(function(response) {
      // debugger;
      searchData = '';
      this.props.onSearchRequest(response);
    }.bind(this));
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <label>
              <input ref="searchRequest" type="text" name="movie" placeholder="Movie title" />
          </label>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}
