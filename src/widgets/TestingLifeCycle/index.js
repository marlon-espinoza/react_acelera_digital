import { useEffect,useState } from "react"

const TestingLifeCycle = () => {

    const [ counter, setCounter ] = useState(null);

    /**
     * componentDidMount
     * componentDidUpdate
     * componentWillUnmount
     */

    /**
     * Excute the first time when the component was mounted.
     */ 
    useEffect(()=>{
        setCounter(0);

        let c = 0;
        const interval = setInterval(()=>{
            console.log("HELO", c);
            c = c + 1;
            setCounter(c);
        },1000);

        return () => {
            clearInterval(interval);
        }
    },[]);

    /**
     * Update counter state.
     */
    useEffect(()=>{
        // console.log("COUNTER UPDATE");
    },[counter]);

    
    return <h1>COUNTER IS: {counter}</h1>
}

export default  TestingLifeCycle;