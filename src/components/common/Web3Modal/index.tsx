import React, { useState } from "react";
import Modal from "../Modal";
import { Wallets } from "../../../constant/wallets";
import WalletCard from "../WalletCard";
import ConnectWalletButton from "../ConnectWalletButton";

interface Web3ModalProps {
    web3modal: boolean;
    setWeb3Modal: (value: boolean) => void;
}

const Web3Modal: React.FC<Web3ModalProps> = ({web3modal, setWeb3Modal}) => {
    const [selected, setSelected] = useState<string>("");

    const handleConnectWallet = () => {

    }

    return (
        <Modal isOpen={web3modal} onClose={() => setWeb3Modal(false)}>
            <div className="z-20 p-[32px]">
                <h1 className="font-semibold text-2xl text-white">Connect wallet</h1>
                <p className="text-md font-normal text-white mt-2">Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely. Never share them with anyone.</p>
                <div className="grid grid-cols-4 gap-1 mt-6">
                    {Wallets.map((wallet, index) => (
                        <WalletCard logo={wallet.src} name={wallet.name} key={index} selected={selected} setSelected={setSelected} />
                    ))}
                </div>
                <div className="mt-4">
                    <ConnectWalletButton handleClick={handleConnectWallet} />
                </div>
            </div>
        </Modal>
    );
}

export default Web3Modal;