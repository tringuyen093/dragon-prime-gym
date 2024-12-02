import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  EQUIPMENT_ELEIKO_URL,
  EQUIPMENT_POWERLIFTING_BARS_URL,
  PRODUCT_COMBO_RACK_URL
} from '@/router/common'

const HomePage = lazy(() => import('./pages/home'))
const EleikoEquipmentPage = lazy(() => import('./pages/equipments/eleiko'))
const PowerBarEquipmentPage = lazy(
  () => import('./pages/equipments/powerliftingBar')
)
const ComboRackPage = lazy(
  () => import('./pages/products/comboRack')
)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path={EQUIPMENT_ELEIKO_URL} element={<EleikoEquipmentPage />} />
      <Route
        path={EQUIPMENT_POWERLIFTING_BARS_URL}
        element={<PowerBarEquipmentPage />}
      />
      <Route
        path={PRODUCT_COMBO_RACK_URL}
        element={<ComboRackPage />}
      />
    </Routes>
  )
}

export default App
