import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import "./Inicio.css"

function Inicio() {
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


  // Lista de monedas que se están animando
  const [monedasAnimadas, setMonedasAnimadas] = useState([]);
  const audioRef = useRef(null);
  const segundosRef = useRef(0);

  // Guardar el estado del juego en el localStorage cada vez que cambie con el hook useEffect
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(juego));
  }, [juego]);

  // Función para generar una moneda y reproducir el sonido
  const generarMoneda = () => {

    const nuevaMoneda = juego.monedas + 1;

    // reproducir sonido
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // volumen al 30%
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }

    // sumar moneda
    setJuego({
      // spread del estado anterior, me aseguro de no perder otros valores haciendo una copia del objeto
      ...juego,
      monedas: nuevaMoneda,
    });

    setTimeout(() => {
      segundosRef.current += 250;
      console.log("Delay acumulado:", segundosRef.current);
    }, 250 * nuevaMoneda);

    // añadir una nueva moneda animada
    const id = Date.now();
    setMonedasAnimadas((prev) => [...prev, id]);

    // eliminarla después de la animación
    /**
     * Después de 2000 ms (2 segundos), se elimina esa moneda concreta del array.
     * .filter((m) => m !== id) → quita del array el id que coincide con la moneda animada.
     * Esto hace que React deje de renderizarla automáticamente.
     */

    setTimeout(() => {
      setMonedasAnimadas((prev) => prev.filter((m) => m !== id));
    }, 2000);
  };

  console.log(juego.monedas);

  return (
    <div className="container text-center fondo-inicio px-0 position-relative">
      <div className="row align-items-center">
        <div className="col px-0">
          <img src="/imagenes/gato-inicio.png" alt="imagen de inicio" width="100" height="100" />
          <h1 className="display-4">Miaugic Kingdom</h1>

          <div className="d-flex flex-column align-items-center mt-5 w-100">
            <button className="btn btn-lg btn-generar-moneda mt-3 w-50" onClick={generarMoneda}>
              Miaulquimia
            </button>

            {juego.monedas >= 2 && (
              <Link to="/edificios" className="btn btn-lg btn-edificios mt-3 w-50">
                Edificios
              </Link>
            )}

            <div className="mt-auto mb-3">
              <p className="monedasObtenidas mt-5">Monedas: {juego.monedas}</p>
            </div>
          </div>

          {/* Renderizo todas las monedas animadas activas */}
          {monedasAnimadas.map((id) => (
            <img
              key={id}
              src="/imagenes/cat-coin.png"
              alt="moneda"
              className="cat-coin mostrarMoneda"
            />
          ))}

          {/* Sonido */}
          <audio ref={audioRef} src="/sonidos/audio_moneda.mp3" />
        </div>
      </div>

      <div className="row w-100 mx-0 mt-auto">
        <div className="col d-flex justify-content-center px-0">
          <img
            src="/imagenes/imagen-castillo-inicio.png"
            alt="imagen castillo inicio"
            className="imagen-castillo"
          />
        </div>
      </div>
    </div>
  )
}

export default Inicio
