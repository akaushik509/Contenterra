import { useState } from 'react'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
