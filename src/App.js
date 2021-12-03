import './scss/_main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeHeader from "./components/Home/HomeHeader";
import MakeAccount from './components/Register/MakeAccount';
import Login from './components/Register/Login'
// import NavBar from './components/NavBar/NavBar';
import Collection from './components/ButtonsLinks/Collection';
import GiveThings from './components/ButtonsLinks/GiveThings';
import NavBar from './components/NavBar/NavBar';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomeHeader />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<MakeAccount />} />
          <Route path="/oddaj-rzecy" element={<Collection />} />
          <Route path="/zbiorka" element={<GiveThings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
