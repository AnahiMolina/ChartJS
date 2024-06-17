import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chartjs from './pages/Chartjs'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Chartjs />} />
      <Route path='/chartjs/:id' element={<Chartjs />} />
    </Routes>
  </BrowserRouter>
)
