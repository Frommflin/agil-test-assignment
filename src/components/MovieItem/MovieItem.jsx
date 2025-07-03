import React from 'react'
import styles from './movieitem.module.sass'

const MovieItem = ({title, director, year, description}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.label}>Reggisör: {director}</div>
      <div className={styles.label}>Utgivningsår: {year}</div>
      <h4 className={styles.label}>Beskrivning</h4>
      <div>{description}</div>
    </div>
  )
}

export default MovieItem
