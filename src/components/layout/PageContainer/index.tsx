import React from "react";

interface PageContainerProps {
    children: React.ReactNode
}

const PageContainer: React.FC<PageContainerProps> = ({children}) => {
    return (
        <div className="w-[80%] mx-auto mt-20">
            {children}
        </div>
    );
}

export default PageContainer