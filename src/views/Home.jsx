import { Link } from "react-router";
import { useState, useEffect } from "react";


const Home = () => {

    const [ users, setUsers] = useState([]);

    useEffect(()=> {

        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data)
        }

        getUsers();


    }, [])

    return (
        <>
            <h1>Home</h1>
            <h2>Lista de usuarios</h2>
            {users.length === 0 ? ( <p>Cargando...</p>)
            : (<ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - <Link to={`/user/${user.id}`}>Ver detalle</Link>
                    </li>
                ))}
                
            </ul>
            )
        }
        </>
    )
}

export default Home;