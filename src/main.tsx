import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Hello from './component/Hello.tsx'
import RtnText from './component/InputText.tsx'
import TodoList from './component/Todo.tsx'
import SForm from './component/form.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Hello />
    <RtnText />
    <TodoList />
    <SForm />
  </StrictMode>,
)
