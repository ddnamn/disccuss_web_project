
import RankingBoard from "../components/RankingBoard"


export default function LeaderboardsPage() {

  return (
    <>
     <div className=' flex flex-col w-10/12 m-auto '>
        
        <div className=' text-xl flex  font-bold justify-center w-full pl-28 p-4'>LeaderBoard</div>
      
        <div className='flex justify-around w-full pl-36'>
          <div className='box-content  font-bold  flex-1 flex justify-center ' >Pengguna</div>
          <div className='box-content   font-bold  flex-1 flex justify-center -mr-8'>Skor</div>
        </div>
      
        <RankingBoard/>
               
      </div>
    </>
  )
}
