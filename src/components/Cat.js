import React, { Component } from 'react';
import { removeCat, editCat } from '../action';
import { connect } from 'react-redux';
import { TextField, Button, Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


class Cat extends Component {
  constructor(props) {
    super(props);
    this.state = { // set the state of the cat
      name: this.props.cat.name,
      breed: this.props.cat.breed,
      desc: this.props.cat.desc,
      noChange: true,
      editing: false,
      open: false
    }
    // binds the functions
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen(e) { // open and close the card, if we close it while editing, it resets
    this.setState({
      open: !this.state.open,
      editing: false,
    })
  }

  onEdit() { // switch to edit mode
    this.setState({
      editing: true
    });
  }

  onChange(e) { // handle on change for edits
    e.preventDefault();
    this.setState({noChange: false});
    const { name, value } = e.target;
    this.setState({[name]:value});
  }

  onSubmit(e) { // handle editing submition
    e.preventDefault();
    this.setState({editing: false});
    let c = { // set c as the fields filled out
      name: this.state.name,
      breed: this.state.breed,
      desc: this.state.desc
    }
    Object.keys(c).forEach((k) => { // for each field, if it is empty set it as the unedied value
      if (c[k].length === 0) {
        c[k] = this.props.cat[k]
      }
    })
    if(!this.state.noChange) { // sends the action if edited
      this.props.editCat(this.props.catId, c);
    }
  }

  onRemove(id) { // sends the action if removed is clicked
    this.props.removeCat(id);
  }

  render() {
    const cat = this.props.cat;
    const catId = this.props.catId;
    const open = this.state.editing ? // editing mode : card mode
      <div className="card-content-edit">
        <form onSubmit={this.onSubmit}> 
          <TextField 
            id="name"
            label="Cat Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange} 
          />
          <TextField 
            id="breed"
            label="Cat Breed"
            name="breed"
            value={this.state.breed}
            onChange={this.onChange} 
          />
          <br />
          <TextField 
            id="desc-edit"
            label="Description"
            name="desc"
            value={this.state.desc}
            onChange={this.onChange}
            style={{width: 200}}
          />
          <div className="edit-buttons">
            <Fab variant="round" size="small" id="remove-button" onClick={(e) => this.onRemove(catId)}><DeleteIcon /></Fab> 
            <Button variant="contained" style={{color: '#FFFFFF', background: '#70C1B3'}} type="submit" id="done-button">Done</Button>
          </div>
        </form> 
      </div> :
      <div className="card-content">
        <div className="card-buttons">
          <Fab variant="round" style={{color: '#FFFFFF', background: '#70C1B3'}} size="small" id="edit-button" onClick={(e) => this.onEdit()}><EditIcon /></Fab>
        </div>
        <div className="card-text">
          <span className="cat-name">{cat.name.toUpperCase()}</span> <span className="cat-breed">{cat.breed}</span>
          <br />
          <span className="cat-desc">{cat.desc}</span>
        </div>
      </div>
    const view = this.state.open ? // card mode with a close : list mode
      <div>
        <Button variant="contained" style={{background: '#70C1B3'}} id="close-toggle-button" onClick={this.toggleOpen}> </Button>
        {open} 
      </div>:
      <div>
        <Button variant="contained" style={{color: '#FFFFFF', background: '#70C1B3'}} type="button" id="open-toggle-button" onClick={this.toggleOpen}> {this.state.name.toUpperCase()} </Button>
      </div>
    return (
      <div className="cat-card">
        {view}
      </div>
    )
  }
}

export default connect(null, {removeCat, editCat})(Cat);