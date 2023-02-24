import React, { createContext, useState } from 'react';
export const monContexte = createContext();

export default function ColorContext(props){

    const [bgColor, setBgColor] = useState("red");   
    const modifyColor = (newColor) => {
        setBgColor(newColor)
    }
    return (
        <monContexte.Provider value={{bgColor, modifyColor}}>
            {props.children}
        </monContexte.Provider>
    );
}