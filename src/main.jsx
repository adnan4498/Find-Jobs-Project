import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { JobTypeProvider } from './utils/ContextApi/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <JobTypeProvider>
    <App />
  </JobTypeProvider>
)
