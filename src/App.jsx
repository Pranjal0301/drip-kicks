import React from 'react'
import {Cart, Hero, Footer} from './components'
import {Sales} from './components'
import {Navbar} from './components'
import { heroapi, popularsales, toprateslaes, footerAPI } from './data/data.js'
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main>
      <Hero heroapi = {heroapi}/>
      <Sales endpoint={popularsales} ifExists />
      <Sales endpoint={toprateslaes} />
    </main>
    <Footer footerAPI={footerAPI} />
    </>
  )
}
 
export default App