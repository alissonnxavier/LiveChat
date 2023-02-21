import React from "react";
import human from '../img/human.png';

const Chats = ()=>{

    return (
        <div className="chats">
            <div className="userChat">
                <img src={human} alt="human"/>
                <div className="userChatInfo">
                    <span> Jane </span>
                    <p> Hello </p>
                </div>
            </div>
        </div>
    )
}

export default Chats;