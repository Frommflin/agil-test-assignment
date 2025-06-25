import React from 'react'
import styles from './movieitem.module.sass'

const MovieItem = () => {
  return (
    <div className={styles.card}>
      <h3>Title</h3>
      <div className={styles.label}>Director: Name</div>
      <div className={styles.label}>Released in (year)</div>
      <h4 className={styles.label}>Description</h4>
      <div>Description text</div>
    </div>
  )
}

export default MovieItem

// "title": "The life of John Doe",
// "director": "John Doe Thats his name",
// "description": "Describes the extraordinary life of John Doe.",
// "productionYear": 2000,
// "id": 2