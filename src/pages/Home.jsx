import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Input from "../components/Input";

const Home = () => {

    return (

        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
                   

            </div>
        </div>
    )
}

export default Home;