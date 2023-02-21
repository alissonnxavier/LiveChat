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
            {/* <img src={human} alt='human' /> */} 
                <p> hello </p>
                

            </div>
        </div>

    );
}

export default Message;