import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Catalog from "./components/Catalog";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <Catalog />,
        '/create-game': <Create />,
        '/login': <Login />,
        '/register': <Register />,
    };

    const navigationChangeHandler = (path) => {
        setPage(path);
    };

    return (

        <div id="box">

            <Header 
                navigationChangeHandler={navigationChangeHandler}
            />

            <main id="main-content">
                { routes[page] || <h2> No Page Found!</h2> }
            </main>           
        </div>

    );
}

export default App;
