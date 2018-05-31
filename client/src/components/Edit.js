import React, { Component } from "react";

import { Link } from "react-router-dom";
import axios from 'axios'; 

export default class Edit extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      noteTitle: '',
      noteBody: '',
      notes: []
    };
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const afterEditObj = {
      noteTitle: this.state.noteTitle,
      noteBody: this.state.noteBody
    };
    console.log("From handleSubmit Edit.js..., afterSubmit", {
      noteTitle: this.state.noteTitle,
      noteBody: this.state.noteBody
    });
    // console.log(this.props)
    // axios.put(`https://boiling-wildwood-28100.herokuapp.com/edit/${this.props.match.params.id}`, afterEditObj)  
    // .then(resp => console.log('here',resp)).catch(err => console.log('cant request'))

    axios.put(`https://boiling-wildwood-28100.herokuapp.com/edit/${this.props.match.params.id}`, afterEditObj)
    .then(resp => this.props.update())
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="container1">
        <div className="form-container">
          <div className="edit-heading-text">Edit Note:</div>
          <form onSubmit={this.handleSubmit} action="submit">
            <input
              type="text"
              name="noteTitle"
              value={this.state.title}
              placeholder="Note Title"
              onChange={this.handleChange}
            />
            <textarea
              name="text"
              placeholder="Note Content"
              rows="15"
              name="noteBody"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </form>
          <Link to="/">
            <div className="save-button" onClick={this.handleSubmit}>
              Update
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
