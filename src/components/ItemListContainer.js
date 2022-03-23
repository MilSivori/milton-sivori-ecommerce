import React from "react";

const ItemListContainer = (props) => {
let random
let mensaje = () => {
    switch (props.numero){
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

<h1>Bienvenido al Sitio {props.nombre}, {random}</h1>

)
}

export default ItemListContainer