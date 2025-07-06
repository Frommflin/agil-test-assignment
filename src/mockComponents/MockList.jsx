import { useState } from 'react'

const MockList = () => {
  const [movies,setMovies] = useState([])
  const [error,setError] = useState('')
  const [token,setToken] = useState('')

  const loginAndGetMovies = async () => {
    try{
      //login and get token
      const response = await fetch('https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          'username': 'klara@example.com',
          'password': 'havefuncodeing123'
        })
      })

      if (!response.ok) throw new Error('Det blev något fel vid inloggningen')

      const jwt = await response.text()
      setToken(jwt)

      //fetch list of saved movies
      const movieResult = await fetch('https://tokenservice-jwt-2025.fly.dev/movies',{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })

      if(!movieResult.ok) throw new Error('Det blev fel vid hämtning av filmer')
      const movieData = await movieResult.json()
     setMovies(movieData)
    } catch(err){
      setError(err)
    }
  }

  return (
    <div>
      {error && <h3>{error}</h3>}
      <button onClick={loginAndGetMovies}>Logga in och hämta filmer</button>
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