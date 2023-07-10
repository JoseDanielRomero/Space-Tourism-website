import { useContext, useState } from 'react';
import { DatabaseContext } from '..';
import Navbar from '../components/Navbar';
import Planet from '../components/Planet';
import TextPlanet from '../components/TextPlanet';
import Titles from '../components/Titles';
import '../stylesheets/DestinationPage.css'

function DestinationPage() {

  const context = useContext(DatabaseContext)

  const [selectedPlanet, setSelectedPlanet] = useState({name: 'moon', index: 0})

  const handleClickDestination = (desIndex) => {
    const destination = context.destinations[desIndex].name
    const destinationFormated = destination.toLowerCase()
    setSelectedPlanet({name: destinationFormated, index: desIndex})
  }

  console.log(selectedPlanet)

  return (
    <div className='DestinationPage'>
      <Navbar />
      <main className='main-destination'>
        <article className='left-side'>
          <Titles 
            titleNumber='01'
            titleText='PICK YOUR DESTINATION'
          />
          <Planet 
            destinationName={selectedPlanet.name}
          />
        </article>
        <article className='right-side'>
          <section className='text-container'>
            <div className='destination-picker-box'>
              <ul className='destination-picker-list'>
                <li className='destination-picker-item' onClick={() => {
                  handleClickDestination(0)
                }}>MOON</li>
                <li className='destination-picker-item' onClick={() => {
                  handleClickDestination(1)
                }}>MARS</li>
                <li className='destination-picker-item' onClick={() => {
                  handleClickDestination(2)
                }}>EUROPA</li>
                <li className='destination-picker-item' onClick={() => {
                  handleClickDestination(3)
                }}>TITAN</li>
              </ul>
            </div>
          </section>
          <TextPlanet />
        </article>
      </main>
    </div>

  )
}

export default DestinationPage;