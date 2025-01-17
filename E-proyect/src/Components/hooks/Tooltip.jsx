import { useState } from "react";

export const Tooltip = ({children, content }) => {
    
    const [showTooltip, setShowTooltip] = useState(false);  

    return( 
        <div className="relative" onMouseEnter = {() => setShowTooltip (true)} onMouseLeave= {() => setShowTooltip (false) }>
            {children} 
            {showTooltip && (<div className="absolute top-7 bg-gray-800 text-white text-sm rounded-md p-3 shadow-md border border-solid">{content} <p className="text-center text-[7px] bg-green-800 rounded-sm">Click me!</p> </div>)}
        </div>
    );
};