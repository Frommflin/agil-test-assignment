import { useState } from 'react'
import styles from './newmovieform.module.sass'
import InputField from '../InputField/InputField'
import { useNavigate } from 'react-router-dom'
import { createMovie } from '../../services/movieService'

const NewMovieForm = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const createNewMovie = async (e) => {
    e.preventDefault()
    setError('') //Resetting error message

    const form = e.target
    const formData = new FormData(form)
    const title = Object.fromEntries(formData.entries()).title
    const director = Object.fromEntries(formData.entries()).director
    const productionYear = Object.fromEntries(formData.entries()).year
    const description = Object.fromEntries(formData.entries()).description

    if(!title) {
      setError('Fältet Titel kan inte vara tomt')
      return
    }
    if(director.length < 10) {
      setError('Fältet Regissör kan inte vara mindre än 30 tecken')
      return
    }
    if(productionYear < 1900) {
      setError('Utgivningsår kan inte vara innan 1900')
      return
    }
    if(description.length < 30) {
      setError('Beskrivningen måste vara minst 30 tecken lång')
      return
    }

    const result = await createMovie(title,director,productionYear,description)

    if(Object.keys(result).length != 6){
      setError('Det uppstod problem')
      return
    }

    navigate('/')
  }
  return (<>
    {error ? (<div className='error'>{error}</div>) : ''}
    <form id={styles.newForm} method='POST' onSubmit={createNewMovie}>
      <InputField type='text' label='Titel' name='title' placeholder='' />
      <InputField type='text' label='Regissör' name='director' placeholder='' />
      <InputField type='number' label='Utgivningsår' name='year' placeholder='' />
      <InputField type='text' label='Beskrivning' name='description' placeholder='' />
      <button type="submit">Spara</button>
    </form>
  </>)
}

export default NewMovieForm
