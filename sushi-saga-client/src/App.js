import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSushis: [],
      counter: 0,
      eaten: [],
      dollaz: 1000000
    }
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(json => this.setState({allSushis: json}))
  }

  getFourSushis = () => {
     return this.state.allSushis.slice(this.state.counter, this.state.counter + 4)
   }

  eatSushi = sushi => {
    this.state.eaten.includes(sushi) || this.state.budget < sushi.price ? null : this.setState({
      dollaz: (this.state.dollaz - sushi.price),
      eaten: [...this.state.eaten, sushi]
    })
  }

  getMoreSushi = () => {
    this.setState({counter: this.state.counter + 4})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eaten={this.state.eaten} getFourSushis={this.getFourSushis()} eatSushi={this.eatSushi} getMoreSushi={this.getMoreSushi} />      <Table dollaz={this.state.dollaz} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
