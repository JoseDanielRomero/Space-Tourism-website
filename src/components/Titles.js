import '../stylesheets/Titles.css'

function Titles({ titleNumber, titleText }) {
  return (
    <section className='title-destination-box'>
        <h2 className='title-destination-number'>{titleNumber}</h2>
        <h2 className='title-destination-text'>{titleText}</h2>
    </section>
  )
}

export default Titles;