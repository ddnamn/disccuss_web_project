import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../components/CardList';

import { TbPencilPlus, TbPlus } from 'react-icons/tb';



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
      <div className="threads__container max-w-[800px] w-[100%] m-auto bg-primary text-transcript py-[1rem]">
        {/* HEADER */}
        <header className="threads__header p-[10px] font-medium">
          <h2 className="text-sm mb-[8px]">Kategori Popular</h2>
          <div className="category-container flex gap-[15px] text-[0.75rem]">
            <button className="bg-transparent border-solid border-transcript border-[1.35px] text-inherit py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #cewek
            </button>
          </div>
          <h1 className="text-[1.7rem] font-bold mt-[20px]">Diskusi tersedia</h1>
        </header>
        {/* {LIST} */}
        <CardList threads={banchOfThreads}/>

        <button className="add-button fixed bottom-[3rem] right-[3rem] flex justify-center items-center bg-transcript p-1 rounded-[30%] hover:scale-[1.1] duration-[0.2s] ease">
          <TbPencilPlus className="text-[2.25rem] text-primary" id="pencil" />
        </button>
      </div>

      
      

    </>
  );
}
