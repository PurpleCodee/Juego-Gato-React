import { useState, useEffect } from "react";
import "./Edificios.css";
import AlertCustom from "../AlertCustom/AlertCustom.jsx";
import MusicBackground from "../MusicBackground/MusicBackground.jsx";
import { Link, useNavigate } from "react-router-dom";

// Estado inicial del juego
const estado_inicial = {
  monedas: 0,
  amatistas: 0,
  hierbas: 0,
  trabajadores: 0,
  trigo: 0,
  almacen: 0,
  casita: 0,
  boticaria: false,
  mercado: false,
  molino: false,
  culto: false,
  tentaculo: 1,    // como solo tengo 1 lo dejo fijo
  panes: 0
};

// Configuración de edificios
const EDIFICIOS = [
  {
    id: "almacen", // id único para cada edificio
    nombre: "Almacén", // nombre a mostrar
    img: "/imagenes/edificio-almacen.jpg", // imagen del edificio
    textoRequisitos: "2 monedas", //texto que muestra los requisitos
    req: { monedas: 2 }, // objeto con los requisitos de recursos
    unico: false, // un booleano para indicar que puedo tener mas de un edificio
  },
  {
    id: "casita",
    nombre: "Casita",
    img: "/imagenes/edificio-casita.jpg",
    textoRequisitos: "6 monedas + 6 amatistas",
    req: { monedas: 6, amatistas: 6 },
    unico: false, 
  },
  {
    id: "boticaria",
    nombre: "Boticaria",
    img: "/imagenes/edificio-boticaria.jpg",
    textoRequisitos: "8 monedas + 9 amatistas + 5 hierbas",
    req: { monedas: 8, amatistas: 9, hierbas: 5 },
    unico: true,
  },
  {
    id: "mercado",
    nombre: "Mercado",
    img: "/imagenes/edificio-mercado.jpg",
    textoRequisitos: "8 amatistas + 9 hierbas",
    req: { amatistas: 8, hierbas: 9 },
    unico: true,
  },
  {
    id: "molino",
    nombre: "Molino",
    img: "/imagenes/edificio-molino.jpg",
    textoRequisitos: "5 monedas + 8 amatistas",
    req: { monedas: 5, amatistas: 8 },
    unico: true,
  },
  {
    id: "culto",
    nombre: "Culto",
    img: "/imagenes/edificio-culto.jpg",
    textoRequisitos:
      "10 monedas + 7 hierbas + 9 amatistas + 5 panes + 10 trabajadores + 1 tentáculo",
    req: { monedas: 10, hierbas: 7, amatistas: 9, trabajadores: 10, panes: 5, tentaculo: 1 },
    unico: true,
  },
];

// Helper: comprobar si el jugador tiene recursos suficientes para un edificio teniendo en cuenta el requisito
const tieneRecursos = (juego, req) => {
  for (const clave in req) {
    if ((juego[clave] || 0) < req[clave]) {
      return false; // recurso insuficiente
    }
  }
  return true;// todos los recursos son suficientes
};

// Helper: saber si un edificio ya está construido (para opacidad y únicos)
const edificioComprado = (juego, id) => {
  switch (id) {
    case "almacen":
      return juego.almacen > 0;// puede haber varios almacenes
    case "casita":
      return juego.casita > 0;
    case "boticaria":
      return juego.boticaria;//solo puede haber 1 boticaria
    case "mercado":
      return juego.mercado;
    case "molino":
      return juego.molino;
    case "culto":
      return juego.culto;
    default:
      return false;
  }
};

function Edificios() {
  const navigate = useNavigate();// para redirigir al inicio tras ganar

  // Estado del juego
  const [juego, setJuego] = useState(() => {
  const saved = sessionStorage.getItem("estadoJuego");
  if (!saved) return estado_inicial; // no hay nada guardado

  const data = JSON.parse(saved);

  //Completar valores que falten (evita NaN)
  return {
    ...estado_inicial,  // tiene panes: 0 siempre
    ...data             // data pisa SOLO lo que exista
  };
});


  // Guardar en sessionStorage cada vez que cambie
  useEffect(() => {
    sessionStorage.setItem("estadoJuego", JSON.stringify(juego));
  }, [juego]);

  // Estado del alert
  const [alerta, setAlerta] = useState({
    visible: false,
    title: "",
    message: "",
    img: "",
    finPartida: false,
  });

  // Fondo específico del componente efecto visual
  useEffect(() => {
    document.body.style.backgroundImage = "url('/imagenes/imagen-fondo-edificios.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.minHeight = "100vh";

    // Cleanup al desmontar
    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  /** ----------------- Recoger recursos (amatistas + hierbas) ----------------- */
  const [cooldown, setCooldown] = useState(0);
  // Timer para mostrar el tiempo restante de cosecha de trigo"
  const [timerTrigo, setTimerTrigo] = useState(20);

  useEffect(() => {
    if (!juego.molino) return;  // Si no hay molino → NO se genera el trigo

    const intervalo = setInterval(() => {
      setTimerTrigo(prev => {
        if (prev <= 1) {
          //Generar +1 trigo al llegar a 0
          setJuego(j => ({
            ...j,
            trigo: j.trigo + 1
          }));

          return 20; // reiniciar cuenta atrás
        }

        return prev - 1;  // seguir contando
      });
    }, 1000);

    return () => clearInterval(intervalo);  // cleanup paera evitar múltiples intervalos
  }, [juego.molino]);


  const recogerRecursos = () => {
    // sólo debería poder usarse si hay al menos 1 almacén (esto se controla en disabled)
    const artesanos = 2 + juego.trabajadores;

    const nuevasAmatistas =
      juego.amatistas + Math.floor(Math.random() * (artesanos + 1));
    const nuevasHierbas =
      juego.hierbas + Math.floor(Math.random() * (artesanos + 1));

    setJuego((prev) => ({
      ...prev,
      amatistas: nuevasAmatistas,
      hierbas: nuevasHierbas,
    }));

    let tiempoEspera = 5 - artesanos;
    if (tiempoEspera < 3) tiempoEspera = 3;

    setCooldown(tiempoEspera);

    let restante = tiempoEspera;
    const intervalo = setInterval(() => {
      restante -= 1;
      setCooldown(restante);
      if (restante <= 0) {
        clearInterval(intervalo);
        setCooldown(0);
      }
    }, 1000);
  };

  /** ----------------- Construcción de edificios ----------------- */

  const handleConstruir = (edificio) => {
    // ¿tiene recursos?
    if (!tieneRecursos(juego, edificio.req)) return;

    setJuego((prev) => {
      let nuevo = { ...prev };

      // restar recursos usados
      for (const clave in edificio.req) {
        nuevo[clave] = (nuevo[clave] || 0) - edificio.req[clave];
      }

      // aplicar efecto según el edificio
      switch (edificio.id) {
        case "almacen":
          nuevo.almacen = (nuevo.almacen || 0) + 1;
          break;
        case "casita":
          nuevo.casita = (nuevo.casita || 0) + 1;
          // cada casita da 5 trabajadores
          nuevo.trabajadores = (nuevo.trabajadores || 0) + 5;
          break;
        case "boticaria":
          nuevo.boticaria = true;
          break;
        case "mercado":
          nuevo.mercado = true;
          break;
        case "molino":
          nuevo.molino = true;
          break;
        case "culto":
          nuevo.culto = true;
          break;
        default:
          break;
      }

      return nuevo;
    });

    // Alertas
    if (edificio.id === "culto") {
      setAlerta({
        visible: true,
        title: "¡Enhorabuena!",
        message: "Has construido el Culto y has ganado la partida.",
        img: edificio.img,
        finPartida: true,
      });
    } else {
      setAlerta({
        visible: true,
        title: `¡Has construido ${edificio.nombre}!`,
        message: edificio.textoRequisitos,
        img: edificio.img,
        finPartida: false,
      });
    }
  };

  /** ========================= MERCADO ========================= */

  // Comprar 1 hierba por 1 moneda
  const comprarHierba = () => {
    if (!juego.mercado) return;        // mercado aún no comprado
    if (juego.monedas < 1) return;     // no hay monedas

    setJuego(prev => ({
      ...prev,
      monedas: prev.monedas - 1,
      hierbas: prev.hierbas + 1
    }));
  };

  // Comprar 1 amatista por 1 moneda
  const comprarAmatista = () => {
    if (!juego.mercado) return;
    if (juego.monedas < 1) return;

    setJuego(prev => ({
      ...prev,
      monedas: prev.monedas - 1,
      amatistas: prev.amatistas + 1
    }));
  };

  // Comprar 1 pan por 10 trigo
  const comprarPan = () => {
    if (!juego.molino) return;   // molino aún no comprado
    if (juego.trigo < 10) return;

    setJuego(prev => ({
      ...prev,
      trigo: prev.trigo - 10,
      panes: prev.panes + 1
    }));
  };



  const cerrarAlerta = () => {
    setAlerta((prev) => {
      const eraFinal = prev.finPartida;
      const nuevo = { ...prev, visible: false, finPartida: false };

      // si era el Culto, se resetea la partida y se vuelve a inicio
      if (eraFinal) {
        setJuego(estado_inicial);
        sessionStorage.setItem("estadoJuego", JSON.stringify(estado_inicial));
        navigate("/");
      }

      return nuevo;
    });
  };
  console.log("PANES ANTES:", juego.panes, typeof juego.panes);


  return (
    <>
      {/* Alerta personalizada */}
      <AlertCustom
        visible={alerta.visible}
        title={alerta.title}
        message={alerta.message}
        img={alerta.img}
        onClose={cerrarAlerta}
      />

      <div className="container py-3 fondo-edificios-componente justify-content-between p-3 w-100">
        {/* Barra superior */}
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
          <Link to="/" className="btn btn-inicio mb-2 mb-md-0">
            Volver a inicio
          </Link>

          <button
            className="btn btn-recoger mb-2 mb-md-0"
            disabled={cooldown > 0 || juego.almacen <= 0}
            onClick={recogerRecursos}
          >
            {juego.almacen <= 0
              ? "Necesitas un almacén"
              : cooldown > 0
                ? `Recogiendo... ${cooldown}s`
                : "Recoger"}
          </button>
        </div>

        <div className="row g-3 justify-content-center">
          {/* -----------------------Recursos---------------------- */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-3">
            <div className="contenedor-recursos-mercado p-3">
              <h5 className="text-center">Recursos</h5>

              <ul className="row row-cols-2 row-cols-lg-1 list-unstyled justify-content-center align-items-center text-center">
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/cat-coin.png"
                    alt="Moneda"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.monedas}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/amatista.png"
                    alt="Amatista"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.amatistas}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/hierba.png"
                    alt="Hierba"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.hierbas}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/trigo.png"
                    alt="Trigo"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.trigo}
                  {juego.molino && (
                    <span className="ms-2">
                      (Cosechando... {timerTrigo}s)
                    </span>
                  )}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img src="/imagenes/pan.png"
                    alt="Pan"
                    width="25"
                    height="25"
                    className="me-2"
                  />
                  {juego.panes}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/trabajador.png"
                    alt="Trabajador"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.trabajadores}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/almacen.png"
                    alt="Almacen"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.almacen}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/boticaria.png"
                    alt="Boticaria"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.boticaria ? "1" : "0"}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/casita.png"
                    alt="Casita"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.casita}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/molino.png"
                    alt="Molino"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.molino ? "1" : "0"}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/tentaculo.png"
                    alt="Tentaculo"
                    width="25"
                    height="25"
                    className="me-2"
                  />
                  {1}
                </li>
                <li className="col mb-2 d-flex align-items-center justify-content-center">
                  <img
                    src="/imagenes/culto.png"
                    alt="Culto"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {juego.culto ? "1" : "0"}
                </li>
              </ul>
            </div>

            {/* --------------------Mercado-------------------- */}
            <div className="contenedor-recursos-mercado p-3">
              <h5 className="text-center">Michi Mercado</h5>

              <div className="d-flex flex-column align-items-center recursos-mercado">

                {/* Comprar hierba */}
                <button
                  className="mb-2 btn efecto-btn"
                  disabled={!juego.mercado || juego.monedas < 1}
                  onClick={comprarHierba}
                >
                  <img
                    src="/imagenes/hierba.png"
                    alt="Hierba"
                    width="40"
                    height="40"
                    className="ms-2 img-mercado"
                  />
                </button>

                {/* Comprar amatista */}
                <button
                  className=" mb-2 btn efecto-btn"
                  disabled={!juego.mercado || juego.monedas < 1}
                  onClick={comprarAmatista}
                >
                  <img
                    src="/imagenes/amatista.png"
                    alt="Amatista"
                    width="40"
                    height="40"
                    className="ms-2 img-mercado"
                  />
                </button>

                {/* Comprar pan */}
                <button
                  className="btn efecto-btn"
                  disabled={!juego.molino || juego.trigo < 10}
                  onClick={comprarPan}
                >
                  <img
                    src="/imagenes/pan.png"
                    alt="Pan"
                    width="40"
                    height="40"
                    className="ms-2 img-mercado"
                  />
                </button>
              </div>
            </div>

          </div>

          {/* --------------------Edificios-------------------- */}
          <div className="col-12 col-lg-8">
            <div className="img-fondo-edificios p-3">
              {EDIFICIOS.map((edificio) => {
                const comprado = edificioComprado(juego, edificio.id);
                const puedeComprar = tieneRecursos(juego, edificio.req);
                const disabled =
                  !puedeComprar || (edificio.unico && comprado);

                return (
                  <div
                    key={edificio.id}
                    className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center justify-content-lg-between contenedor-edificio text-center text-lg-start"
                  >
                    <img
                      src={edificio.img}
                      alt={edificio.nombre}
                      width="80"
                      height="80"
                      className={
                        "mb-2 mb-lg-0 me-lg-3 img-edificios " +
                        (comprado ? "img-edificio-activo" : "img-edificio-bloqueado")
                      }
                    />

                    <div className="mb-2 mb-lg-0">
                      <strong className="titulo-edificio">
                        {edificio.nombre}
                      </strong>
                      <div>{edificio.textoRequisitos}</div>
                    </div>

                    <div className="d-flex justify-content-center justify-content-lg-end w-100 w-lg-auto">
                      <button
                        className="btn btn-construir-edificio mt-2 mt-lg-0"
                        disabled={disabled}
                        onClick={() => handleConstruir(edificio)}
                      >
                        {comprado && edificio.unico
                          ? "Construido"
                          : "Construir"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* -------------------------Footer------------------- */}
        <div className="text-center mt-5 footer-monedas ">
          <h4>Monedas acumuladas: {juego.monedas}</h4>
        </div>
      </div>
    </>
  );
}

export default Edificios;