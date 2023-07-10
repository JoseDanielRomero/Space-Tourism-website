import { useContext, useState } from 'react';
import { DatabaseContext } from '..';
import Navbar from '../components/Navbar';
import Titles from '../components/Titles';
import '../stylesheets/CrewPage.css'

function CrewPage() {

  const context = useContext(DatabaseContext);
  const [selectedCrew, setSelectedCrew] = useState({name: 'Douglas Hurley', index: 0})

  const modSelectedName1 = (selectedCrew.name).toLocaleLowerCase()
  const modSelectedName2 = (modSelectedName1).split(' ')
  const modSelectedName3 = modSelectedName2.splice(1, 0, '-')
  const modSelectedName4 = modSelectedName2.join('')
  const urlFormated = require(`../images/crew/image-${modSelectedName4}.png`)

  const handleClickCrewPicker = (crewIndex) => {
    setSelectedCrew({name: context.crew[crewIndex].name, index: crewIndex})
  }

  const handleClassButton = (crewIndex) => {
    if (crewIndex == selectedCrew.index) {
      return 'crew-picker-button on'
    } else {
      return 'crew-picker-button'
    }
  }

  return (
    <div className='CrewPage'>
      <Navbar />
      <main className='main-crew'>
        <article className='left-side crew'>
          <Titles 
            titleNumber='02'
            titleText='MEET YOUR CREW'
          />
          <section className='crew-text-container'>
            <div className='crew-text-box'>
              <h2 className='crew-role'>{(context.crew[selectedCrew.index].role).toLocaleUpperCase()}</h2>
              <h1 className='crew-name'>{(context.crew[selectedCrew.index].name).toLocaleUpperCase()}</h1>
              <p>{context.crew[selectedCrew.index].bio}</p>
            </div>
            <div className='crew-picker-box'>
              <button className={handleClassButton(0)} onClick={()=>{
                handleClickCrewPicker(0)
              }}/>
              <button className={handleClassButton(1)} onClick={()=>{
                handleClickCrewPicker(1)
              }}/>
              <button className={handleClassButton(2)} onClick={()=>{
                handleClickCrewPicker(2)
              }}/>
              <button className={handleClassButton(3)} onClick={()=>{
                handleClickCrewPicker(3)
              }}/>
            </div>
          </section>
        </article>
        <article className='right-side crew'>
          <img src={urlFormated} className='crew-image' alt={selectedCrew.name} />
        </article>
      </main>
    </div>
  )
}

export default CrewPage;