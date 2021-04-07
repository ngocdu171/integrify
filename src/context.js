import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const UsersContext = createContext();

const UsersProvider = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // console.log(response);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <UsersContext.Provider value={{data}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export {UsersContext, UsersProvider};
