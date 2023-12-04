import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './rest.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { BasketProvider } from './contexts/BasketContext.jsx'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(  
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <AuthProvider>
        <BasketProvider>
          <App /> 
        </BasketProvider>
      </AuthProvider> 
    </ChakraProvider>
  </QueryClientProvider>
    

)
