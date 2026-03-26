import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

// const queryClient = new QueryClient({
//   defaultOptions: {queries: {staleTime: 1000 * 60 * 5} }
// });

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools/>
  </QueryClientProvider>
  
  ,
)
