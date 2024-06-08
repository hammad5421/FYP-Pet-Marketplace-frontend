import React from 'react'
import CreateListing from './CreateListing.jsx'
import { BasicLayout } from '../../layouts'
import HeroSection from './HeroSection.jsx'


const CreateListings = () => {
  return (
    <div>
        <BasicLayout>
          <HeroSection/>
        <CreateListing/>
    </BasicLayout>
    
    </div>
  )
}

export default CreateListings