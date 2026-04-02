
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

const User = () => {

    const { id } = useParams(); // el id viene desde la definción de la ruta
    const [user, setUser] = useState(null);

     useEffect(()=> {

        const getUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await response.json();
            setUser(data)
        }
        getUser();

    }, [id])

    if (!user) return <p>Usuario no existe!!</p>


    return (
        <>
            <h1>Información del usuario</h1>
            <h3>Usuario ID: {id}</h3>
            <p>Nombre: {user.name}</p>
            <p>Username: {user.username}</p>
        </>
    )
};

export default User;