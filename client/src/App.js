import { Routes , Route} from 'react-router-dom';
import LandindPage from './components/LandingPage/LandingPage';
import FormCreate from './components/FormCreate/FormCreate';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail.jsx';
import NavBar from './components/Nav/Nav';

import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<LandindPage/>}/>
        <Route exact path='/login' element= {<Login />}/>
        <Route exact path='/registro' element= {<Register />}/>
        <Route exact path='/home' element= {<Home />}/>
        <Route path='/home/:id' element= {<> <NavBar /><Detail/></>}/>
        <Route path='/createPokemon' element= {<> <NavBar /><FormCreate/></>}/>
      </Routes>
    </div>
  );
}

export default App;
