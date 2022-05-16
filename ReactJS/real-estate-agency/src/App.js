import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ApartmentsForRecent from './components/ApartmentsForRecent/ApartmentsForRecent';
import Create from './components/Create/Create';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Search from './components/Search/Search';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="site-wrapper">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/apartment-for-recent" element={<ApartmentsForRecent />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/details/:id" element={<Details />}/>          
          <Route path="/edit/:id" element={<Edit />}/>          
          <Route path="/search" element={<Search />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
