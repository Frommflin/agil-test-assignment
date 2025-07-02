import React from 'react'
import styles from './listpage.module.sass'
import MovieItem from '../components/MovieItem/MovieItem'
import { NavLink } from 'react-router-dom'

const ListPage = () => {
  return (<div>
    <h1>Dina Filmer</h1>
    <button className='btn'><NavLink to='/newmovie'>Lägg till ny film</NavLink></button>
    <div id={styles.movies}>
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
    </div>
  </div>)
}

export default ListPage