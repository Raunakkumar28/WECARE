import React, { Component } from 'react';
import WeCareAdmin from './WeCareAdmin';
import './App.css';
import axios from 'axios';
import WeCare from './WeCare.jpeg';


class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { apiResponse: "" };
    this.state = { text: "" };
  }
//   callAPI() {
//     fetch("http://localhost:9000/testAPI")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
// }

componentWillMount() {
    // this.callAPI();
}
  addMsg = (text) => {
    console.log(this.state)
    let newUser = { text };
    try {
      const config = {
        headers: { 'Content-type': 'application/json' }
      }
      
      const body = JSON.stringify(newUser);
      const res = axios.post('http://localhost:9000/testAPI', body, config);
      console.log(res.data)
    } catch (err) {
      console.log(err.response.data)
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
