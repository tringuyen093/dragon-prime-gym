import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  EQUIPMENT_ELEIKO_URL,
  EQUIPMENT_POWERLIFTING_BARS_URL,
  PRODUCT_COMBO_RACK_URL,
  TRAINING_GYM_URL,
  TRAINING_YOGA_URL,
  TRAINING_POWERLIFTING_URL,
  ABOUT_US_URL
} from '@/router/common'

const HomePage = lazy(() => import('./pages/home'))
const EleikoEquipmentPage = lazy(() => import('./pages/equipments/eleiko'))
const PowerBarEquipmentPage = lazy(() => import('./pages/equipments/powerliftingBar'))
const ComboRackPage = lazy(() => import('./pages/products/comboRack'))
const GymPage = lazy(() => import('./pages/training/gym'))
const YogaPage = lazy(() => import('./pages/training/yoga'))
const PowerliftingPage = lazy(() => import('./pages/training/powerlifting'))
const AboutUsPage = lazy(() => import('./pages/aboutUs'))

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path={EQUIPMENT_ELEIKO_URL} element={<EleikoEquipmentPage />} />
      <Route path={EQUIPMENT_POWERLIFTING_BARS_URL} element={<PowerBarEquipmentPage />} />
      <Route path={PRODUCT_COMBO_RACK_URL} element={<ComboRackPage />} />
      <Route path={TRAINING_GYM_URL} element={<GymPage />} />
      <Route path={TRAINING_YOGA_URL} element={<YogaPage />} />
      <Route path={TRAINING_POWERLIFTING_URL} element={<PowerliftingPage />} />
      <Route path={ABOUT_US_URL} element={<AboutUsPage />} />
    </Routes>
  )
}

export default App
