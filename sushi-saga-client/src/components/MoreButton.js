import React, {Component} from 'react'

class MoreButton extends Component {
  render() {
    return (
      <button onClick={this.props.incrementCounter}>
            More sushi!
      </button>
    )
  }
}

export default MoreButton
