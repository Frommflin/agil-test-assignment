import React from 'react'
import styles from './header.module.sass'

const Header = () => {
  return (<>
    <div id={styles.header}>
      <div id={styles.title}>Tower of Movies</div>
      <nav>
        <ul>
          <li>Filmer</li>
          <li>Logga in</li>
        </ul>
      </nav>
    </div>
  </>)
}

export default Header