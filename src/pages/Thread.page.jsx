<<<<<<<<< Temporary merge branch 1
import { useSelector,useDispatch } from "react-redux"
import { fetchThreads } from "../redux/threadsSlice"
import { useEffect } from "react"



export default function ThreadPage() {
  const listOfThreads = useSelector((store)=>store.threads.threadsData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchThreads())
  },[]) 

=========
>>>>>>>>> Temporary merge branch 2
  return (
    <>
      <div className="w-2/3 m-auto bg-slate-50">
        <h1 className="text-black">Thread Page</h1>
      </div>
    </>
  );
}
