import  {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchRegisterData} from '../redux/reducer/registerSlice'
// import { useNavigate } from 'react-router-dom'


export default function RegisterPage() {
  const [name,setName]=useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  // const registerInfo=  useSelector(store=>store.register)
  const dispatch=useDispatch()
  // const navigate=useNavigate()

  const registerButtonHandler= (e)=>{
    e.preventDefault()
    const data = {name,email,password}
    dispatch(fetchRegisterData(data))
  }

  return (
    <>
    <div className='w-2/3 m-auto h-[calc(100vh-96px)]  flex flex-col justify-center'>
       <div className='text-center'>📝 REGISTER</div>
      <form className="flex  flex-col  items-center h-52 justify-evenly ">
        
          <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs bg-based"
          required
          onChange={e=>setName(e.target.value)}/>
          <input
          type="email"
          placeholder="Type Email here"
          className="input input-bordered w-full max-w-xs bg-based"
          required
          onChange={e=>setEmail(e.target.value)}
          />

          <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs  bg-based"
          required
          onChange={e=>setPassword(e.target.password)}
          />
            <button className="w-80 h-9 bg-black rounded-lg " onClick={registerButtonHandler}>register</button>
           
          </form>
          </div>
    </>
  )
}
