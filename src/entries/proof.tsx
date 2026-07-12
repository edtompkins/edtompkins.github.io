import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Proof from '../pages/Proof'
import '../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Proof />
  </StrictMode>,
)
