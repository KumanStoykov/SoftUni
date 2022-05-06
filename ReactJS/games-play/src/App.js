import { useState } from 'react';

import Header from './components/Header';
import WelcomeWorld from './components/WelcomeWorld/WelcomeWorld';
import Create from './components/Create';
import Catalog from './components/Catalog/Catalog';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import Details from './components/Details';

function App() {
    const [page, setPage] = useState('/home');

    const navigationChangeHandler = (path) => {
        setPage(path);
    };

   

    const router = (path) => {
        let pathNames = path.split('/');

        let rootPath = pathNames[1];
        let argument = pathNames[2];

        const routes = {
            'home': <WelcomeWorld navigationChangeHandler={navigationChangeHandler}/>,
            'games': <Catalog navigationChangeHandler={navigationChangeHandler} />,
            'create-game': <Create />,
            'login': <Login />,
            'register': <Register />,
            'details': <Details id={argument} />,
        };

        return routes[rootPath];
    }

    return (

        <div id="box">

            <Header 
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                { router(page) || <ErrorPage /> }
            </main>           
        </div>

    );
}

export default App;
