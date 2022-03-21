import React from "react";
import '../styles/NavBar.css'

const NavBar = () =>{
return(
<>
<header>
    <nav>
        <img src={require("../img/logo.jpg")} alt="aca deberia ir el logo"></img>
        <ul>
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