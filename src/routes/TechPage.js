import Navbar from '../components/Navbar'
import '../stylesheets/TechPage.css'
import Titles from '../components/Titles'
import { useContext, useState, useRef } from 'react'
import { DatabaseContext } from '..'

function TechPage() {
  const [navbarToogle, setNavbarToogle] = useState(false);

  const context = useContext(DatabaseContext);
  const [selectedTech, setSelectedTech] = useState({name: 'Launch vehicle', index: 0})

  const windowWidth = useRef(window.innerWidth)
  const windowWidthFix = windowWidth.current

  const modSelectedName1 = (selectedTech.name).toLocaleLowerCase()
  const modSelectedName2 = (modSelectedName1).split(' ')

  if (modSelectedName2.length > 1) {
    const modSelectedName3 = modSelectedName2.splice(1, 0, '-')
  }

  const orientation = windowWidthFix < 680 ? 'landscape' : 'portrait'

  const modSelectedName4 = modSelectedName2.join('')
  const urlFormated = require(`../images/technology/image-${modSelectedName4}-${orientation}.jpg`)

  const handleClickPickTech = (techIndex) => {
    const techName = context.technology[techIndex].name
    setSelectedTech({name: techName, index: techIndex})
  }

  const handleClassButton = (techIndex) => {
    if (techIndex == selectedTech.index) {
      return 'tech-picker-button on'
    } else {
      return 'tech-picker-button'
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
    if (navbarToogle == true) {
      setNavbarToogle(false)
    }
  }

  return (
    <div className='TechPage'>
      <Navbar 
        navbarToogle={navbarToogle}
        setNavbarToogle={setNavbarToogle}
      />
      <main className='main-tech' onClick={handleClickOutNavbar}>
        <article className='left-side tech'>
          <Titles 
            titleNumber='03'
            titleText='SPACE LAUNCH 101'
            clase={handleClassTitleByDevice(false)}
          />
          <section className='tech-text-container'>
            <div className='tech-picker-box'>
              <button className={handleClassButton(0)} onClick={()=> {
                handleClickPickTech(0)
              }}>1</button>
              <button className={handleClassButton(1)} onClick={()=> {
                handleClickPickTech(1)
              }}>2</button>
              <button className={handleClassButton(2)} onClick={()=> {
                handleClickPickTech(2)
              }}>3</button>
            </div>
            <div className='tech-text-box'>
              <h5 className='tech-text-intro'>THE TERMINOLOGY...</h5>
              <h1 className='tech-text-name'>{(context.technology[selectedTech.index].name).toLocaleUpperCase()}</h1>
              <p className='tech-text-description'>{context.technology[selectedTech.index].description}</p>
            </div>
          </section>
        </article>
        <article className='right-side tech'>
          <Titles 
            titleNumber='03'
            titleText='SPACE LAUNCH 101'
            clase={handleClassTitleByDevice(true)}
          />
          <img src={urlFormated} className='tech-image' />
        </article>
      </main>
    </div>
  )
}

export default TechPage