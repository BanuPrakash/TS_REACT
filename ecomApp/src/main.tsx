import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.tsx'

// React 18+ Fiber Architecture by default instead of Stack Architecture
createRoot(document.getElementById('root')!).render(<BrowserRouter><App /></BrowserRouter>)
