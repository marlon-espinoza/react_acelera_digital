import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const TravelListItem = ({id = null, name = null, cost = 0, max = 0, image = null}) => {

    const [ cart, setCart ] = useLocalStorage('cart', []);

    const addToCart = () => {

        const travel = cart.find(t => t.id == id);

        if (!travel) {
            cart.push({
                id, name, cost, image, quantity: 1
            });
        }
        else {
            travel.quantity ++;
        }

        setCart([...cart]);
    }

    return <div style={{border: '1px solid black', margin: 10}}>
                {/* Imagen */}
                <div>
                    <img src={image} className="img-travel" />
                </div>
                {/* Nombre */}
                <div>
                    <span>
                        <h5>{name}</h5>
                    </span>
                </div>
                {/* Costo */}
                <div>
                    <span>
                        ${cost}
                    </span>
                </div>
                {/* Boton */}
                <div>
                    <button onClick={addToCart}>Agregar al carrito</button>
                </div>
                {/* {name} | COSTO: $ {cost} */}
                
            </div>
}

export default TravelListItem;