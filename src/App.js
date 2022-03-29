import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartWidget } from "./components/CartWidget";

const App = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    const usuario = "Milton"

    return ( 
        <>
        <NavBar>
            <CartWidget />
        </NavBar>
        <ItemListContainer id="principal" numero={random} nombre={usuario}/>
        </>
    )

};


export default App;