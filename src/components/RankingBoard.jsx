import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import {fetchLearderboards} from "../redux/reducer/leaderboardsSlice"



export default function RankingBoard() {


  const listOfLeaderboard = useSelector((store)=>store.leaderboards.leaderboardsData)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchLearderboards())
  },[]) 

  return (
   <ul>  
      {
      listOfLeaderboard.map(ranking=>
        <li  className="flex items-center m-4  lg:pl-30 xl:pl-40" key={ranking.user.id}>
            <div className="flex items-center flex-1">
                  <div className="avatar mr-2 ">
                     <div className="w-20 rounded-full">
                        <img src={ranking.user.avatar} alt="profileImage" />
                     </div>
                  </div>
                  
                  <p className="text-lg font-bold  ml-3">{ranking.user.name}</p>
            </div>

            <h3 className="text-2xl font-bold xl:pr-3 flex flex-1 justify-center">{ranking.score} </h3>
         </li>
      )
      }
   </ul>
  )
}
