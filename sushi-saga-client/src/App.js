import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    counter: 0,
    eatenCounter: 0,
    priceCounter: 0
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
     fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState ({
        allSushi: data
    })
   )
  }

  render4Sushi = () => {
    return this.state.allSushi.slice(this.state.counter, this.state.counter + 4)
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 4
    })
  }

  incrementEatenCounter = () => {
    this.setState({
      eatenCounter: this.state.eatenCounter + 1
    })

  }

  incrementPriceCounter = (sushiPrice) => {
     this.setState({
      priceCounter: this.state.priceCounter + sushiPrice
    })
  }



  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.props.allSushi}
        render4Sushi={this.render4Sushi}
        incrementCounter={this.incrementCounter}
        incrementEatenCounter={this.incrementEatenCounter}
        incrementPriceCounter={this.incrementPriceCounter}
        />

        <Table eatenCounter={this.state.eatenCounter}

        priceCounter={this.state.priceCounter} />
      </div>
    );
  }
}

export default App;
