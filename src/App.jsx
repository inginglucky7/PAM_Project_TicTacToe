import { useState } from 'react'
import './App.css'
import Testcomp from "./components/testcomp.jsx"
import LoginPage from "./components/LoginPage.jsx"
import RegisterPage from "./components/RegisterPage.jsx"
import HowToPlayPage from "./components/HowToPlayPage.jsx"
import SettingsPage from "./components/SettingsPage.jsx"
import ProfilePage from "./components/Profile.jsx"
import MainMenuPage from "./components/MainMenuPage.jsx"
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <div>
          <Routes>
            <Route path="/" exact element={<Testcomp/>}/>
            <Route path="/loginpage" element={<LoginPage/>}/>
            <Route path="/registerpage" element={<RegisterPage/>}/>
            <Route path="/howtoplaypage" element={<HowToPlayPage/>}/>
            <Route path="/settingspage" element={<SettingsPage/>}/>
            <Route path="/profilepage" element={<ProfilePage/>}/>
            <Route path="/mainmenupage" element={<MainMenuPage/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default App
