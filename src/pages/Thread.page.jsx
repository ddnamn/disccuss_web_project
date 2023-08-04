<<<<<<< HEAD
import { useEffect } from 'react';
import { getLeaderboards, getThreads } from '../utils/getData';
import { useDispatch } from 'react-redux';

export default function ThreadPage() {
=======
import { useSelector,useDispatch } from "react-redux"
import { fetchThreads } from "../redux/threadsSlice"
import { useEffect } from "react"



export default function ThreadPage() {
  const listOfThreads = useSelector((store)=>store.threads.threadsData)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchThreads())
  },[]) 

>>>>>>> eda260c6dedbe90714c394baec290db91c2dc5c9
  return (
    <>
      <div className="w-2/3 m-auto bg-primary">asdas</div>
    </>
  );
}
