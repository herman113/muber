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
    axios.post('http://localhost:3050/api/drivers', {
      params: { query: this.state.email},
      // headers: {
      //   'Access-Control-Allow-Origin': '*',
      //   'crossDomain': true,
      //   'Content-Type': 'text/plain;charset=utf-8'
      // }
    })
    .then((response) => {
      console.log(response.data.results);
    })
    .catch((request) => {
      console.log(request);
    })
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
