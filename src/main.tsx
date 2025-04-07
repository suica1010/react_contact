import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ApiGet from './component/getApi.tsx'
import SpringGet from './component/spring_contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SpringGet />
  </StrictMode>,
)
