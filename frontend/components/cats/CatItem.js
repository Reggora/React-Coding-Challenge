import React, { Component, Fragment } from "react";

class CatItem extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let catId = this.props.match.params.catId;
    this.props.requestSingleCat(catId);
  }

  deleteCat(catId) {
    this.props.destroyCat(catId).then(() => {
      return this.props.history.push("/");
    });
  }

  render() {
    let cat = this.props.cat;

    return (
      <Fragment>
        <button
          onClick={() => this.props.history.push("/")}
          className="btn btn-primary font-weight-bold mt-2 ml-3"
        >
          Back to Index
        </button>

        <div className="d-flex justify-content-center mt-3">
          <div className="card-container ">
            <div className="card flex-center h-90">
              <div className="card-block mt-3 mb-3 h-100">
                <div className="d-flex justify-content-center h-50">
                  <img
                    className="cat-item-photo rounded-circle"
                    src={cat.photo}
                    alt="Cat Profile Photo"
                  />
                </div>
                <div className="card-body text-center h-50">
                  <h5 className="font-weight-bold">
                    Name: <span className="font-weight-normal">{cat.name}</span>
                  </h5>
                  <h5 className="font-weight-bold">
                    Description:{" "}
                    <span className="font-weight-normal">
                      {cat.description}
                    </span>
                  </h5>
                  <h5 className="font-weight-bold">
                    Breed:{" "}
                    <span className="font-weight-normal">{cat.breed}</span>
                  </h5>
                  <h5 className="font-weight-bold">
                    Age: <span className="font-weight-normal">{cat.age}</span>
                  </h5>
                  <h5 className="font-weight-bold">
                    Weight:{" "}
                    <span className="font-weight-normal">{cat.weight}</span>
                  </h5>
                  <div className="mt-4">
                    <button
                      onClick={() =>
                        this.props.history.push(`/cats/${cat.id}/edit`)
                      }
                      className="btn btn-warning mr-2 font-weight-bold"
                    >
                      Edit cat
                    </button>
                    <button
                      onClick={() => this.deleteCat(cat.id)}
                      className="btn btn-danger ml-2 font-weight-bold"
                    >
                      Delete cat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CatItem;
