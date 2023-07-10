import { useState } from 'react';
import Navbar from '../components/Navbar';
import Planet from '../components/Planet';
import Titles from '../components/Titles';
import '../stylesheets/DestinationPage.css'

function DestinationPage() {

  const [selectedPlanet, setSelectedPlanet] = useState({name: 'moon', index: 0})

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
              <ul>

              </ul>
            </div>
          </section>
        </article>
      </main>
    </div>

  )
}

export default DestinationPage;