import React from "react";
import can from '../img/video-camera.png';
import add from '../img/button.png';
import more from '../img/more.png';
import Messages from "./Messages";
import Input from "./Input";


const Chat = () => {

    return (

        <div className="chat">
            <div className="chatInfo">
                <span> Jane </span>
                <div className="chatIcons">
                    <img src={can} alt='movie'/>
                    <img src={add} alt='add'/>
                    <img src={more} alt='more'/>
                </div>
               
            </div>
            <Messages />
            <Input />
        </div>
        
    );
};

export default Chat;