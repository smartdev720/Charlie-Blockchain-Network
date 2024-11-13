import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div className="bg-center bg-contain bg-no-repeat h-[1599px] py-10 overflow-hidden"
        style={{background: "url('./assets/bg.svg')", backgroundColor: "black"}}
      >
        <div className="w-[80%] mx-auto">
          {children}
        </div>
      </div>
    );
}

export default Container;