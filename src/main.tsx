import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BudgetProvider } from './context/BudgetContext.tsx'
import { ShowModalProvider } from './context/ShowModalContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BudgetProvider>
      <ShowModalProvider>
        <App />
      </ShowModalProvider>
    </BudgetProvider>
  </React.StrictMode>,
)
