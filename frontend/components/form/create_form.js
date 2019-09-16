import React, { Component, Fragment } from "react";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      breed: "",
      age: "",
      weight: "",
      photo: "",
      image_url: ""
    };

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photo: file, image_url: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("cat[name]", this.state.name);
    formData.append("cat[description]", this.state.description);
    formData.append("cat[breed]", this.state.breed);
    formData.append("cat[age]", this.state.age);
    formData.append("cat[weight]", this.state.weight);
    formData.append("cat[photo]", this.state.photo);

    this.props.makeCat(formData).then(cat => {
      return this.props.history.push(`/cats/${cat.id}`);
    });
  }

  render() {
    const preview = this.state.image_url ? (
      <img className="preview-photo" src={this.state.image_url} />
    ) : null;
    return (
      <Fragment>
        <button
          onClick={() => this.props.history.goBack()}
          className="btn btn-primary font-weight-bold mt-2 ml-3"
        >
          Back to Index
        </button>

        <form
          onSubmit={this.handleSubmit}
          className="cat-form mt-1 m-auto h-100"
        >
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="name">
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              value={this.state.name}
              maxLength="10"
              onChange={this.handleChange("name")}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="breed">
              Breed:
            </label>
            <input
              className="form-control"
              type="text"
              value={this.state.breed}
              maxLength="15"
              onChange={this.handleChange("breed")}
              placeholder="Enter breed"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="description">
              Description:
            </label>
            <textarea
              className="form-control"
              cols="50"
              rows="5"
              maxLength="500"
              value={this.state.description}
              onChange={this.handleChange("description")}
              placeholder="Write a description of your cat!"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="age">
              Age:
            </label>
            <input
              className="form-control"
              type="number"
              value={this.state.age}
              min="1"
              max="100"
              onChange={this.handleChange("age")}
              placeholder="Enter age (in years)"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-weight-bold" htmlFor="weight">
              Weight:
            </label>
            <input
              className="form-control"
              type="number"
              value={this.state.weight}
              min="1"
              max="100"
              onChange={this.handleChange("weight")}
              placeholder="Enter weight (in pounds)"
              required
            />
          </div>
          <div className="form-group preview-photo">{preview}</div>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                onChange={this.handleFile}
                required
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Upload a photo
              </label>
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success rounded-pill btn-block shadow-sm font-weight-bold"
            >
              Create a Cat
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default CreateForm;
