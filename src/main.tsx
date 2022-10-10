import React from 'react'
import ReactDOM from 'react-dom/client'
import Paths from './routes';
import { GlobalStyles } from "./components/UI/GlobalStyles"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Paths />
  </React.StrictMode>
)
