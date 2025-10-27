import { useState, useEffect, useRef } from "react"
import "./Edificios.css"

function Edificios() {
  const [juego, setJuego] = useState(() => {
    const saved = sessionStorage.getItem("estadoJuego");
    return saved ? JSON.parse(saved) : {
      monedas: 0,
      amatistas: 0,
      hierbas: 0,
      trabajadores: 0,
      trigo: 0,
      almacen: false,
      casita: 0,
      boticaria: false,
      mercado: false,
      molino: false,
      culto: false
    };
  });
  return (
    <div className="container-fluid bg-dark text-white vh-100 d-flex flex-column">
      {/* Barra superior */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <button className="btn btn-light">Volver a inicio</button>
        <button className="btn btn-light">Recoger</button>
      </div>

      {/* Contenido principal */}
      <div className="row flex-grow-1">
        {/* Columna izquierda */}
        <div className="col-3 d-flex flex-column align-items-center">
          {/* Recursos */}
          <div className="bg-light text-dark rounded p-3 mb-4 w-100">
            <h5 className="text-center">Recursos</h5>
            <ul className="list-unstyled">
              <li>● xy</li>
              <li>● xy</li>
              <li>● xy</li>
              <li>● xy</li>
            </ul>
          </div>

          {/* Mercado */}
          <div className="bg-light text-dark rounded p-3 w-100">
            <h5 className="text-center">Mercado</h5>
            <div className="d-flex flex-column align-items-center">
              <div className="bg-dark w-75 mb-2" style={{ height: "20px" }}></div>
              <div className="bg-dark w-75 mb-2" style={{ height: "20px" }}></div>
              <div className="bg-dark w-75" style={{ height: "20px" }}></div>
            </div>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-9">
          <div className="d-flex flex-column gap-3">
            {/* Edificio */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="d-flex justify-content-between align-items-center bg-light text-dark rounded p-3"
              >
                <div>
                  <strong>Edificio {i}</strong>
                  <div>● xy ● xy ● xy</div>
                </div>
                <button className="btn btn-dark">Construir</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 text-center">
        <h5>Monedas acumuladas: 0</h5>
      </div>
    </div>
  );
  
}

export default Edificios