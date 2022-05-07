import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld/WelcomeWorld';
import Create from './components/Create';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import Details from './components/Details';

function App() {    

    return (

        <div id="box">

            <Header />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<WelcomeWorld />}/>
                    <Route path="/games" element={<Catalog />}/>
                    <Route path="/create-game" element={<Create />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </main>           
        </div>

    );
}

export default App;
