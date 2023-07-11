import { useContext, useState, useRef } from 'react';
import { DatabaseContext } from '..';
import Navbar from '../components/Navbar';
import Titles from '../components/Titles';
import '../stylesheets/CrewPage.css'

function CrewPage() {
  const [navbarToogle, setNavbarToogle] = useState(false);

  const context = useContext(DatabaseContext);
  const [selectedCrew, setSelectedCrew] = useState({name: 'Douglas Hurley', index: 0})

  const windowWidth = useRef(window.innerWidth)
  const windowWidthFix = windowWidth.current

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

  const handleClassTitleByDevice = (display) => {
    if (windowWidthFix < 680) {
      if (display == false) {
        return 'title-destination-box off'
      } else {
        return 'title-destination-box'
      }
    } else {
      if (display == false) {
        console.log('hola')
        return 'title-destination-box'
      } else {
        console.log('hola 2')
        return 'title-destination-box off'
      }
    }
  }

  const handleClickOutNavbar = () => {
    setNavbarToogle(false)
  }

  return (
    <div className='CrewPage'>
      <Navbar 
        navbarToogle={navbarToogle}
        setNavbarToogle={setNavbarToogle}
      />
      <main className='main-crew' onClick={handleClickOutNavbar}>
        <article className='left-side crew'>
          <Titles 
            titleNumber='02'
            titleText='MEET YOUR CREW'
            clase={handleClassTitleByDevice(false)}
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
          <Titles 
            titleNumber='02'
            titleText='MEET YOUR CREW'
            clase={handleClassTitleByDevice(true)}
          />
          <img src={urlFormated} className='crew-image' alt={selectedCrew.name} />
          <hr className='crewpage-hr'></hr>
        </article>
      </main>
    </div>
  )
}

export default CrewPage;