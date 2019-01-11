import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'

// Endpoint!
const API = 'http://localhost:3000/sushis'

class App extends Component {
  state = {
    sushis: [],
    counter: 0,
    eaten: [],
    budget: 45,
  }

  eatSushi = sushi => {
    this.state.eaten.includes(sushi) || this.state.budget < sushi.price
      ? null
      : this.setState({
          eaten: [...this.state.eaten, sushi],
          budget: this.state.budget - sushi.price,
        })
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(sushis => this.setState({ sushis: sushis }))
  }

  incrementCounter = () => {
    return this.setState({ counter: this.state.counter + 4 })
  }

  nextFour = () => {
    return this.state.sushis.slice(this.state.counter, this.state.counter + 4)
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          eaten={this.state.eaten}
          sushis={this.nextFour()}
          incrementCounter={this.incrementCounter}
          eatSushi={this.eatSushi}
        />
        <Table budget={this.state.budget} eaten={this.state.eaten} />
      </div>
    )
  }
}

export default App
