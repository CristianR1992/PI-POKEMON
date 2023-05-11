import './App.css';
import { Routes , Route} from 'react-router-dom';
import LandindPage from './components/LandingPage/LandingPage';
import FormCreate from './components/FormCreate/FormCreate';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= {<LandindPage/>}/>
        <Route path='/createPokemon' element= {<FormCreate/>}/>
       
        <Route />
      </Routes>
    </div>
  );
}

export default App;
