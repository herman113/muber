import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DriverForm from './components/DriverForm';

import '../style/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui container" style={{"marginTop": "20px"}}>
        <DriverForm/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
