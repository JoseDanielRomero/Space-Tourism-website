import { useContext } from 'react';
import { DatabaseContext } from '..';
import '../stylesheets/Planet.css'

function Planet({ destinationName }) {

  const context = useContext(DatabaseContext)

  let urlFormated = require(`../images/destination/image-${destinationName}.png`)

  return (
    <section className='destination-box'>
      <img src={urlFormated} className='destination-image' />
    </section>
  )
}

export default Planet;