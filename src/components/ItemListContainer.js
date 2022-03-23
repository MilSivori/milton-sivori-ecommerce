import React from "react";

const ItemListContainer = () => {

let random = Math.floor(Math.random() * 3) + 1;
let mensaje = () => {
    switch (random){
        case 1:
            random = "listo para pedir?"
            break;
        case 2:
            random = "con hambre?"
            break;
        case 3:
            random = "que comemos hoy?"
            break;
    }
}
mensaje()

return (

<h1>Bienvenido al Sitio, {random}</h1>

)
}

export default ItemListContainer