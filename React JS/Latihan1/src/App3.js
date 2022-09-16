import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import "./style/landingPage.css";

const App3 = () => {
  return (
    <div>
      <div className="background">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>
    </div>
  );
};
export default App3;
