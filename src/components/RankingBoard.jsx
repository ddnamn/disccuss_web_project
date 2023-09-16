import { useSelector } from "react-redux"


export default function RankingBoard({data}) {
  const listOfLeaderboard = useSelector((store)=>store.leaderboards.leaderboardsData)

  return (
   <ul>
      {/* {listOfLeaderboard.map(ranking=><RankingBoard data={ranking}/>)} */}

      <li  className="flex justify-around items-center p-2">
         
         <div className="flex items-center flex-1 justify-start ">
               <div className="avatar mr-2">
                  <div className="w-20 rounded-full">
                     <img src={data.user.avatar} alt="profileImage" />
                  </div>
               </div>
               
               <text className="text-2xl font-bold  ml-4">{data.user.name}</text>
         </div>

         <h3 className="text-2xl font-bold   flex-1 text-center -mr-8">{data.score} </h3>
      </li>
   </ul>
  )
}
