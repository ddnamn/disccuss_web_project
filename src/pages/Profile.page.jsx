import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchProfile } from '../redux/reducer/profileSlice'

export default function ProfilePage() {
  // const token = useSelector(store=>store.token.token)
  const profileInfo = useSelector(store=>store.login.profileData)
  return (
    <div className='m-auto h-[calc(100vh-96px)] flex flex-col justify-center items-center gap-2'>

      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={profileInfo.avatar} alt="ProfileImage" />
        </div>
      </div>
      <h2 className='font-bold text-xl'>{profileInfo.name}</h2>
      <p>{profileInfo.email}</p>
    </div>
  )
}
