import { createContext, useState } from 'react'
export const ToMContext = createContext()

const ToMProvider = (props) => {
  const [token, setToken] = useState('')
  const changeToken = (val) => {setToken(val)}

  return (
    <ToMContext.Provider value = {{token, changeToken}}>
      {props.children}
    </ToMContext.Provider>
  )
}

export default ToMProvider