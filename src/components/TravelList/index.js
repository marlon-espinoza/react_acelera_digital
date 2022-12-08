import TravelListItem from "./TravelListItem";

const List = [
    {id: 1, image: null, name: 'Viaje a Cancún', cost: 2000, max: 5},
    {id: 2, image: null, name: 'Viaje a Quito', cost: 2000, max: 5},
    {id: 3, image: null, name: 'Viaje a Lima', cost: 2000, max: 5},
    {id: 4, image: null, name: 'Viaje a Bogotá', cost: 2000, max: 5},
];

const TravelList = () => {

    return <>
            <div>
                {List.map((item, index) => {
                    // const listItem = {
                    //     id:item.id,
                    //     name: item.name,
                    //     cost: item.cost,
                    //     max: item.max,
                    //     image: item.image
                    // }
                    return <div key={index}>
                                <TravelListItem id={item.id} 
                                                name={item.name}
                                                cost={item.cost}
                                                max={item.max}
                                                image={item.image}
                                />
                                {/* <TravelListItem {...listItem} /> */}
                            </div>
                })}
            </div>
        </>;
}

export default TravelList;