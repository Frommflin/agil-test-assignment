import React from 'react'
import NewMovieForm from '../components/NewMovieForm/NewMovieForm'
import { NavLink } from 'react-router-dom'

const FormPage = () => {
  return (<>
    <h1>Lägg till ny film</h1>
    <button className='btn'><NavLink to='/'>Avbryt</NavLink></button>
    <NewMovieForm/>
  </>)
}

export default FormPage
