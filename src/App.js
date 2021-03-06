import {BrowserRouter as Router, Route} from 'react-router-dom';
//CSS
import './assets/css/main.css'

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skils from "./components/Skils";
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Header/>
        <Route exact path ='/Mi_portafolio_2.0' component={Home}></Route>
        <Route exact path ='/projects' component={Projects}></Route>
        <Route exact path ='/skills' component={Skils}></Route>
        <Route exact path ='/info' component={Info}></Route>
        <Footer/>
      </Router>

  );
}

export default App;
