import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App ">
      <div className="content-wrapper">
        <div className="side--body">
          <SideBar></SideBar>
        </div>
        <div className="navbar--body">
          <NavBar></NavBar>
        </div>
        <div className="content-block">
          <Body></Body>
        </div>
      </div>
    </div>
  );
}

export default App;
