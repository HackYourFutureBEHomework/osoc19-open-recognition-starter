import React from "react";
import Header from "./components/Header";
import Badge from "./components/Badge";
import Footer from "./components/Footer";


function App(props) {
    const userInfo = {
        first_name: 'Joe',
        last_name: 'Doe',
        email: "joe@gmail.com",
        profession: 'student'
    }
    return (
        
        <div className="App">
            <Header />
            <Badge userInfo={userInfo} />
            <Footer />
        </div>
    );
}

export default App;