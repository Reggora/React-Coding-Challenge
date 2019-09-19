import React, { Component } from "react";
import SearchBar from "../layout/SearchBar";

class CatIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cats: [],
      filteredCats: [],
      searchParams: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.filterCats = this.filterCats.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.sortCats = this.sortCats.bind(this);
  }
  componentDidMount() {
    this.props.requestAllCats();
    this.setState({
      filteredCats: []
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cats !== this.props.cats) {
      let cats = Object.values(this.props.cats).sort(this.sortCats);
      this.setState({ cats });
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/new");
  }

  showPage(id) {
    this.props.history.push(`/cats/${id}`);
  }

  filterCats(catFilter) {
    this.setState({ searchParams: catFilter });
    let filteredCats = Object.values(this.props.cats);

    filteredCats = filteredCats.filter(cat => {
      let catName = cat.name.toLowerCase();
      return catName.indexOf(catFilter.toLowerCase()) !== -1;
    });
    this.setState({
      filteredCats
    });
  }

  sortCats(a, b) {
    const catA = a.name.toUpperCase();
    const catB = b.name.toUpperCase();

    let comparison = 0;
    if (catA > catB) {
      comparison = 1;
    } else if (catA < catB) {
      comparison = -1;
    }
    return comparison;
  }

  clearFilter() {
    this.setState({ filteredCats: [], searchParams: "" });
  }

  render() {
    let cats =
      !this.state.filteredCats.length && !this.state.searchParams.length
        ? this.state.cats
        : this.state.filteredCats;

    return (
      <div>
        <div className="search-bar-container">
          <SearchBar
            searchParams={this.state.searchParams}
            filterCats={this.filterCats}
            clearFilter={this.clearFilter}
            handleClick={this.handleClick}
            handleSubmit={this.handleSubmit}
          />
        </div>

        {this.state.searchParams.length &&
        this.state.filteredCats.length === 0 ? (
          <h2 className="search-empty">no cats match</h2>
        ) : (
          <div className="mb-4 index-section">
            <div className="container">
              <div className="row hidden-md-up flex-center">
                {cats.map(cat => (
                  <div
                    key={cat.id}
                    className="cat-photo-container"
                    onClick={() => this.showPage(cat.id)}
                  >
                    <img
                      className="index-cat-photo rounded-circle"
                      src={cat.photo}
                    />
                    <h4 className="text-center font-weight-bold">{cat.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CatIndex;
