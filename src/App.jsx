import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./pages/Login.page"
import LeaderboardsPage from "./pages/Leaderboards.page"
import ThreadPage from "./pages/Thread.page"
import Navbar from "./components/Navbar"
import RegisterPage from "./pages/Register.page"
// import { useSelector } from "react-redux"


function App() {
  // const listOfLeaderboard = useSelector((store)=>store.leaderboards.leaderboardsData)
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ThreadPage/>}/>
        <Route path='leaderboards' element={<LeaderboardsPage/>}/>
        {/* <Route path='leaderboards' element={<LeaderboardsPage setOfLeaderboards={listOfLeaderboard}/>}/> */}
        <Route path='login' element={< LoginPage/>}/>
        <Route path='register' element={< RegisterPage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
