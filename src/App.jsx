import { useState } from 'react'
import { ALLRoutes } from './routes/ALLRoutes'
import { Header } from './components'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header />
    <ALLRoutes />
    <Footer/>
    </>
  )
}

export default App
