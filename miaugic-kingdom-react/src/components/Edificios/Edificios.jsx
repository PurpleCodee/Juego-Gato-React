import { useState, useEffect, useRef } from "react"
import "./Edificios.css"
import { use } from "react";

{/**Funcion para renderizar un fondo u otro modificando el body y el html */ }


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

  useEffect(() => {
    // Aplico fondo al entrar en el componente
    document.body.style.backgroundImage = "url('/imagenes/imagen-fondo-edificios.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.minHeight = "100vh";

    //Limpieza: por si se vuelve a inicio, quito el fondo
    return () => {
      document.body.style.backgroundImage = "";
    };


  });

  // Definición de edificios con nombre, imagen y requisitos
  const edificios = [
  { nombre: "Almacén", img: "/imagenes/edificio-almacen.jpg", requisitos: "2 monedas" },
  { nombre: "Casita", img: "/imagenes/edificio-casita.jpg", requisitos: "6 monedas + 6 amatistas" },
  { nombre: "Boticaria", img: "/imagenes/edificio-boticaria.jpg", requisitos: "8 monedas + 9 amatistas + 5 hierbas" },
  { nombre: "Michi Mercado", img: "/imagenes/edificio-mercado.jpg", requisitos: "8 amatistas + 9 hierbas" },
  { nombre: "Molino", img: "/imagenes/edificio-molino.jpg", requisitos: "5 monedas + 8 amatistas" },
  { nombre: "Culto", img: "/imagenes/edificio-culto.jpg", requisitos: "próximamente" }
];


  return (
    <div className="d-flex justify-content-center aling-items-center vh-75">
      <div className="fondo-edificios-componente p-3">
        {/* Barra superior */}
        <div className="d-flex justify-content-between align-items-center p-3">
          <button className="btn btn-inicio">Volver a inicio</button>
          <button className="btn btn-recoger">Recoger</button>
        </div>

        {/* Contenido principal */}
        <div className="row flex-grow-1 h-100">
          {/* Columna izquierda */}
          <div className="col-3 d-flex flex-column align-items-stretch h-75">
            {/* Recursos */}
            <div className="p-3 w-100 contenedor-recursos-mercado flex-grow-1 mb-3">
              <h5 className="text-center">Recursos</h5>
              <ul className="list-unstyled">
                <li><img src="/imagenes/cat-coin.png" alt="Moneda" width="20" height="20" className="me-2" />y</li>{/* Icono recurso + cantidad */}
                <li><img src="/imagenes/amatista.png" alt="Amatista" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/hierba.png" alt="Hierba" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/trigo.png" alt="Trigo" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/trabajador.png" alt="Trabajador" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/almacen.png" alt="Almacen" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/molino.png" alt="Molino" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/casita.png" alt="Casita" width="20" height="20" className="me-2" />y</li>
                <li><img src="/imagenes/tentaculo.png" alt="Tentaculo" width="25" height="25" className="me-2" />1</li>
                <li><img src="/imagenes/pan.png" alt="Pan" width="25" height="25" className="me-2" />y</li>
              </ul>
            </div>

            {/* Mercado */}
            <div className="p-3 w-100 contenedor-recursos-mercado flex-grow-1">
              <h5 className="text-center">Mercado</h5>
              <div className="d-flex flex-column align-items-center recursos-mercado">
                <div className="w-75 mb-2 mt-2">Hierba <img src="/imagenes/hierba.png" alt="Hierba-Recursos" width="30" height="30" className="me-2" /></div>
                <div className="w-75 mb-2" >Amatista <img src="/imagenes/amatista.png" alt="Amatista-Recursos" width="30" height="30" className="me-2" /></div>
                <div className="w-75" >Pan <img src="/imagenes/pan.png" alt="Pan-Recursos" width="30" height="30" className="me-2" /></div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-9 d-flex flex-column h-75">
            <div className="d-flex flex-column img-fondo-edificios flex-grow-1">
              {edificios.map((edificio, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between p-2 contenedor-edificio"
                >
                  {/* Nombre + imagen + requisitos */}
                  <div className="d-flex align-items-start p-2 ">
                    <img
                      src={edificio.img}
                      alt={edificio.nombre}
                      width="80"
                      height="80"
                      className="me-3 img-edificios"
                    />
                    <div >
                      <strong  className="d-flex align-items-start p-2 ">{edificio.nombre}</strong>
                      <div>{edificio.requisitos}</div>
                    </div>
                  </div>

                  {/* Botón de construir */}
                  <button className="btn btn-construir-edificio">Construir</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 text-center footer-monedas">
          <h4>Monedas acumuladas: 0</h4>
        </div>
      </div>
    </div>

  );

}

export default Edificios