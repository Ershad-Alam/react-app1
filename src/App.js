import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/about'  element={<About/>}  />    
      <Route path='/contact'  element={<Contact/>}  />    
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
