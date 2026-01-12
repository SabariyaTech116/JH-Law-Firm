import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('main.jsx: execution started');
const root = document.getElementById('root');
console.log('main.jsx: root element:', root);

try {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('main.jsx: render called');
} catch (e) {
  console.error('main.jsx: render failed', e);
}
