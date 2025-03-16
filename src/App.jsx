import { useEffect, useState } from 'react'
import Home from './components/Home'
import Text from './components/Text'
import Loder from './components/Loader'
import './styles/app.css'

function App() {
  const [isLoadin, setIsLoadin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadin(false)
    }, 1500)
  }, [])


  return (
    <>
      {isLoadin && <Loder />}
      <div className='container'>

        <Home/>
        <Text/>

      </div>

    </>
  )
}

export default App
