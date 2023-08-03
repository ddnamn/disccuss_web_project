import React from 'react'

export default function LoginPage() {
  return (
    <>
    <div className='w-2/3 m-auto h-[calc(100vh-96px)] flex  '> 
      <div className='flex flex-col m-auto'>
        <h1 className=' text-center'>✏️ LOGIN</h1>
        <form className='flex  flex-col  items-center h-52 justify-evenly '>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
          <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
          <button className="w-80 h-9 bg-black rounded-lg ">Wide</button>
        </form>
      </div>
    </div>

    

   
    </>
  )
}
