import {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { ToMContext } from '../../providers/ToMProvider'
import styles from './header.module.sass'

const Header = () => {
  const {token, changeToken} = useContext(ToMContext)
  return (<>
    <div id={styles.header}>
      <div id={styles.title}>Tower of Movies</div>
      <nav>
        <ul>
          <li><NavLink to='/'>Filmer</NavLink></li>
          {token != '' ? (
            <li><a href='#' onClick={()=>changeToken('')}>Logga ut</a></li>
          ) : (
            <li><NavLink to='/login'>Logga in</NavLink></li>
          )}
        </ul>
      </nav>
    </div>
  </>)
}

export default Header