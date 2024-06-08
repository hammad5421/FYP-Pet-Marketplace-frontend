import React from 'react'
import { BasicLayout } from '../../layouts'
import HeroSection from './HeroSectionOfAdopt'
import CreatePetListing from './CreateListingforAdoption'

const AddAdoptPets = () => {
  return (
    <div>
      <BasicLayout>
      <HeroSection/>
      <CreatePetListing/>
      </BasicLayout>
        
    </div>
  )
}

export default AddAdoptPets