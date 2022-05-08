import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';

function App() {
  return (
    <div id="container">  
    <Header />

    <main id="site-content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
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
