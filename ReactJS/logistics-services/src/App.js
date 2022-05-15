import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <main className="site-wrapper">
     <Header />

     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/register" element={<Register />}/>
     </Routes>
     
    </main>
  );
}

export default App;
