import React, { useContext, useState } from 'react'

function Provider() {

    const NavbarContext = useContext(false)
    const [navbarToogle, setNavbarToogle] = useState(false);

  return (
    <NavbarContext.Provider value={{ navbarToogle, setNavbarToogle }}>
    </NavbarContext.Provider>
  )
}

export default Provider