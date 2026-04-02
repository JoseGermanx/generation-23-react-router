import { Link } from 'react-router'

const NavBar = () => {

    return (
        <>
        
            <h1>Mi App</h1>
            <div style={{display: "flex", gap: 6}}>
                {/* Ejemplo de Link */}
                <Link to={"/"}>Inicio</Link>
                <Link to={"/about"}>Quienes somos</Link>
                <Link to={"/user"}>Perfil</Link>
                <Link to={"/contact"}>Contacto</Link>
            </div>
            <hr />
        </>
    )
};
export default NavBar;