import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchParams: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchParams: e.target.value
    });
    this.props.filterCats(event.target.value);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="d-flex justify-content-center mt-2 w-100"
      >
        <div className="row w-100">
          <div className="form-group col-md-3">
            <button
              className="btn btn-success rounded-pill btn-block shadow-sm font-weight-bold"
              onClick={this.props.handleClick}
            >
              Add a cat
            </button>
          </div>

          <div className="form-group col-md-6">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.props.searchParams}
              placeholder="Search by cats name"
              className="form-control form-control-underlined"
            />
          </div>
          <div className="form-group col-md-3">
            <button
              type="submit"
              className="btn btn-primary rounded-pill btn-block shadow-sm font-weight-bold"
              onClick={this.props.clearFilter}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
