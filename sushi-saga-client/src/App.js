import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"




class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      sushi: {},
      allSushis: [],
    }
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(json => this.setState({
        allSushis: json
      }))
    }




  render() {
    return (
      <div className="app">
        <SushiContainer allSushis={this.state.allSushis} />
        <Table />
      </div>
    );
  }
}


export default App;
