import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const style = {
  link: "text-base font-normal z-10 hover:bg-gradient-to-r hover:from-[#ce89ca] hover:via-[#5885BF] hover:via-[#7258DF] hover:to-[#75eea3] hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-in-out "
};

const NavBar = () => {
  const [active, setActive] = useState<string>("Swap");
  const handleActive = (value: string) => setActive(value);

    return (
      <header className="w-full flex flex-row gap-2">
        <nav className="basis-5/6 nav-wrapper relative h-[60px] bg-[#444444]">
          <div className="flex items-center justify-between nav-container absolute bg-[#1C1C1C] px-5">
            <div className="flex flex-row items-center justify-center gap-20">
              <h3 className="gradient-text font-semibold text-2xl">Logo</h3>
              <Link to="/swap" className={`${style.link} ${active === "swap" ? "gradient-text" : "text-white"}`}
                onClick={() => handleActive("swap")}
              >Swap</Link>
             <Link 
                to="/staking" 
                className={`${style.link} ${active === "staking" ? "gradient-text" : "text-white"}`} 
                onClick={() => handleActive("staking")}
              >
                Staking
              </Link>
              <Link to="/marketplace" className={`${style.link} ${active === "marketplace" ? "gradient-text" : "text-white"}`}
                onClick={() => handleActive("marketplace")}
              >Marketplace</Link>
            </div>
          </div>
        </nav>
        <div className="basis-1/6">
          <div className="connect-wrapper w-full h-[60px] bg-gradient relative">
            <div className="connect-container bg-white absolute">
              <button className="text-white absolute bg-gradient flex items-center justify-center">Connect wallet</button>
            </div>
          </div>
        </div>
      </header>
    );
}

export default NavBar