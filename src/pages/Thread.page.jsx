import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CardList from '../components/CardList';

import { threads } from '../utils/local-data'; // data-local (arrayOfObject)

export default function ThreadPage() {
  return (
    <>
      <div className="threads__container max-w-[700px] w-[100%] m-auto bg-primary text-transcript py-[1rem]">
        {/* HEADER */}
        <header className="threads__header p-[10px] font-medium">
          <h2 className="text-sm mb-[8px]">Kategori Popular</h2>
          <div className="category-container flex gap-[15px] text-[0.75rem]">
            <button className="bg-transparent border-solid border-transcript border-[1.35px] text-inherit py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #cewek
            </button>
            <button className="bg-transparent border-solid border-transcript border-[1.35px] text-inherit py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #ewe
            </button>
            <button className="bg-transparent border-solid border-transcript border-[1.35px] text-inherit  py-[3px] px-[7px] rounded-[7px] cursor-pointer">
              #enaklah
            </button>
          </div>
          <h1 className="text-[1.7rem] font-bold mt-[20px]">Diskusi tersedia</h1>
        </header>
        {/* {LIST} */}
        <CardList threads={threads} />
      </div>
    </>
  );
}
