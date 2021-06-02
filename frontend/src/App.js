import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from "./components/Footer/Footer";
import Player from './components/Player/Player';
import {StreamURL} from './components/Constants/Constants';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer/>
      </Router>
      <Player url = {StreamURL}/>
    </div>
    
  );
}

export default App;
