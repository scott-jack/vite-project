import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutApp from './AboutApp'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('about') as HTMLElement).render(
  <React.StrictMode>
    <AboutApp></AboutApp>
  </React.StrictMode>,
)