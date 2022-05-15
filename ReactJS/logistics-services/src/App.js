import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <main className="site-wrapper">
     <Header />

     <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/login" element={<Login />}/>
     </Routes>
     
    </main>
  );
}

export default App;
