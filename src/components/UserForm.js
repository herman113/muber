import React, { Component } from 'react'
import axios from 'axios';

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }
  onInputChangeName(e) {
    // console.log(this.state.name);
    // console.log(e.target.value);
  }
  onInputChangeEmail(e) {
    console.log(e.target.value);
  }
  onSubmit() {
    // e.preventDefault();

    // console.log(e);
    // axios.post('http://localhost:3050/api/drivers', { email })
    //   .then((result) => {
        
    //   });
  }
  render() {
    return (
      <div className="ui segment">
        <h3>User Form</h3>
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="ui field first-name">
            <label>First Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={(e) => {this.setState({ name: e.target.value })}}
              />
            </div>
          <div className="ui field last-name">
            <label>Last Name:</label>
            <input
              type="text"
              name="last-name"
              onChange={(e) => {console.log(e.target.value.toUpperCase())}}
              />
            </div>
          <div className="ui field email">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              // value={this.state.email}
              onChange={this.onInputChangeEmail}
              />
          </div>
          <div className="log-state">
            {/* {console.log(this.state.name)} */}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}