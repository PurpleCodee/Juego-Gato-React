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

    <div className="container py-3 fondo-edificios-componente justify-content-between p-3 w-100">
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <button className="btn btn-inicio mb-2 mb-md-0">Volver a inicio</button>
        <button className="btn btn-recoger mb-2 mb-md-0">Recoger</button>
      </div>

      <div className="row g-3 justify-content-center">
        <div className="col-12 col-lg-4 d-flex flex-column gap-3">

          {/* Recursos */}
          <div className="contenedor-recursos-mercado p-3">
            <h5 className="text-center">Recursos</h5>

            <ul className="row row-cols-2 row-cols-lg-1 list-unstyled justify-content-center align-items-center text-center">
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/cat-coin.png" alt="Moneda" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/amatista.png" alt="Amatista" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/hierba.png" alt="Hierba" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/trigo.png" alt="Trigo" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/trabajador.png" alt="Trabajador" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/almacen.png" alt="Almacen" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/molino.png" alt="Molino" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/casita.png" alt="Casita" width="20" height="20" className="me-2" />y
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/tentaculo.png" alt="Tentaculo" width="25" height="25" className="me-2" />1
              </li>
              <li className="col mb-2 d-flex align-items-center justify-content-center">
                <img src="/imagenes/pan.png" alt="Pan" width="25" height="25" className="me-2" />y
              </li>
            </ul>
          </div>

          {/* Mercado */}
          <div className="contenedor-recursos-mercado p-3">
            <h5 className="text-center">Mercado</h5>
            <div className="d-flex flex-column align-items-center recursos-mercado">
              <div className="w-75 mb-2 btn efecto-btn"><img src="/imagenes/hierba.png" alt="Hierba" width="40" height="40" className="ms-2 img-mercado" /></div>
              <div className="w-75 mb-2  btn efecto-btn"><img src="/imagenes/amatista.png" alt="Amatista"width="40" height="40" className="ms-2 img-mercado" /></div>
              <div className="w-75  btn efecto-btn"><img src="/imagenes/pan.png" alt="Pan" width="40" height="40" className="ms-2 img-mercado" /></div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="img-fondo-edificios p-3">
            {edificios.map((edificio, index) => (
              <div
                key={index}
                className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center justify-content-lg-between contenedor-edificio text-center text-lg-start"
              >

                <img
                  src={edificio.img}
                  alt={edificio.nombre}
                  width="80"
                  height="80"
                  className="mb-2 mb-lg-0 me-lg-3 img-edificios"
                />

                {/* Texto */}
                <div className="mb-2 mb-lg-0">
                  <strong className="titulo-edificio">{edificio.nombre}</strong>
                  <div>{edificio.requisitos}</div>
                </div>

                {/* Botón */}
                <div className="d-flex justify-content-center justify-content-lg-end w-100 w-lg-auto">
                  <button className="btn btn-construir-edificio mt-2 mt-lg-0">Construir</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-5 footer-monedas ">
        <h4>Monedas acumuladas: 0</h4>
      </div>
    </div>
  );

}

export default Edificios