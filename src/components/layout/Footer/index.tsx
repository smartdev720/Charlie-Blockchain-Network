import React from "react";
import "./style.css";
import SocialButtonGroup from "../../common/SocialButtonGroup";
import BuyCharlieButton from "../../common/BuyCharlieButton";

const Footer = () => {
    return (
        <div>
      {/* Desktop */}
      <div className="hidden 2xl:block xl:block lg:block md:hidden sm:hidden mt-52">
        <div className="footer-wrapper h-[72px] bg-[#444444] relative">
          <div className="w-full footer-container flex items-center justify-between px-4 absolute bg-[#1C1C1C]">
            <SocialButtonGroup />
            <div className="">
              <BuyCharlieButton />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="2xl:hidden xl:hidden lg:hidden md:block sm:block">
        <div className="footer-mobile-wrapper h-[72px] bg-[#444444] relative">
          <div className="w-full footer-mobile-container flex items-center justify-between px-4 absolute bg-[#1C1C1C]">
            <SocialButtonGroup />
            <div className="">
              <BuyCharlieButton />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Footer;