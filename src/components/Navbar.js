import '../stylesheets/Navbar.css'
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import hamburgerIcon from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'
import { useState } from 'react';

function Navbar () {
  const windowWidth = useRef(window.innerWidth)
  const windowWidthFix = windowWidth.current

  const [navbarToogle, setNavbarToogle] = useState(false);

  console.log(windowWidthFix)
  console.log(navbarToogle)

  const handleClickShowNavbar = () => {
    if (windowWidthFix < 680) {
      if (navbarToogle === false) {
        setNavbarToogle(true)
      } else {
        setNavbarToogle(false)
      }
    } 
  }

  const handleShowHamburgerIcon = () => {
    if (windowWidthFix > 680) {
      return 'hamburger-icon off'
    } else {
      return 'hamburger-icon'
    }
  }
  
  const handleClassShowNavbar = navbarToogle == false ? 'navbar-container off' : 'navbar-container'
  
  const handleClassNavbarItems = navbarToogle == false ? 'nav-item off' : 'nav-item'

  return (
    <>
      <nav>
        <img src={hamburgerIcon} className={handleShowHamburgerIcon()} onClick={handleClickShowNavbar} />
        <div className='logo'></div>
        <div className={handleClassShowNavbar}>
          <ul className='navbar-list'>
            <li><NavLink to='/' className={handleClassNavbarItems}>00 HOME</NavLink></li>
            <li><NavLink to='/destination' className={handleClassNavbarItems}>01 DESTINATION</NavLink></li>
            <li><NavLink to='/crew' className={handleClassNavbarItems}>02 CREW</NavLink></li>
            <li><NavLink to='/technology' className={handleClassNavbarItems}>03 TECHNOLOGY</NavLink></li>
          </ul>
        </div>
      </nav>
      <hr className='homepage-hr'></hr>
    </>
  )
}

export default Navbar;