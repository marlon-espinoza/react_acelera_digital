
const TravelListItem = ({id = null, name = null, cost = 0, max = 0, image = null}) => {

    return <div style={{border: '1px solid black', margin: 10}}>
                {/* Imagen */}
                <div>
                    <img src={image} />
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
                    <button>Agregar al carrito</button>
                </div>
                {/* {name} | COSTO: $ {cost} */}
                
            </div>
}

export default TravelListItem;