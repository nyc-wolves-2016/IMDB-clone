class SearchView extends React.Component {
  render() {
    return (
      <div class="search-bar">
        <form>
          <label>
              <input type="text" name="movie" placeholder="Movie title" />
          </label>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}
