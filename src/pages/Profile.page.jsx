import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ProfilePage() {
   useSelector(store=>{})

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch()
  },[])
  return (
    <div className='m-auto'>
      <img src="" alt="ProfileImage" />
      <h2></h2>
      <p></p>
    </div>
  )
}
