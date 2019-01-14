import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
render() {
  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
          this.props.render4Sushi().map(sushi => <Sushi singleSushi={sushi}
          incrementEatenCounter={this.props.incrementEatenCounter}
          incrementPriceCounter={this.props.incrementPriceCounter}
             />)

        }
        <MoreButton incrementCounter={this.props.incrementCounter} />
      </div>
    </Fragment>
  )
}
}

export default SushiContainer
