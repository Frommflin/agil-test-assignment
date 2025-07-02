import { createContext, useState } from 'react'
export const ToMContext = createContext()

const ToMProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const changeLogState = () => {setLoggedIn(!loggedIn)}

  return (
    <ToMContext.Provider value = {{loggedIn, changeLogState}}>
      {props.children}
    </ToMContext.Provider>
  )
}

export default ToMProvider