import React from 'react';
import './App.css';

export const App =({Valor,Restar,Sumar})=>(

    <div  style={{height:400,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{marginBottom:10}}>
            <button onClick={Sumar} style={{marginRight:5}}>Sumar</button>
            <button onClick={Restar}>Restar</button>
        </div>

        <text>Contador: {Valor}</text>

    </div>
);
