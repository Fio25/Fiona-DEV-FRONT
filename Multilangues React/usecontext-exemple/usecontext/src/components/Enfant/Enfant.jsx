import React, { useContext } from 'react';
import {monContexte} from '../../context/ColorContext';
import './Enfant.css'

export default function Enfant()  {
    const {bgColor, modifyColor} = useContext(monContexte);
   
    return (
        <div className={bgColor}>
            hello enfant
            <button onClick={()=>modifyColor("green")} >Change Color</button>
        </div>
    );
};