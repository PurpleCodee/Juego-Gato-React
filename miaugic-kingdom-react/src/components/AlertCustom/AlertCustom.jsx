
import "./AlertCustom.css";
function AlertCustom({ visible, title, message, img, onClose }) {

  if (!visible) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box pop-animation">
        {img && <img src={img} alt="alerta" className="alert-img" />}

        <h2 className="alert-title">{title}</h2>
        <p className="alert-message">{message}</p>

        <button className="alert-btn" onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default AlertCustom;
