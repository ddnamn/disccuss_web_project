import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Thread from '../components/Thread';

import { TbPencilPlus } from 'react-icons/tb';

import {fetchThreads} from '../redux/reducer/threadsSlice'



export default function ThreadListPage() {

  // const createDisccussHandler = ()=>{
  //   console.log('open createDisccuss')
  // }
 
  const bunchOfThread = useSelector((store)=>store.threads.threadsData)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchThreads())
  },[])

  return (
    <>
      <div className="threads__container w-2/3 m-auto bg-primary text-transcript py-[1rem]">
        {/* HEADER */}
        <header className="threads__header p-[10px] font-medium">
          <h2 className="text-sm mb-[15px]">Kategori Popular</h2>
          <div className="category-container flex gap-[15px] text-[0.9rem]">
            <button className="bg-transparent border-solid border-transcript border-[1.5px] text-inherit py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #cewek
            </button>
            <button className="bg-transparent border-solid border-transcript border-[1.5px] text-inherit py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #ewe
            </button>
            <button className="bg-transparent border-solid border-transcript border-[1.5px] text-inherit  py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #enaklah
            </button>
          </div>
          <h1 className="text-[1.7rem] font-semibold mt-[20px]">Diskusi tersedia</h1>
        </header>
        {/* {LIST} */}
        {
          bunchOfThread.map(thread=><Thread key={thread.id} {...thread} />)
        }
        {/* <CardList threads={threads} /> */}
      </div>

      <button className="add-button fixed bottom-[3rem] right-[3rem] flex justify-center items-center bg-transcript p-1 rounded-[30%] hover:scale-[1.1] duration-[0.2s] ease">
        <TbPencilPlus className="text-[2.25rem] text-primary" id="pencil" />
      </button>
    </>
  );
}
