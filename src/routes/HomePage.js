import Navbar from '../components/Navbar';
import '../stylesheets/HomePage.css'
import { useState } from 'react';

function HomePage() {
  const [navbarToogle, setNavbarToogle] = useState(false);

  const handleClickOutNavbar = () => {
    if (navbarToogle == true) {
      setNavbarToogle(false)
    }
  }

  return (
    <div className='HomePage'>
      <Navbar 
        navbarToogle={navbarToogle}
        setNavbarToogle={setNavbarToogle}
      />
      <main className='main-homepage' onClick={handleClickOutNavbar}>
        <h3 className='homepage-h3'>SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className='homepage-h1'>SPACE</h1>
        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      </main>
    </div>
  )
}

export default HomePage;