import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <div className='bg-gray-200 my-3 p-3 w-[25%] mx-auto'>
      {user ? (
        <>
        <p className='text-center text-md'>Welcome Back <span className='text-slate-800 capitalize'>{user.userName}</span></p>
        <p className='text-center text-md'>Your password is <span className='text-slate-800'>{user.password}</span> </p>
        <button className='block mx-auto p-2 my-2 border border-gray-400'  onClick={()=>setUser(null)}>Logout</button>
      </>
      ):(
        <p className='text-center text-md'>Please Login</p>
      )}
    </div>
  )
}

export default Profile;