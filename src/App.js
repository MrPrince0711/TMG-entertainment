
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/team' element = {<Team/>}/>
        <Route path='/portfolio' element = {<Portfolio/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
      </div>
      <Footer/>

    
    </div>
  );
}

export default App;
