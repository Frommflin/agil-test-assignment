import { useContext } from 'react'
import { ToMContext } from '../providers/ToMProvider'
import styles from './listpage.module.sass'
import MovieItem from '../components/MovieItem/MovieItem'
import { NavLink } from 'react-router-dom'

const ListPage = () => {
  const {loggedIn} = useContext(ToMContext)

  return (<div>
    <h1>Dina Filmer</h1>
    {loggedIn ? (
      <div>
        <button className='btn'><NavLink to='/newmovie'>Lägg till ny film</NavLink></button>
        <div id={styles.movies}>
          <MovieItem/>
          <MovieItem/>
          <MovieItem/>
          <MovieItem/>
        </div>
      </div>
    ) : (
      <p>Du måste vara inloggad för att se sparade filmer!</p>
    )}
  </div>)
}

export default ListPage