
import RankingBoard from "../components/RankingBoard"


export default function LeaderboardsPage() {

  return (
    <>
     <div className='w-2/3 m-auto '>
        <div className=' text-xl flex  font-bold justify-center'>LeaderBoard</div>
        <div>
          <div className='flex justify-around '>
            <div className='box-content  font-bold  flex-1 flex justify-center ' >Pengguna</div>
            <div className='box-content   font-bold  flex-1 flex justify-center -mr-8'>Skor</div>
          </div>
        </div>
          <RankingBoard/>
               
      </div>
    </>
  )
}
