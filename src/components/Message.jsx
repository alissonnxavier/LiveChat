import React from "react";
import human from '../img/human.png'

const Message = () => {

    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src={human} alt='human' />
                <span> Just now </span>
            </div>
            <div className="messageContent">
                <p> hello </p>
                <img src={human} alt='human' />



            </div>
        </div>

    );
}

export default Message;