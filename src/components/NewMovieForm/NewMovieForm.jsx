import React from 'react'
import styles from './newmovieform.module.sass'
import InputField from '../InputField/InputField'

const NewMovieForm = () => {
  return (
    <form id={styles.newForm} method='POST'>
      <InputField type='text' label='Titel' name='title' placeholder='' />
      <InputField type='text' label='Regissör' name='director' placeholder='' />
      <InputField type='text' label='Utgivningsår' name='year' placeholder='' />
      <InputField type='text' label='Beskrivning' name='description' placeholder='' />
      <button type="submit">Spara</button>
    </form>
  )
}

export default NewMovieForm
