import React,{ useState} from "react";

export const ItemCount = (props) => {

const [contador, setContador] = useState(0);

const suma = () =>{
    if (contador == props.stock[1]){
        return
    }
    else{
        setContador( contador + 1)
    }
}
const resta = () =>{
    if ( contador == props.stock[0]){
        return
    }
    else{
    setContador( contador - 1)
    }
}

return (
    <>
<button onClick={suma}>Agregar</button>
<p>{contador}</p>
<button onClick={resta}>Quitar</button>
    </>
    )
};