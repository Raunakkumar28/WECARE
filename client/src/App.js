import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './axios';git
import WeCare from './WeCare.jpeg';
import WeCareAdmin from './WeCareAdmin';

class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { apiResponse: "" };
    this.state = { text: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
    this.callAPI();
}
  addMsg = (text) => {
    console.log(this.state)
    let newUser = { text };
    try {
      const config = {
        headers: { 'Content-type': 'application/json' }
      }
      
      const body = JSON.stringify(newUser);
      const res = await axios.post('/testApi', body, config);
    } catch (err) {
      console.log(err)
    }
  }
  

    render()
    {
    return (
      <div className="App">
        <header className="App-header">
          <img src={WeCare} className="App-logo1" alt="WeCare" />
          <h1 className="App-title">WE CARE ADMIN</h1>
        </header>
        <p className="App-intro">{this.state.apiResponse}</p>
        <WeCareAdmin addMsg={this.addMsg}/>
      </div>
    );
  }
}

export default App;
