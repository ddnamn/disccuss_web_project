
import RankingBoard from "../components/RankingBoard"


export default function LeaderboardsPage() {

  return (
    <>
     <div className=' flex flex-col w-8/12 m-auto '>
        
        <div className=' text-3xl flex  font-bold justify-center w-full p-4'>LeaderBoard</div>
      
        <div className='flex justify-around w-full '>
          <div className='text-3xl  box-content  font-bold  flex-1 flex justify-center ' >Pengguna</div>
          <div className='text-3xl  box-content   font-bold  flex-1 flex justify-center -mr-8'>Skor</div>
        </div>
      
        <RankingBoard/>
               
      </div>
    </>
  )
}
