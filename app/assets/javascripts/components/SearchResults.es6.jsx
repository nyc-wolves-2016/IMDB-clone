class SearchResults extends React.Component {
  constructor() {
    super();
    // Pass data from API into the render function
  }

  render() {
    let { Title, Plot, Poster, Year } = this.props.results;

    return (
      <div id="container">
      <h1>Search Results: </h1>

        <ul>
        <h3 className="title">Title: {Title}</h3>
          <span className="poster"><img src={Poster} /></span>
          <li><p className="plot">Plot: {Plot}</p></li>
          <li><span className="year">Year: {Year}</span></li>
        </ul>
          <hr/>
      </div>
    )
  }
}
