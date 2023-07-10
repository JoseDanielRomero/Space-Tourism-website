import Navbar from '../components/Navbar'
import '../stylesheets/TechPage.css'
import Titles from '../components/Titles'
import { useContext, useState } from 'react'
import { DatabaseContext } from '..'

function TechPage() {

  const context = useContext(DatabaseContext);
  const [selectedTech, setSelectedTech] = useState({name: 'Launch vehicle', index: 0})

  const modSelectedName1 = (selectedTech.name).toLocaleLowerCase()
  const modSelectedName2 = (modSelectedName1).split(' ')

  console.log(modSelectedName2)

  if (modSelectedName2.length > 1) {
    const modSelectedName3 = modSelectedName2.splice(1, 0, '-')
  }

  const modSelectedName4 = modSelectedName2.join('')
  const urlFormated = require(`../images/technology/image-${modSelectedName4}-portrait.jpg`)

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

  return (
    <div className='TechPage'>
      <Navbar />
      <main className='main-tech'>
        <article className='left-side tech'>
          <Titles 
            titleNumber='03'
            titleText='SPACE LAUNCH 101'
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
          <img src={urlFormated} className='tech-image' />
        </article>
      </main>
    </div>
  )
}

export default TechPage