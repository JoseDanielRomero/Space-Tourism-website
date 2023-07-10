import { useContext } from 'react';
import { DatabaseContext } from '..';
import '../stylesheets/TextPlanet.css'

function TextPlanet({ destinationName, destinationIndex }) {

  const context = useContext(DatabaseContext)
  const titleFormated = destinationName.toUpperCase()

  return (
    <>
      <h1 className='destinationpage-h1'>{titleFormated}</h1>
      <p>{context.destinations[destinationIndex].description}</p>
      <hr className='destinationpage-hr'></hr>
      <div className='data-box'>
        <div className='data-mini-box'>
          <h5 className='data-title'>AVG. DISTANCE</h5>
          <h4 className='data-result'>{(context.destinations[destinationIndex].distance).toLocaleUpperCase()}</h4>
        </div>
        <div className='data-mini-box'>
          <h5 className='data-title'>EST. TRAVEL TIME</h5>
          <h4 className='data-result'>{(context.destinations[destinationIndex].travel).toLocaleUpperCase()}</h4>
        </div>
      </div>
    </>
  )
}

export default TextPlanet;