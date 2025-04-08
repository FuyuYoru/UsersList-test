import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/shared/config/styles/index.scss';
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(
  <App/>,
)
