import TravelListItem from "./TravelListItem";
import { useState, useEffect } from "react";
import './style.css';
import RestClient from "../../services/RestClient";

const TravelList = () => {
    
    const [ list, setList ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=> {
        getTravelListAxios();
    }, []);

    const getTravelList = () => {
        setLoading(true);
        fetch("https://my-json-server.typicode.com/marlon-espinoza/tech_academy/travels", {
                method: 'GET'
            })
            .then(async res => {
                setLoading(false);
                const data = await res.json();
                setList(data);
            })
            .catch(err => {
                setLoading(false);
            })
    }

    const getTravelListAxios = () => {
        setLoading(true);
        RestClient.getTravels().then(res => {
            setLoading(false);
            const { data } = res;
            setList(data);
        })
        .catch(err => {
            setLoading(false);
        })
    }
    

    return <>
            <div className="row">
                {(loading) && 
                    <div>Cargando...</div>
                }
                {list.map((item, index) => {
                    // const listItem = {
                    //     id:item.id,
                    //     name: item.name,
                    //     cost: item.cost,
                    //     max: item.max,
                    //     image: item.image
                    // }
                    return <div className="col-4" key={index}>
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