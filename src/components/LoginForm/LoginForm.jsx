import { useContext, useState } from 'react'
import styles from './loginform.module.sass'
import InputField from '../InputField/InputField'
import { loginUser } from '../../services/userService'
import { ToMContext } from '../../providers/ToMProvider'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const {changeToken} = useContext(ToMContext)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
  const submitLogin = async (e)=> {
    e.preventDefault()
    setError('') //Resetting message before each loggin-attempt

    const form = e.target
    const formData = new FormData(form)
    const username = Object.fromEntries(formData.entries()).username
    const password = Object.fromEntries(formData.entries()).pwd

    if(!username) {
      setError('Fältet Användarnamn kan inte vara tomt')
      return
    }
    if(!password) {
      setError('Fältet Lösenord kan inte vara tomt')
      return
    }

    const result = await loginUser(username, password)

    if(result == 'Authentication error: Bad credentials'){
      setError('Felaktiga inloggningsuppgifter. Kontrollera stavning och försöka igen.')
      return
    }
    changeToken(result)
    e.target.reset()
    navigate('/')
  }

  return (<>
    {error ? (<div className='error'>{error}</div>) : ''}
    <form id={styles.loginForm} method='POST' onSubmit={submitLogin}>
      <InputField type='text' label='Användarnamn' name='username' placeholder='' />
      <InputField type='password' label='Lösenord' name='pwd' placeholder='' />
      <button type="submit">Logga in</button>
    </form>
  </>)
}

export default LoginForm