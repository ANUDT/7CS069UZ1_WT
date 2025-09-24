import { StrictMode } from 'react' // Corrected import statement
import { createRoot } from 'react-dom/client' // Corrected import statement
import './style.css' // Corrected file name from 'index.css' to 'style.css'
import App from './App.jsx' // Corrected file name from 'app.jsx' to 'App.jsx'

createRoot(document.getElementById('root')).render( // Corrected method chaining
  <StrictMode> // Corrected component name from "strictMode" to "StrictMode"
    <App /> // Corrected component name from "app" to "App"
  </StrictMode>, // Added missing comma
)
