import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { addCat } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    addCat: cat => dispatch(addCat(cat))
  };
}

class ConnectedNewCatForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      breed: '',
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const id = shortid.generate();
    const name = this.state.name;
    const breed = this.state.breed;
    const description = this.state.description;

    // catch empty field values and provide user feedback
    if (name.length < 1) {
      this.setState({
        error: 'Please enter a name'
      });
      return;
    } else if (breed.length < 1) {
      this.setState({
        error: 'Please enter a breed'
      });
      return;
    } else if (description.length < 1) {
      this.setState({
        error: 'Please enter a description'
      });
      return;
    }

    // call redux addCat action
    this.props.addCat({
      id,
      name,
      breed,
      description
    });

    // reset form state
    this.setState({ name: '', breed: '', description: '', error: ''});
  }

  render() {
    return (
      <div className="column is-half">
        <form className="box" onSubmit={this.handleSubmit}>
          {this.state.error ? <p className="help is-danger">{this.state.error}</p> : undefined}

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Garfield" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Breed</label>
            <div className="control">
              <input className="input" type="text" placeholder="Exotic shorthair" name="breed" value={this.state.breed} onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input className="input" type="text" placeholder="Lazy, fat, and cynical orange cat" name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth" type="submit">Add cat</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

const NewCatForm = connect(null, mapDispatchToProps)(ConnectedNewCatForm);
export default NewCatForm;
