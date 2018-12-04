import React from 'react';
import ReactDOM from 'react-dom';
// import DriverForm from './components/DriverForm';
import UserForm from './components/UserForm';

import '../style/style.css';

const App = () => {
  return (
    <div className="ui container" style={{"marginTop": "20px"}}>
      <UserForm/>
      {/* <DriverForm/> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
