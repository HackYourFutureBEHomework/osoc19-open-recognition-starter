import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
function App(props) {
    return (
        <div className="App" style={{ padding: "2vh" }}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;