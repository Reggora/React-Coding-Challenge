import React from 'react';
import { connect } from 'react-redux';
import { editCat, deleteCat } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    editCat: cat => dispatch(editCat(cat)),
    deleteCat: cat => dispatch(deleteCat(cat))
  };
}

class ConnectedCatListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: '',
      modalIsOpen: false,
      // seed local edit form state with props
      name: this.props.cat.name,
      breed: this.props.cat.breed,
      description: this.props.cat.description
    };

    this.handleChange = this.handleChange.bind(this);
    this.removeDocument = this.removeDocument.bind(this);
    this.renameDocument = this.renameDocument.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  removeDocument(event) {
    event.preventDefault();

    const id = this.props.cat.id;

    // call redux deleteCat action
    this.props.deleteCat({
      id
    });

    this.handleModalClose();
  }

  renameDocument(event) {
    event.preventDefault();

    const id = this.props.cat.id;
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

    // call redux editCat action
    this.props.editCat({
      id,
      name,
      breed,
      description
    });

    // update local edit form state with new values
    this.setState({
      name,
      breed,
      description,
    });

    this.handleModalClose();
  }

  handleModalClose() {
    this.setState({
      modalIsOpen: false,
      activeModal: '',
      error: ''
    });
  }

  renderModal() {
    // display the appropriate form in the modal using this.state.activeModal
    if (this.state.modalIsOpen && this.state.activeModal === 'edit') {
      return (
        <form className="box" onSubmit={this.renameDocument}>
          {this.state.error ? <p className="help is-danger">{this.state.error}</p> : undefined}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Breed</label>
            <div className="control">
              <input className="input" type="text" name="breed" value={this.state.breed} onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input className="input" type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-link is-fullwidth" type="submit">Edit cat</button>
            </div>
          </div>
        </form>
      );
    } else if (this.state.modalIsOpen && this.state.activeModal === 'delete') {
      return (
        <div className="box">
          {this.state.error ? <p className="help is-danger">{this.state.error}</p> : undefined}
          <div className="field">
            <label className="label">Your cat will be permanently deleted</label>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={this.handleModalClose}>Cancel</button>
            </div>
            <div className="control">
              <button className="button" onClick={this.removeDocument}>Delete cat</button>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="box">
        <article className="media">
          <figure className="media-left">
            <span className="icon is-large has-text-primary">
              <i className="fas fa-2x fa-paw"></i>
            </span>
          </figure>
          <div className="media-content">
            <p className="title is-4 has-text-grey-darker">{this.props.cat.name}</p>
            <p className="subtitle is-6 is-italic has-text-grey-light">{this.props.cat.breed}</p>
            <p className="has-text-grey-darker">{this.props.cat.description}</p>
          </div>
          <figure className="media-right">
            <div className="dropdown is-hoverable is-right">
              <div className="dropdown-trigger">
                <span className="icon" aria-haspopup="true" aria-controls="dropdown-menu4">
                  <i className="fas fa-ellipsis-v"></i>
                </span>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                  <a href="/#" className="dropdown-item" onClick={() => this.setState({modalIsOpen: true, activeModal: 'edit'})}>
                    <span className="icon is-medium">
                      <i className="fas fa-font"></i>
                    </span>
                    Edit
                  </a>
                  <a href="/#" className="dropdown-item" onClick={() => this.setState({modalIsOpen: true, activeModal: 'delete'})}>
                    <span className="icon is-medium">
                      <i className="fas fa-trash"></i>
                    </span>
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </figure>
        </article>
        <div className={this.state.modalIsOpen ? 'modal is-active' : 'modal'}>
          <div className="modal-background" onClick={this.handleModalClose}></div>
          <div className="modal-content">
            {this.renderModal()}
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={this.handleModalClose}></button>
        </div>
      </div>
    );
  }
};

const CatListItem = connect(null, mapDispatchToProps)(ConnectedCatListItem);
export default CatListItem;
