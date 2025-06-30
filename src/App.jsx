import Header from './components/Header/Header'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'

function App() {

  return (
    <>
      <Header/>
      <div className='page'>
        {/* <ListPage/> */}
        <FormPage/>
      </div>
      
    </>
  )
}

export default App
