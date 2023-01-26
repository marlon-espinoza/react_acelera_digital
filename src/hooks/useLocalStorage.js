import { useState } from "react";

/**
 * Hook to manage localStorage
 * @param {string} key 
 * @param {any} initialValue 
 * @returns 
 */
const useLocalStorage = (key, initialValue) => {
    const [ storedValue, setValue ] = useState(()=> {
        try {
            let value = window.localStorage.getItem(key);
            value = value ? JSON.parse(value) : initialValue;

            return value;
        }
        catch (err) {
            return initialValue
        }
    });

    const setLocalStorage = (value) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        }
        catch (err) {

        }
    }

    return [ storedValue, setLocalStorage ];
};

export default useLocalStorage;