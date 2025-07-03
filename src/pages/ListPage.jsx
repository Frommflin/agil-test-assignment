import { useContext, useEffect, useState } from 'react'
import { ToMContext } from '../providers/ToMProvider'
import styles from './listpage.module.sass'
import MovieItem from '../components/MovieItem/MovieItem'
import { NavLink } from 'react-router-dom'
import { getMovies } from '../services/movieService'

const ListPage = () => {
  const {token} = useContext(ToMContext)
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    if(token != ''){
      getMovies().then(data => {
        setMovies(data)
      })
    }
  },[])
  
  useEffect(() =>{
    setMovies([])
  },[token])

  return (<div>
    <h1>Dina Filmer</h1>
    {token != '' ? (
      <div>
        <button className='btn'><NavLink to='/newmovie'>Lägg till ny film</NavLink></button>
        <div id={styles.movies}>
          {movies &&
            movies.map(movie => { 
              if(movie) {
                return (<MovieItem title={movie.title} director={movie.director} year={movie.productionYear} description={movie.description} />)
              }
            })
          }
        </div>
      </div>
    ) : (
      <p>Du måste vara inloggad för att se sparade filmer!</p>
    )}
  </div>)
}

export default ListPage