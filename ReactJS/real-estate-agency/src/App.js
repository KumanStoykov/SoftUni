import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ApartmentsForRecent from './components/ApartmensForRecent/ApartmentsForRecent';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="site-wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/apartment-for-recent" element={<ApartmentsForRecent />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
