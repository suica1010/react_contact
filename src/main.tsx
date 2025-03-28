import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hello from './component/Hello.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hello />
  </StrictMode>,
)
