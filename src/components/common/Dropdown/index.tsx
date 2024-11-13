import React, { useState } from "react";
import "./style.css";

interface DropdownProps {
    menus: string[];
}

const Dropdown: React.FC<DropdownProps> = ({menus}) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="w-[200px] relative">
            <div className="dropdown-wrapper cursor-pointer relative bg-[#2C2C2C] w-full h-[36px]" onClick={() => setOpen(!open)}>
                <div className="dropdown-container absolute flex items-center justify-between bg-[#212121] px-4">
                    <span className="text-base font-normal text-white">{menus.length > 0 ? menus[0] : "Select"}</span>
                    <img src="./assets/narrow.svg" alt="narrow" className={`absolute right-4 transform transition-transform duration-300 ${
                            open ? "rotate-180" : ""}`}/>
                </div>
            </div>
            <div className={`flex flex-col absolute w-[200px] z-50 items-center mt-1 bg-[#212121] justify-center ${open ? "block" : "hidden"}`}>
                {menus.map((menu, index) => (
                    <span key={index} className="text-white text-base w-full text-center transition-all duration-300 ease-in-out font-normal py-2 cursor-pointer block hover:bg-[#2C2C2C]">{menu}</span>
                ))}
            </div>
        </div>
      
    );
}

export default Dropdown;