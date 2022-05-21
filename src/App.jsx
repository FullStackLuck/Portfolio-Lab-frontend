// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';


//Imported Pages 

import Home from './pages/Home';
import About  from './pages/About';
import Projects from './pages/Projects';

import './App.css';

function App() {
  const URL = "https://portfolio-prac-app.herokuapp.com/"
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path= "/" element ={<Home/>}/>
        <Route path= "/about" element = {<About URL={URL}/>}/>
        <Route path= "/projects" element = {<Projects URL={URL}/>}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
