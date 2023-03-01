import React from 'react'
import { useNavigate } from 'react-router-dom'


type User = {
    _id?: any;
    username: string;
    password:string;
    email:string;
    shopping:Array<any>
  }

function ProfileCard(user:User) {
const navigate = useNavigate()

  return (
    <>
      
      <button onClick={() => navigate(`/Profile/${user._id}`)}>
        <p>{user?.username}</p>
        PROFILEddddd</button>

    </>
  )
}

export default ProfileCard


