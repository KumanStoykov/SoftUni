import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Details from "./components/Details";
import Catalog from "./components/Catalog";

function App() {
    return (

        <div id="box">

            <Header />

            <main id="main-content">
                <WelcomeWorld />
            </main>           
        </div>

    );
}

export default App;
