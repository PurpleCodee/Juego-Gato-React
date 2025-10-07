import "./Inicio.css"

function Inicio() {
  return (
<div className="container text-center fondo-inicio px-0">
  <div className="row align-items-center">
    <div className="col px-0">
      <img src="/imagenes/gato-inicio.png" alt="imagen de inicio" width="100" height="100"/>
      <h1 className="display-4">Miaugic Kingdom</h1>

      <div className="d-grid gap-3 mt-5 w-100 justify-content-center">
        <button className="btn btn-lg btn-generar-moneda mt-3">
          Miaulquimia
        </button>
        <button className="btn btn-lg btn-edificios mt-3">
          Edificios
        </button>
      </div>
    </div>
  </div>

  {/* Pego la imagen al fina del contenedor */}
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
