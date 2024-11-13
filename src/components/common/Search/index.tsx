import React from "react";
import "./style.css";

const Search = () => {
    return (
        <div className="search-wrapper relative h-[36px] bg-[#2C2C2C] w-[200px]">
            <div className="search-container absolute flex items-center justify-center bg-[#212121]">
                <div className="flex items-center w-[90%]">
                <img src="./assets/search.svg" alt="search" className="mr-1" />
                <input
                    className="bg-transparent outline-none border-none text-white px-2 w-[80%] text-base"
                    placeholder="Search"
                />
                </div>
            </div>
        </div>
    );
}

export default Search;