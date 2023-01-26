import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const Cart = () => {
    
    const [ travels, setTravels ] = useLocalStorage('cart', []);

    const pay = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData);
        console.log("VALUES",values);

        alert("Se procesó correctamente")
    }

    let total = 0;
    return <form onSubmit={pay}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <ul>
                        {travels.map((travel, index) => {

                            total += travel.quantity * travel.cost;

                            return <li key={index} style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                <img src={travel.image} style={{height: 100, margin: 6}}></img>
                                <div>
                                    <p>{travel.name}</p>
                                    <strong>{travel.cost}</strong>
                                </div>
                                <input name={"quantity-" + travel.id}
                                        style={{padding: 6, margin: 6}}
                                        type="number"
                                        min={1}
                                        max={10}
                                        // defaultValue={travel.quantity}
                                        value={travel.quantity}
                                        onChange={(e)=>{
                                            const travelTmp = travels.find(t => t.id == travel.id);
                                            travelTmp.quantity = e.target.value;
                                            setTravels([...travels]);
                                        }}
                                >
                                </input>
                                <div style={{margin: 6}}>
                                    <p>$ {travel.quantity * travel.cost}</p>
                                    <button>delete</button>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <div>
                    <p>TOTAL: </p>
                    <span>$ {total}</span>
                    <button type="submit">Pagar</button>
                </div>
            </form>

}

export default Cart;