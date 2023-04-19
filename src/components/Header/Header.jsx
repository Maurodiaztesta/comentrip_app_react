import { UserContext } from '../../contexts/UserContext';
import './Header.scss'
import React, { useContext } from 'react'

const Header = () => {

  const {privilegios, setPrivilegios} = useContext(UserContext);

  console.log(privilegios);

  const cambiarBooleano = () => {
    if (privilegios === true) {
      setPrivilegios(false)
    } else {
      setPrivilegios(true)
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <nav className={privilegios === true ? 'nav' : 'navAdmin'}>
        {privilegios === true ? <h1 onClick={reload} className='nav__title'>ADMIN</h1> : <h1 onClick={reload} className='nav__title'>COMENTRIP</h1>}
        <button onClick={cambiarBooleano} className={privilegios === true ? 'nav__buttonAdmin' : 'nav__button'}>CAMBIAR USUARIO</button>
    </nav>
  )
}

export default Header