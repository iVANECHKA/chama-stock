import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/screens/Home/Home'
import Layout from './components/layout/Layout'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>,
)
