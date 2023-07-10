import { useContext, useState } from 'react';
import { DatabaseContext } from '..';
import Navbar from '../components/Navbar';
import Titles from '../components/Titles';
import '../stylesheets/CrewPage.css'

function CrewPage() {

  const contexto = useContext(DatabaseContext);
  const [selectedCrew, setSelectedCrew] = useState({name: 'Douglas Hurley', index: 0})

  const modSelectedName1 = (selectedCrew.name).toLocaleLowerCase()
  const modSelectedName2 = (modSelectedName1).split(' ')
  const modSelectedName3 = modSelectedName2.splice(1, 0, '-')
  const modSelectedName4 = modSelectedName2.join('')
  const urlFormated = require(`../images/crew/image-${modSelectedName4}.png`)

  return (
    <div className='CrewPage'>
      <Navbar />
      <main className='main-crew'>
        <article className='left-side crew'>
          <Titles 
            titleNumber='02'
            titleText='MEET YOUR CREW'
          />
          <section className='crew-text-box'>

          </section>
          <section className='crew-picker-box'>

          </section>
        </article>
        <article className='right-side crew'>
          <img src={urlFormated} className='crew-image' />
        </article>
      </main>
    </div>
  )
}

export default CrewPage;