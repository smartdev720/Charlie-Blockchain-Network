import React from "react";
import "./style.css";

interface ConnectWalletButtonProps {
    handleClick: () => void;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({handleClick}) => {
    return (
        <div className="connect-wallet-wrapper w-full h-[60px] bg-gradient relative">
            <div className="connect-wallet-wrapper inset-[3px] bg-white absolute">
                <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                    <button className="text-white connect-wallet-wrapper inset-[1px] absolute bg-gradient flex items-center justify-center" onClick={handleClick}>Connect wallet</button>
                </div>
            </div>
        </div>
    );
}

export default ConnectWalletButton;