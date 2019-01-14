import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.getFourSushis.map(sushi => {
            return (
              <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} eaten={props.eaten} />
            )
        })}
        <MoreButton getMoreSushi={props.getMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
