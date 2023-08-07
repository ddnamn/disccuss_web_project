import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';

import { fetchThreads } from '../redux/reducer/threadsSlice';



export default function ThreadPage() {

  const banchOfThreads= useSelector(store=>store.threads.threadsData)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchThreads())
  } ,[])

    const createDisccussHandler = ()=>{
      console.log('open createDisccuss')
    }

  // console.log(banchOfThreads)
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
          </div>
          <h1 className="text-[1.7rem] font-semibold mt-[20px]">Diskusi tersedia</h1>
        </header>
        {/* {LIST} */}
        <CardList threads={banchOfThreads}/>
      </div>

      <div className='z-10 absolute bg-green-300 right-0' onClick={createDisccussHandler}>
        ➕ create Disccuss     
      </div>
    </>
  );
}
