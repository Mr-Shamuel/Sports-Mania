
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home';
import League from './Components/League/League';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NotMatch from './Components/NotMatch/NotMatch';
import About from './Components/About/About';
// import Team from './Components/Team/Team';

function App() {
    return ( <div className = "App" >

      {/* <ul>
        <li>
          <a  href="/home">HOME</a>
          <br/>
          <a href="/league">League</a>
        </li>
      </ul>
        
   */}
        
        <BrowserRouter>
    <Routes>
     <Route  path = "/" element={<Home/>}></Route>
     <Route  path = "/home" element={<Home/>}></Route>

     <Route path = "/league" element={<League/>}></Route>
     <Route path="/about" element={<About/>}></Route>
    
     <Route path = "/league/:idLeague" element={<TeamDetails/>}></Route>
     <Route path = "*" element={<NotMatch/>}></Route>
     
    </Routes>
  </BrowserRouter>
         
    
        </div>
    );
}

export default App;