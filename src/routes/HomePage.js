import Navbar from '../components/Navbar';
import '../stylesheets/HomePage.css'

function HomePage() {
  return (
    <div className='HomePage'>
      <Navbar />
      <main className='main-homepage'>
        <h3 className='homepage-h3'>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className='homepage-h1'>SPACE</h1>
        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </main>
    </div>
  )
}

export default HomePage;