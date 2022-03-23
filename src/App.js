import React from "react";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    const usuario = prompt("Ingresa tu Nombre")
    return ( 
        <>
        <NavBar />
        <ItemListContainer id="principal" numero={random} nombre={usuario}/>
        </>
    )

};


export default App;