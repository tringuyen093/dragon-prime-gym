import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/home'))
const EquipmentPage = lazy(() => import('./pages/equipment'))

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/equipments' element={<EquipmentPage />} />
    </Routes>
  )
}

export default App
