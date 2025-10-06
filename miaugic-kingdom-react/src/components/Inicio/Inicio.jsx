import "./Inicio.css"

function Inicio() {
  return (
    <div className="container text-center fondo-inicio">
        <div className="row align-items-center">
            <div className="col">
                {/* primera columna la imagen */}
                <img src="/imagenes/gato-inicio.png" alt="imagen de inicio" width="100" height="100"/>
                {/* segundo nombre del juego */}
                <h1 className="display-4">Miaugic Kingdom</h1>
                {/* tercera columna boton */}
                <button className="btn btn-primary btn-lg mt-3">
                    Miaulquimia
                </button>
            </div>
        </div>
    </div>
  )
}

export default Inicio
