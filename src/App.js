import './scss/_main.scss';
import AboutUs from "./components/AboutUs/AboutUs";
import FourSteps from "./components/FourSteps/FourSteps";
import HomeHeader from "./components/Home/HomeHeader";
import Tabs from "./components/Tabs/Tabs";
import ThreeColumns from "./components/ThreeColumns/ThreeColumns";



function App() {
  return (

    <div className="App">
      <HomeHeader />
      {/* <Switch>
        <Route path="/login" component={Login} exact />
      </Switch> */}
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <Tabs />
    </div>
  );
}

export default App;
