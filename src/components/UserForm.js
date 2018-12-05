import React, { Component } from 'react'

export default class UserForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }
  onInputChangeEmail(e) {
    console.log(e.target.value);
  }
  onFormSubmit(e) {
  // onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.firstName);
    this.props.onUserFormSubmit(this.state.firstName);
  }
  render() {
    return (
      <div className="ui segment">
        <h3>User Form</h3>
        <form onSubmit={this.onFormSubmit} className="ui form">
        {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
        {/* <form onSubmit={this.onFormSubmit.bind(this)} className="ui form"> */}
          <div className="ui field first-name">
            <label>First Name:</label>
            <input
              type="text"
              name="first-name"
              value={this.state.firstName}
              onChange={(e) => {this.setState({ firstName: e.target.value })}}
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
            {/* {console.log(this.state.firstName)} */}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}