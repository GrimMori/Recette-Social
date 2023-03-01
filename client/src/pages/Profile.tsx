import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getUserRequest } from '../api/profile.api'
import { getUsersRequest } from '../api/users.api'
import Layout from '../partials/Layout'
import ProfileCard from '../partials/ProfileCard'
import RecetteDetail from './RecetteDetail'
import RecetteListPage from './RecetteList'
import SocialPage from './SocialPage'

type User = {
  _id?: any;
  username: string;
  password:string;
  email:string;
  shopping:Array<any>
}

function Profile() {

  const [user, setUsers] = useState<User>()

  const params = useParams ()
  console.log(params)
  useEffect(() => {

    const loadUser = async () => {
      const userProfile = await getUserRequest(params.id)
      setUsers(userProfile.data)
      console.log(userProfile)
    }
    loadUser()

  }, [])

  return (
    <>
    <div className='profile'>

    <img src={require('../assets/profile.png')} alt="mock image" />
      <h1>Profile Picture  </h1>
      <div className='profile-h1'>
      <h3>{
        user?.username
      }
      </h3>
      <h4>{user?.email}</h4>
      </div>
    </div>
    </>
  )
}

export default Profile
