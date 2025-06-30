import Header from './components/Header/Header'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <Header/>
      <div className='page'>
        {/* <ListPage/> */}
        {/* <FormPage/> */}
        <LoginPage/>
      </div>
      
    </>
  )
}

export default App
