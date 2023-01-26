import { useState, useEffect } from 'react';

// https://jsonplaceholder.typicode.com/users

const Users = () => {
    const [ userList, setUserList ] = useState([]);

    useEffect(()=> {
        getUserList();
    }, [])

    const getUserList = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setUserList(data);
            })
            .catch(err => {
                console.error("ERR", err)
            });
    }


    return <>
                <div>Users</div>
                <div>
                    <ul>
                        {userList.map((user, index) => {
                            return <li key={index}>
                                        {index + 1} - {user.name}
                                    </li>;
                        })}
                    </ul>
                </div>
            </>
}

export default Users;