import React from 'react'
import ReactDOM from 'react-dom/client'
import ProjectsApp from './ProjectsApp'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('projects') as HTMLElement).render(
  <React.StrictMode>
    <ProjectsApp></ProjectsApp>
  </React.StrictMode>,
)