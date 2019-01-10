import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
// import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const getRandomSushi = () => {
    return props.allSushis[Math.floor(Math.random() * props.allSushis.length)];
  }
  const sushi01 = getRandomSushi()
  console.log(sushi01)
  return (
    <Fragment>
      <div className="belt">

        {
          /*
             Render Sushi components here!
          */
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
