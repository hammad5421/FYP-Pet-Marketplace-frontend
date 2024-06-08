import React from 'react'
import BreedIdentification from './BreedIdentification'
import { BasicLayout } from '../../layouts'
import HeroSection from './HeroSection'


const BreedIdentifications = () => {
  return (
    <div>
      <BasicLayout>
        <HeroSection/>
        <BreedIdentification/>
      </BasicLayout>
    </div>
  )
}

export default BreedIdentifications
