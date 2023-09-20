import { useSelector } from 'react-redux'
// import {useNavigate} from 'react-router-dom'


export default function ProfilePage() {  
  const profileInfo = useSelector(store=>store.login.profileData)
  // const token = useSelector(store=>store.login.token )

  // const navigate = useNavigate()
  // if(!token){
  //   return navigate('login')
  // }


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
