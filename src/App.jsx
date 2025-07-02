import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <Header/>
      <div className='page'>
        <Routes>
          <Route exact path='/' element={<ListPage/>}></Route>
          <Route path='/newmovie' element={<FormPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
        </Routes>
      </div>
      
    </>
  )
}

export default App
