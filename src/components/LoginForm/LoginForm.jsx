import React from 'react'
import styles from './loginform.module.sass'
import InputField from '../InputField/InputField'

const LoginForm = () => {
  return (
    <form id={styles.loginForm} method='POST'>
      <InputField type='text' label='Användarnamn' name='username' placeholder='' />
      <InputField type='password' label='Lösenord' name='pwd' placeholder='' />
      <button type="submit">Spara</button>
    </form>
  )
}

export default LoginForm