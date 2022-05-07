import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld/WelcomeWorld';
import Create from './components/Create';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import Details from './components/Details';

function App() { 
    const isLogout = true  

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
                    <Route path="/games/:gameId" element={<Details />}/>
                    <Route path="/logout" element={
                        isLogout 
                        ? (<Navigate replace to="/"/>)
                        : ('')
                    } />
                    <Route path="*" element={<ErrorPage />}/>
                </Routes>
            </main>           
        </div>

    );
}

export default App;
