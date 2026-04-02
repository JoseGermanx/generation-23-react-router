
import { useParams } from 'react-router'

const User = () => {

    const { id } = useParams(); // el id viene desde la definción de la ruta

    return (
        <>
            <h1>Información del usuario</h1>
            <h3>Usuario ID: {id}</h3>
        </>
    )
};

export default User;