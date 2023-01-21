import { useNavigate } from "react-router-dom";
function FormRegister() {
    const navigate = useNavigate();
    const clickHandler = (e) => {
        e.preventDefault();
        navigate("/home");
      }

    return ( 
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />

            <label htmlFor="">Usuario
            <input type="text" />
            </label>


            <label htmlFor="">Password
            <input type="password" />
            </label>

            <button type="button" onClick={clickHandler}>Iniciar Sesion</button>

        </form>


     );
}

export default FormRegister;