import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../redux/reducer/profileSlice'

export default function ProfilePage() {
  const token = useSelector(store=>store.token.token)
  const profileInfo = useSelector(store=>store.profile)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(token)
    dispatch(fetchProfile(token))
  },[])
  
  return (
    <div className='m-auto h-[calc(100vh-96px)] flex flex-col justify-center items-center border-4 border-white'>
      <img src={profileInfo.avatar} alt="ProfileImage" />
      <h2>{profileInfo.name}</h2>
      <p>{profileInfo.email}</p>
    </div>
  )
}
