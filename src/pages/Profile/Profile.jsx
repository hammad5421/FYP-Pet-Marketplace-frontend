import React from 'react'
import { useContext } from 'react'
import { Context } from '../../App'
import Loader from '../../components/Loader'

const Profile = () => {
    const {isAuthenticated, loading ,user}= useContext(Context)
    console.log(user)
  return (
    
        <div>
       <h1>{user?.full_name}</h1>
      <h1>{user?.email}</h1> 
      </div>
    
  )
}

export default Profile
