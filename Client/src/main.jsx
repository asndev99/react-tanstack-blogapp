import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { ToastContainer, toast } from 'react-toastify';

import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query"


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppRoutes />
          <ToastContainer position='top-right' />
        </Router>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>,
)
