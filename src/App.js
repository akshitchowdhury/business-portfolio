import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";

import WebDev from "./components/Services/Inno Services/WebDev";
import WebDesign from "./components/Services/Inno Services/WebDesign";
import AppDev from "./components/Services/Inno Services/Appdev";


function App() {
  return (
    <div className="App overflow-clip ">
    
    <Router>
    <Navbar/>
      <Routes>
      
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/services" element= {<Services/>}/>
      <Route path="/appdev" element={<AppDev />} />
      <Route path="/webdesign" element={<WebDesign />} /> 
          <Route path="/webdev" element={<WebDev />} /> 
      <Route path="/contact" element= {<Contact/>}/>
      
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
