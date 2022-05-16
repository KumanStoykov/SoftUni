import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="page-wrapper">
     <Header />

     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/register" element={<Register />}/>
       <Route path="/about" element={<About />}/>
     </Routes>

     <Footer />     
    </main>
  );
}

export default App;
