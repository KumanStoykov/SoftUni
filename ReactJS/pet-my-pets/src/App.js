import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from './contexts/authContext';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  const [user, setUser] = useState({
    _id: '',
    email: '',
    accessToken: ''
  });

  const onLogin = (data) => {
    setUser(data);

  };
  const onLogout = () => {
  };

  return (
    <AuthContext.Provider>
      <div id="container" >
        <Header  email={user.email}/>

        <main id="site-content">
          <Routes>
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/login" element={<Login onLogin={onLogin} />} />
            <Route path="/logout" element={<Logout onLogout={onLogout} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-pets" element={<MyPets />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/edit/:petId" element={<Edit />} />
          </Routes>

        </main>

        <footer id="site-footer">
          <p>@PetMyPet</p>
        </footer>

      </div>
    </AuthContext.Provider>
  );
}

export default App;
