import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/home'))
const EleikoEquipmentPage = lazy(() => import('./pages/equipments/eleiko'))
const PowerBarEquipmentPage = lazy(
  () => import('./pages/equipments/powerliftingBar')
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/equipments/eleiko' element={<EleikoEquipmentPage />} />
      <Route
        path='/equipments/powerlifting-bars'
        element={<PowerBarEquipmentPage />}
      />
    </Routes>
  )
}

export default App
