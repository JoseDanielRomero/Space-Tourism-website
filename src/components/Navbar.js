import '../stylesheets/Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <div className='logo'></div>
        <div className='navbar-container'>
          <ul>
            <li><NavLink to='/' className='nav-item'>00 HOME</NavLink></li>
            <li><NavLink to='/destination' className='nav-item'>01 DESTINATION</NavLink></li>
            <li><NavLink to='/crew' className='nav-item'>02 CREW</NavLink></li>
            <li><NavLink to='/destination' className='nav-item'>03 TECHNOLOGY</NavLink></li>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </>
  )
}

export default Navbar;