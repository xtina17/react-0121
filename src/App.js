import React, {useState} from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Routes from "./components/Routes/routes"

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Routes/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
