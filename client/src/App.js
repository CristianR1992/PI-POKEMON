
import { Routes , Route} from 'react-router-dom';
import LandindPage from './components/LandingPage/LandingPage';
import FormCreate from './components/FormCreate/FormCreate';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail.jsx';
import NavBar from './components/Nav/Nav';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<LandindPage/>}/>
        <Route exact path='/home' element= {<Home />}/>
        <Route path='/home/:id' element= {<> <NavBar /><Detail/></>}/>
        <Route path='/createPokemon' element= {<> <NavBar /><FormCreate/></>}/>
      </Routes>
    </div>
  );
}

export default App;
