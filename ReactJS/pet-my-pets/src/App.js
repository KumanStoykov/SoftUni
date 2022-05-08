import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import * as authServices from './services/authServices';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  const [user, setUser] = useState({ isAuthenticated: false, username: '' });

  useEffect(() => {
    let user = authServices.getUSer();

    setUser({
      isAuthenticated: Boolean(user),
      user: user
    });

  }, []);

  const onLogin = (username) => {
    setUser({
      isAuthenticated: true,
      user: username
    });
  };

  return (
    <div id="container">  
    <Header {...user}/>

    <main id="site-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login onLogin={onLogin}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-pets" element={<MyPets />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/petId" element={<Details />} />
        <Route path="/edit/:petId" element={<Edit />} />
      </Routes>

    </main>

    <footer id="site-footer">
        <p>@PetMyPet</p>
    </footer>

</div>
  );
}

export default App;
