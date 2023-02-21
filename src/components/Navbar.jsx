import React from "react";
import human from '../img/human.png';

const Navbar = ()=>{

    return (
        <div className="navbar">
            <span className="logo"> Lama chat </span>
                <div>
                    <img src={human} alt='human'/>  
                    <span> John </span>
                    <button> Logout </button>
                </div>
        </div>
    )
}

export default Navbar;