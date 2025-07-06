import { useState } from 'react'

const MockList = () => {
  const [movies,setMovies] = useState([])
  const [error,setError] = useState('')

  return (
    <div>
      {error && <h3>{error}</h3>}
      <button>Logga in och hämta filmer</button>
      <ul>
        {movies.map((movie, i) => (
          <li key={i}>
            <div>
              <h3>{movie.title}</h3>
              <p>Reggisör: {movie.director}</p>
              <p>År: {movie.productionYear}</p>
              <p>{movie.description}</p>
            </div>
          </li>
        ))}
    </ul>
</div>
  )
}

export default MockList