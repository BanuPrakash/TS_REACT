import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.tsx'
import CartContextProvider from './context/CartContextProvider.tsx';

// React 18+ Fiber Architecture by default instead of Stack Architecture
createRoot(document.getElementById('root')!).render(
        <BrowserRouter>
        <CartContextProvider>
            <App />
        </CartContextProvider>
        </BrowserRouter>)
