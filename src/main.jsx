import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider store={store}>
    <QueryClientProvider client={queryClient}>
  <BrowserRouter>  <React.StrictMode>
  <App />
</React.StrictMode></BrowserRouter>
<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  
  </AuthProvider>
,
)
