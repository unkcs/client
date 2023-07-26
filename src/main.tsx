import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from "./global/AuthContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
      <App />
)

postMessage({ payload: 'removeLoading' }, '*')
