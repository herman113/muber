import React, { Component } from 'react';
import axios from 'axios';

class DriverForm extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      email: ''
    }
  }
  onFormSubmit(e) {
    e.preventDefault()
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: this.state.email},
      headers: {
        Authorization: 'Client-ID ab42ac0bbd4b163903df5c6741f5a48f717b437f5e8d31529c572d7e8c831f4c'
      }
    })
    .then((response) => {
      console.log(response.data.results);
    });
  }
  render() {
    return (
      <div className="ui segment">
        <h3>Driver Form</h3>
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="ui email form-field ">
            <label>email:</label>
            <input 
              type="email" 
              name="email" 
              value={this.state.email}
              onChange={(e) => { this.setState({ email: e.target.value })}}
            />
          </div>
          <button type="submit" className="ui" style={{"marginTop": "10px"}}>Submit</button>
        </form>
      </div>
    )
  }
}

export default DriverForm;
