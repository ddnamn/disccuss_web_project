import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login.page";
import LeaderboardsPage from "./pages/Leaderboards.page";
import ThreadPage from "./pages/Thread.page";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/Register.page";
import DetailThreadPage from "./pages/DetailThread.page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<ThreadPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="leaderboards" element={<LeaderboardsPage />} />
          <Route path="threads/:id" element={<DetailThreadPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
