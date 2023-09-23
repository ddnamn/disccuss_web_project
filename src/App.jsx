import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./pages/Login.page"
import LeaderboardsPage from "./pages/Leaderboards.page"
import ThreadListPage from "./pages/ThreadList.page"
import Navbar from "./components/Navbar"
import RegisterPage from "./pages/Register.page"
import ProfilePage from './pages/Profile.page'
// import NewThreadForm from "./pages/NewThreadForm.page"

function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ThreadListPage/>}/>
        <Route path='leaderboards' element={<LeaderboardsPage/>}/>
        <Route path='login' element={< LoginPage/>}/>
        <Route path='register' element={< RegisterPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        {/* <Route path='createThread' element={<NewThreadForm/>}/> */}
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
