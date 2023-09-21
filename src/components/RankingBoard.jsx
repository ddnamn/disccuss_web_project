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
   <ul className="flex justify-between flex-col flex-1 ">  
      {
      listOfLeaderboard.map(ranking=>
        <li  className="flex justify-around items-center p-2  pl-64 m-1 flex-1" key={ranking.user.id}>
            <div className="flex items-center flex-1 ">
                  <div className="avatar mr-2">
                     <div className="w-20 rounded-full">
                        <img src={ranking.user.avatar} alt="profileImage" />
                     </div>
                  </div>
                  
                  <p className="text-2xl font-bold  ml-3">{ranking.user.name}</p>
            </div>

            <h3 className="text-2xl font-bold flex-1 text-center w-4 flex-1">{ranking.score} </h3>
         </li>
      )
      }
   </ul>
  )
}
