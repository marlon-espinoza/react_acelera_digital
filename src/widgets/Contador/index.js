import { useState } from "react";
import './style.css';

function Contador () {
    // let contador = 0;
    const [ contador, setContador ] = useState(0);

    const suma = () => {
        // contador = contador + 1;
        setContador(contador + 1);
    }

    const resta = () => {
        console.log("RESTA");
        setContador(contador - 1);
    };

    return <div className="bg-dark">
                <div className="row">
                    <span className="numero">
                        {contador}
                    </span>
                </div>
                <div>
                    <button className="btn-radius" onClick={suma}>+</button>
                    <button className="btn-radius" onClick={resta}>-</button>
                </div>
            </div>;
}

export default Contador;


// import { useState } from "react";
// import './style.css'

// function Contador () {
//     let contador = 0;
//     // const [ contador, setContador ] = useState(0);

//     const plus = () => {
//         contador = contador + 1;
//         console.log(contador);
//         // setContador(contador + 1);
//     }

//     return <div className="container bg-gray">
//                 <div className="row align-center">
//                     <div className="w-xl h-xl number bg-white font-gray">
//                         {contador}
//                     </div>
//                 </div>
//                 {/* Botones */}
//                 <div className="row align-center">
//                     <button className="btn-rounded" onClick={plus}>+</button>
//                     <button className="btn-rounded">-</button>
//                 </div>
//         </div>;
// }

// export default Contador;