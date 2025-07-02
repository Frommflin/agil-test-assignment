import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './header.module.sass'

const Header = () => {
  return (<>
    <div id={styles.header}>
      <div id={styles.title}>Tower of Movies</div>
      <nav>
        <ul>
          <li><NavLink to='/'>Filmer</NavLink></li>
          <li><NavLink to='/login'>Logga in</NavLink></li>
        </ul>
      </nav>
    </div>
  </>)
}

export default Header