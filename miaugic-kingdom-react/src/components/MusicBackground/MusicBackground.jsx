//-----------COMPONENETE MUSIC BACKGROUND PARA MUSICA DE FONDO----------------//
/**La funcionalidad de este componenete es reproducir una musica continua
 * indiferentemente de si se renderiza el componenete, si se recarga la pagina la musica comienza de nuevo */
import { useEffect, useRef } from "react";

export default function MusicBackground() {
  const audioRef = useRef(null);
  const TARGET_VOLUME = 0.04; // Volumen de la musica de fondo

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = TARGET_VOLUME;
    audio.muted = false; // simpre desmutear
    audio.loop = true; // reproducir en bucle

    // Algunos navegadores bloquean la reproduccion automatica de audio
    // hasta que el usuario interactua con la pagina (click, tecla, etc)

    const activarPorClick = () => {
      audio.play().catch(() => {});
      window.removeEventListener("click", activarPorClick);
    };

    // Intento de reproduccion automatica (en produccion suele fallar)
    audio.play().catch(() => {});

    // Desbloqueo obligatorio por politica del navegador
    window.addEventListener("click", activarPorClick);

    return () => {
      window.removeEventListener("click", activarPorClick);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/sonidos/Golden Brown V2.mp3"
      preload="auto"
      style={{ display: "none" }}
    />
  );
}

