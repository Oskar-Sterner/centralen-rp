import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Rules from './components/Rules.tsx'
import Footer from './components/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Hero />
    <About />
    <Rules />
    <Footer />
  </React.StrictMode>,
)
