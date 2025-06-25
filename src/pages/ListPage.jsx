import React from 'react'
import styles from './listpage.module.sass'
import MovieItem from '../components/MovieItem/MovieItem'

const ListPage = () => {
  return (<div className='page'>
    <h1>Dina Filmer</h1>
    <div id={styles.movies}>
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
      <MovieItem/>
    </div>
  </div>)
}

export default ListPage