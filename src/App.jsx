import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App

