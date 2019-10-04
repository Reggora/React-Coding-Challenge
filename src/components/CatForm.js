import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCat } from '../action';
import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class CatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      breed: '',
      desc: '',
      add: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  toggleAdd(e) {
    this.setState({add: !this.state.add});
  }

  onChange(e) {
    e.preventDefault();
    const {name,value} = e.target;
    this.setState({[name]:value});
  }

  onSubmit(e) {
    e.preventDefault();
    const cat = {
      name: this.state.name,
      breed: this.state.breed,
      desc: this.state.desc
    }
    this.props.addCat(cat);
    this.setState({
      name: '',
      breed: '',
      desc: '',
      add: false,
    });
  }

  render() {
    const view = this.state.add ? // form for adding cat 
      <div className="card-content-add">
        <Button variant="contained" style={{background: '#FF1654'}} id="add-toggle-close-button" onClick={this.toggleAdd}> </Button>
        <form onSubmit={this.onSubmit} className="add-form"> 
          <TextField 
            id="name"
            label="Cat Name"
            name="name"
            required={true}
            value={this.state.name}
            onChange={this.onChange} 
          />
          <TextField 
            id="breed"
            label="Cat Breed"
            name="breed"
            required={true}
            value={this.state.breed}
            onChange={this.onChange} 
          />
          <br />
          <TextField 
            id="desc"
            label="Description"
            name="desc"
            required={true}
            value={this.state.desc}
            onChange={this.onChange} 
            style={{width: 210}}
          />
          <Button variant="contained" style={{color: '#FFFFFF', background: '#FF1654'}} type="submit" id="add-button">Add</Button>
        </form>
      </div> :
      <Button variant="contained" style={{color: '#FFFFFF', background: '#FF1654'}} type="button" id="add-toggle-button" onClick={this.toggleAdd}><AddIcon /></Button>
    return(
      <div className="cat-card-add">
        {view}
      </div>
    );
  }
}

export default connect(null,{ addCat })(CatForm);