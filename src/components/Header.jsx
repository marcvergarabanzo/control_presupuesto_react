import NuevoPressupuesto from "./NuevoPressupuesto";
import ControlPresupuesto from "./ControlPresupuesto";


function Header({ presupuesto, setPresupuesto, setIsValidPresupuesto, isValidPresupuesto, gastos, setGastos }) {


    return (
        <header>

            <h1>Planificador de Gastos</h1>

            {isValidPresupuesto ? (

                <ControlPresupuesto
                    presupuesto={presupuesto}
                    gastos={gastos}
                    setGastos={setGastos}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />

            ) : (
                <NuevoPressupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                />
            )}

        </header>
    )
}

export default Header
