# Juego-Gato-React

# 1. Concepto del proyeto ->
<!--
Principalmente el proyecto consiste en una refactorización de un proyecto anterior realizado con CSS3, HTML5 y Js Vanilla, para mejorar mis habilidades quiero maquetarlo completamente con Bootstrap y utilizar React.
--> 

# 2. Tematica del Juego ->
 <!--
  MIAUGIC KINGDOM: El Reino de los Michips
 La historia transcurre en un reino muy, muy lejano llamado MIAUGIC KINGDOM, donde los gatos viven en paz y comparten, junto a los HUMANOS, su día a día.
 Ahora, podríamos decir que en este reino humanos y gatitos tienen el mismo nivel de jerarquía, pero estaría contando una burda falacia.

 La verdad es que la raza superior son ellos: los “MICHIPS”, como los suelen llamar los humanos.
 Estos felinos no son simples gatitos, sus poderes podrían abrir portales hasta el mismísimo INFIERNO con tan solo un maullido o un movimiento de sus pequeñas patitas.

 La leyenda de Nekis

 Cuenta la leyenda que NEKIS, un gran MICHICERO, logró crear un PORTAL PROHIBIDO que lo teletransportó a R’LYEH, la ciudad hundida donde descansan los antiguos horrores.
 Allí, entre mares oscuros y tormentas imposibles, Nekis forjó una alianza con el mismísimo CTHULHU.
 Sí, sí, son súper amiguis, como dicen los pocos humanos que aún tienen valor para contarlo.

 Desde entonces, la RAZA HUMANA se ha visto obligada a servir a los Michips, porque, claro, nadie quiere comprobar qué pasaría si enfadas a un ser con acceso a los horrores del abismo.
 Una rebelión solo traería consecuencias catastróficas, y todos en el reino lo saben de primera mano.

 Así que, mientras los MICHIPS descansan plácidamente en sus tronos de lana y terciopelo, los humanos barren sus pelos, limpian sus areneros y preparan manjares dignos de su grandeza.
 Al final del día, todos saben que mantener a los Michips contentos es la única garantía de que el reino no acabe convertido en un PORTAL INFERNAL permanente. 
 -->

# 3. Crear proyecto en con REACT.
 <!--
  Comprobar que se tiene la ultima version de node con el comando npm -v lo adecuado es tener una versión actualizada.
 -> El proyecto se va a crear con Vite ya que es mas rapido y ligero que React App utilizo e comando npm create vite@latest
 -> Se le pone nombre al proyecto y se seleciona el framework y el lenguaje yo he seleccionado react con js vanilla y el compilador. 
 -->

# 4. ¿Que es Vite y porque lo he utilizado?

 <!-- 
 🛠️ Características principales

 🔥 Arranque inmediato: incluso en proyectos grandes, el servidor se enciende en milisegundos.

 ♻️ Hot Module Replacement (HMR): ves cambios en tiempo real sin recargar toda la página.

 🎨 Soporte para múltiples frameworks: React, Vue, Svelte, Preact, Vanilla JS, etc.

 📦 Optimización para producción: genera un bundle final usando Rollup, con código minificado y optimizado.

 🧩 Compatibilidad con plugins: aprovecha la gran comunidad de plugins de Rollup y su propio ecosistema. 

 🌍 Experiencia moderna: pensado para trabajar con TypeScript, JSX, CSS Modules, PostCSS, etc.
 -->

 # 5. Maquetación del juego

 <!--- 
 Para maquitar el proyecto primer voy a descargar la libreria para react de Material Ui donde utilizare diferentes componenetes que ya estasn listos,
 Para instalarla utilizare el comando npm install  @mui/material @emotion/react @emotion/styled, como voy utilizar bootstrap tambien solamente lo enlazare manualmente
 ------------------------------------------------------------------------------
 <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
------------------------------------------------------------------------------
 -->

<!--
    Antes de comenzar con el maquetado hago un mock para tener una guia:
    Imagen -> Inicio del Juego
    <img width="1673" height="1124" alt="image" src="https://github.com/user-attachments/assets/1b098e0d-77b1-4cac-b68c-26d61f2036b4" />
    --------------------------------------------------------------------------------------------------------------------------------

    Imagen -> Panel de edificios
-->

# 6 Funcionamiento del Juego

# 6.1. Mecánica básica
<!-- 
El jugador empieza con un botón Miaulquimia.

Al pulsarlo, tras un tiempo de espera, gana 1 moneda (Miauneda).

El tiempo de espera crece según las monedas acumuladas:
Tiempo = 0.25 segundos × nº de monedas.
 -->

# 6.2 Objetivo

<!-- 
El objetivo es construir el edificio Culto.

Al construirlo, el jugador gana la partida. 🎉 
-->
# 6.3. Recursos

<!-- 
Monedas (Miaunedas) → se obtienen con Miaulquimia.

Amatistas → se obtienen con el botón Recoger y en el Michi Mercado.

Hierbas → se obtienen con el botón Recoger y en el Michi Mercado.

Trabajadores → se obtienen construyendo Casitas (+5 por cada una).

Trigo → se produce automáticamente al construir la Boticaria. 
-->

# 6.4. Edificios y costes

<!--
 Almacén 🏠

  Coste: 2 monedas

  Desbloquea el botón Recoger y los demás edificios.

Casita 🏡

  Coste: 6 monedas + 6 amatistas

  Aporta +5 trabajadores.

  Boticaria ⚗️

  Coste: 8 monedas + 9 amatistas + 5 hierbas

  Produce trigo automático cada cierto tiempo.

Michi Mercado 🐾

  Coste: 8 amatistas + 9 hierbas

  Permite comprar amatistas o hierbas con monedas.

Molino 🌾

  Coste: 5 monedas + 8 amatistas

  Requisito previo para el Culto.

Culto ⛪

  Coste: 10 monedas + 7 hierbas + 9 amatistas

  Construirlo = victoria. 
-->

# 7 Reglas del Juego
<!--
🎮 Cómo jugar

1. Generar monedas

  *Pulsa el botón Miaulquimia para crear monedas (Miaunedas).

  *Cuantas más monedas tengas, más tardará en generarse la siguiente.

2. Construir edificios

  *Con suficientes monedas y recursos podrás construir edificios.

  *Cada edificio desbloquea nuevas funciones o recursos.

3. Recolectar recursos

  *Tras construir el Almacén, aparece el botón Recoger.

  *Cada vez que lo uses obtendrás amatistas y hierbas en cantidad aleatoria.

  *Los trabajadores aumentan la cantidad de recursos que obtienes al recoger.

4. Progresión de edificios

  *Almacén → desbloquea el botón Recoger y el resto de edificios.

  *Casitas → te dan trabajadores (+5 cada una).

  *Boticaria → empieza a generar trigo automáticamente.

  *Michi Mercado → te permite comprar amatistas y hierbas con monedas.

  *Molino → requisito para desbloquear el Culto.

  *Culto → último edificio; al construirlo ganas la partida.

5. Objetivo final

  *Tu meta es reunir los recursos suficientes para construir el Culto.

  *Una vez construido → 🎉 ¡Has ganado el juego!
-->


