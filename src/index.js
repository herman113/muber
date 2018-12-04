import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import DriverForm from './components/DriverForm';
import UserForm from './components/UserForm';

import '../style/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  onUserFormSubmit(firstName) {
    console.log(firstName);
    axios.get('https://api.unsplash.com//search/photos', {
      params: { query: firstName },
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
      <div className="ui container" style={{"marginTop": "20px"}}>
        <UserForm onUserFormSubmit={this.onUserFormSubmit}/>
        {/* <DriverForm/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
