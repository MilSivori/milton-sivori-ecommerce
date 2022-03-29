import React from "react";
import { ItemCount } from "./ItemCount";
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
//con esto le paso el stock minimo (0) y el maximo (10) a ItemCount, para obtenerlo por props
let stock = [0,10]

return (
<>
<h1>Bienvenido al Sitio {props.nombre}, {random}</h1>
<ItemCount stock={stock}/>
</>
)
}

export default ItemListContainer