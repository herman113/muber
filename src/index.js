import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import DriverForm from './components/DriverForm';
import UserForm from './components/UserForm';

import '../style/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  onUserFormSubmit(firstName) {
    console.log(firstName);
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
