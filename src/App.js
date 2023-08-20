import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutService from './pages/AboutService';

// import './assets/css/scss/stylesheet.scss'



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/'  element={<Home/>} />
      <Route exact path='/about'  element={<About/>}  />    
      <Route path='/contact/about-service'  element={<AboutService/>}  />    
      <Route path='/contact'  element={<Contact/>}  />    
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
