import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Layout/Root'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
