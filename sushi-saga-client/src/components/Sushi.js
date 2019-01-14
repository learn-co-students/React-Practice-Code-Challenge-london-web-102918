import React, { Fragment, Component } from 'react'

class Sushi extends Component {

  state ={
    eaten: false
  }

  eatenSushi = () => {
    this.setState({
      eaten: true
    })

    this.props.incrementEatenCounter()
    this.props.incrementPriceCounter(this.props.singleSushi.price)
  }

  render() {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={this.eatenSushi}>
        {
          /* Tell me if this sushi has been eaten! */
          this.state.eaten === true ?
            null
          :
            <img src={this.props.singleSushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.singleSushi.name} - ${this.props.singleSushi.price}
      </h4>
    </div>
    )
  }
}

export default Sushi
