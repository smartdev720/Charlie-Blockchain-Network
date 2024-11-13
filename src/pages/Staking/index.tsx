import React from "react";
import "./style.css";
import Switch from "../../components/common/Switch";
import Toggle from "../../components/common/Toggle";
import Search from "../../components/common/Search";
import Dropdown from "../../components/common/Dropdown";
import StakingCard from "../../components/common/StakingCard";

const infos = [
    { key: "APR", value: "379,777,060.43%" },
    { key: "Earn", value: "PHCF" },
    { key: "Deposit Fee", value: "3%" },
    { key: "Harvest Lockup", value: "8 Hours" },
];


const Staking = () => {
    return (
        <div className="w-full">
            {/* Title bar */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white text-center font-semibold">Farms</h1>
                <p className="text-base font-normal text-white/50 mt-2">Stake your LP Token to earn CHARLIE</p>
            </div>
            {/* Filter bar */}
            <div className="filter-wrapper relative bg-[#444444] h-[72px] top-10">
                <div className="filter-container flex flex-row items-center justify-between absolute bg-[#1C1C1C] px-5">
                    <div className="flex items-center justify-between basis-1/3">
                        <div className="flex flex-row items-center justify-between gap-4">
                            <span className="text-white text-base font-normal">Staked only</span>
                            <Switch />
                        </div>
                        <div>
                            <Toggle tab1="Active" tab2="Liquidity" />
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 items-center justify-between basis-1/3">
                        <span></span>
                        <Search />
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between px-5 mt-[-13px]">
                <div className=""></div>
                <div className="flex flex-row gap-4 items-center justify-between">
                    <Dropdown menus={["APR", "Multiplier", "Earned", "Liquidity", "Fees"]} />
                    <span className="w-[200px]"></span>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <StakingCard items={infos} />
                <StakingCard items={infos} />
                <StakingCard items={infos} />
                <StakingCard items={infos} />
                <StakingCard items={infos} />
                <StakingCard items={infos} />
            </div>
        </div>
    );
}

export default Staking;