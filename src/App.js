import AboutUs from "./components/AboutUs/AboutUs";
import FourSteps from "./components/FourSteps/FourSteps";
import HomeHeader from "./components/Home/HomeHeader";
import ThreeColumns from "./components/ThreeColumns/ThreeColumns";


function App() {
  return (
    <div className="App">
      <HomeHeader />
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
    </div>
  );
}

export default App;
