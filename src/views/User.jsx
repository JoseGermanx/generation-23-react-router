
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

const User = () => {

    const { id } = useParams(); // el id viene desde la definción de la ruta
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [ resultado, setResultado] = useState(true)

    useEffect(() => {

        const getUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            if (!response.ok) {
                setResultado(false)
                setLoading(false)
                return
            }

            const data = await response.json();
            console.log(data)
            setUser(data)
            setLoading(false)
        }
        getUser();

    }, [id])

    if (loading) return <p>Cargando....</p>

   
    return (
        <>
            {!resultado ? (<p>Usuario no existe!!</p>) :
                (
                    <>
                        <h1>Información del usuario</h1>
                        <h3>Usuario ID: {id}</h3>
                        <p>Nombre: {user.name}</p>
                        <p>Username: {user.username}</p>
                    </>
                )
            }
        </>
    )
};

export default User;