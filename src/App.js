import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './components/Navigation';
import Projects from './components/projects/Projects';
import { Route, Routes} from 'react-router-dom';
import AccountHome from './components/projects/week1/AccountHome';
import GroceryHome from './components/projects/week2/GroceryHome';
import SandBoxHome from './components/projects/sandbox/SandBoxHome';
import BootCamp from './components/bootcamp/BootCamp';
import GroceryShopping from './components/projects/week2/GroceryShopping';
function App() {

  return (
    <div className="App">
      <Navigation />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/bootcamp' element={<BootCamp />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/account' element={<AccountHome />} />
          <Route path='/grocery' element={<GroceryHome />} />
          <Route path='/sandbox' element={<SandBoxHome />} />
          <Route path='/grocery-shop' element={<GroceryShopping />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
