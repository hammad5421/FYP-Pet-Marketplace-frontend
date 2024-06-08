import React from 'react'
import HealthRecomendation from './HealthRecomendations'
import { BasicLayout } from '../../layouts'
import HeroSection from './HeroSection'


const HealthRecomendations = () => {
  return (
    <div>
      <BasicLayout>
        <HeroSection/>
      <HealthRecomendation/>
      </BasicLayout>
    </div>
  )
}

export default HealthRecomendations
