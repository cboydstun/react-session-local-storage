import { useState, useEffect } from'react';

function getSessionStorageOrDefault(key, defaultValue){
    const stored = sessionStorage.getItem(key);

    if(!stored){
        return defaultValue;
    }else{
        return JSON.parse(stored)
    }
}

export function useSessionStorage(key, defaultValue){
    const [value, setValue] = useState(
        getSessionStorageOrDefault(key, defaultValue)
    )

    useEffect(()=>{
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return[value, setValue]
}

//source https://typeofnan.dev/using-session-storage-in-react-with-hooks/