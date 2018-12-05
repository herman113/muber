import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import unsplash from './api/unsplash';
// import DriverForm from './components/DriverForm';
import UserForm from './components/UserForm';

import '../style/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onUserFormSubmit = this.onUserFormSubmit.bind(this)
    this.state = {images: []}
  }
  async onUserFormSubmit(firstName) {
    const response = await unsplash.get('/search/photos', {
      params: { query: firstName },
    })
  
    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="ui container" style={{"marginTop": "20px"}}>
        <UserForm onUserFormSubmit={this.onUserFormSubmit}/>
        <ul>
          {this.state.images.map((image, index) => {
            return <li key={index}><img src={image.urls.regular} style={{"width": "300", "float":"left"}}/></li>
          })}
        </ul>
        {/* <DriverForm/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
