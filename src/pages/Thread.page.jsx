import { useSelector,useDispatch } from "react-redux"
import { fetchThreads } from "../redux/threadsSlice"
import { useEffect } from "react"



export default function ThreadPage() {
  const listOfThreads = useSelector((store)=>store.threads.threadsData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchThreads())
  },[]) 

  return (
    <>
      <div className="w-2/3 m-auto bg-primary">asdas</div>
    </>
  );
}
