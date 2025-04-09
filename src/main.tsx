import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SpringGet from './component/spring_contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpringGet />
  </StrictMode>,
)
