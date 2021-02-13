import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dataRepository from "./DataRepository";
import Home from "./Home";
import Nav from "./Navbar";
import About from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
function App() {
  return (
    <div className="app">
      {/* <Router>
        <Nav />
        <div className="app__body">
          <Switch>
            <Route path="/">
              <Home about={dataRepository.about} />
            </Route>
          </Switch>
        </div>
      </Router> */}
      <Nav />
      <Home about={dataRepository.about} />

      <About about={dataRepository.about} />
      {/* <Projects /> */}
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
