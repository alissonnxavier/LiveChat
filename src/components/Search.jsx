import React from "react";
import human from '../img/human.png';

const Search = () => {

    return (
        <div className="search">
            <div className="searchForm">
                <input type='text' placeholder="Find a person"/>
            </div>
            <div className="userChat">
                <img src={human} alt='human'/>
                <div>
                    <span> Jane </span>
                </div>
            </div>
        </div>
    )
}

export default Search;