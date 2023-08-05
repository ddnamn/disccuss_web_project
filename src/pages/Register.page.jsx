import React from 'react'

export default function RegisterPage() {
  return (
    <>
    <div className='w-2/3 m-auto h-[calc(100vh-96px)]  flex flex-col justify-center'>

      {/* <form className='flex flex-col items-center h-52 -fit justify-evenly '>
        <div className='text-center'>📝 REGISTER</div>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs"
          required
          />
          <input
          type="text"
          placeholder="Type Email here"
          className="input input-bordered w-full max-w-xs"
          required
          />

          <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          required
          />
        <button className="w-80 h-9 bg-black rounded-lg ">register</button>
      </form> */}
       <div className='text-center'>📝 REGISTER</div>
      <form className="flex  flex-col  items-center h-52 justify-evenly ">
        
          <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full max-w-xs bg-based"
          required
          />
          <input
          type="email"
          placeholder="Type Email here"
          className="input input-bordered w-full max-w-xs bg-based"
          required
          />

          <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs  bg-based"
          required
          />
            <button className="w-80 h-9 bg-black rounded-lg ">register</button>
           
          </form>
          </div>
    </>
  )
}
