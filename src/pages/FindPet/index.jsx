import React from 'react'
import { BasicLayout } from '../../layouts'
import PetList from './Findpet'

const FindPets = () => {
  return (
    <div>
              <BasicLayout>
              <PetList/>
              </BasicLayout>
    </div>
  )
}

export default FindPets