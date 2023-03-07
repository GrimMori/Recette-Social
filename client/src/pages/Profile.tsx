import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getUserRequest } from '../api/profile.api'
import "./styles/Profile.css"

type User = {
  _id?: any;
  username: string;
  password:string;
  email:string;
  shopping:Array<any>
}

type Props = {
  onLogOut: ()=>void;
}

export const onLogOut = ()=>{
  sessionStorage.removeItem('access_token');
  window.location.reload();
}

function Profile() {
  const onLogOut = ()=>{
    sessionStorage.removeItem('access_token');
    navigate("/");
    window.location.reload();
  }
  const navigate = useNavigate();
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
    <div className="profile-main">
    <div className='profile'>
      <img src={require('../assets/profile.png')} alt="mock image" />
      <div className='profile-h1'>
        <h3>{user?.username}</h3>
        <h4>{user?.email}</h4>
      </div>
    <button className="login-submit-button" onClick={onLogOut}>Log Out</button>
    </div>
    </div>
  )
}

export default Profile
