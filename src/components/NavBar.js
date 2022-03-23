import React from "react";
import '../styles/NavBar.css';
import logo from '../img/logo.jpg';
import CartWidget from "./CartWidget";



const NavBar = () =>{
return(
<>
<header>
    <nav>
        <img src={logo} alt="aca deberia ir el logo"></img>
        <ul>
            <li><a href="#"><CartWidget /></a></li>
            <li><a href="#">Promos</a></li>
            <li><a href="#">Viandas</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
        </ul>
    </nav>
</header>


</>
);
};


export default NavBar