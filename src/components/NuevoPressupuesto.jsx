import Mensaje from "./Mensaje";
import { useState } from "react";

function NuevoPressupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {

    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!presupuesto || presupuesto <= 0) {
            setMensaje('No es un presupuesto valido');

            return;
        }

        setMensaje('');
        setIsValidPresupuesto(true);
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">

            <form className="formulario"
                onSubmit={handleSubmit}
            >
                <div className="campo">

                    <label>Definir Pressupuesto</label>
                    <input
                        placeholder="Añade tu Pressupuesto"
                        className="nuevo-presupuesto"
                        type="number"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            </form>

        </div>

    )
}

export default NuevoPressupuesto
