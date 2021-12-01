import './scss/_main.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from "./components/AboutUs/AboutUs";
import FourSteps from "./components/FourSteps/FourSteps";
import HomeHeader from "./components/Home/HomeHeader";
import Tabs from "./components/Tabs/Tabs";
import ThreeColumns from "./components/ThreeColumns/ThreeColumns";
import MakeAccount from './components/Register/MakeAccount';
import Login from './components/Register/Login'
import Contact from './components/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeHeader />
        <Routes>
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<MakeAccount />} />
        </Routes>
        <ThreeColumns />
        <FourSteps />
        <AboutUs />
        <Tabs />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
