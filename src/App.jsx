import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginPage from "./pages/Login.page"
import LeaderboardsPage from "./pages/Leaderboards.page"
import ThreadListPage from "./pages/ThreadList.page"
import Navbar from "./components/Navbar"
import RegisterPage from "./pages/Register.page"
import ProfilePage from './pages/Profile.page'
import CreateDiscussPage from "./pages/CreateDiscuss.page"

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
        <Route path='discuss' element={<CreateDiscussPage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
