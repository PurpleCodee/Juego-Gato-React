# 🐱 Juego-Gato-React

![Node](https://img.shields.io/badge/Node.js-18.x-green)
![npm](https://img.shields.io/badge/npm-9.x-red)
![Vite](https://img.shields.io/badge/Vite-React-blueviolet)
![License](https://img.shields.io/badge/license-MIT-yellow)

## 1. 📌 Concepto del proyecto
Este proyecto consiste en la **refactorización de un juego creado originalmente con HTML5, CSS3 y JS Vanilla**, adaptado ahora a **React** y **Bootstrap** para mejorar la maquetación, la escalabilidad y la práctica con frameworks modernos.  

---

## 2. 🎨 Temática del Juego
**MIAUGIC KINGDOM: El Reino de los Michips**  

En este reino, los gatos (Michips) dominan a los humanos gracias a sus poderes mágicos.  
El jugador deberá **gestionar recursos, construir edificios y progresar** hasta alcanzar el **Culto**, el edificio final que representa la victoria.

### 2.1  Mocks de la interfaz
![Mockup escritorio inicio](./docs/Mocks%20juego%20React/Inicio_vista_pc.png)
![Mockup escritorio edificios](./docs/Mocks%20juego%20React/Edificios_vista_pc.png) 
![Mockup movil inicio](./docs/Mocks%20juego%20React/Inicio_vista_movil.png) 
![Mockup movil edificios](./docs/Mocks%20juego%20React/Edificios_vista_movil.png) 
    

---

      
---

## 3. ⚙️ Requisitos del sistema
Antes de ejecutar el proyecto, asegúrate de tener instalado:  

- [Node.js](https://nodejs.org/) (v18 o superior recomendada)  
- npm (gestor de paquetes, viene incluido con Node)  
- Git (opcional, para clonar el repositorio)  

Verifica tu versión de Node con:  
```bash
node -v
```
Y la de npm con:  
```bash
npm -v
```

---

## 4. 🚀 Instalación y ejecución
Clona el repositorio y entra en el directorio del proyecto:  
```bash
git clone git@github.com:PurpleCodee/Juego-Gato-React.git
cd Juego-Gato-React
```

Instala las dependencias necesarias:  
```bash
npm install
```

Ejecuta el proyecto en modo desarrollo:  
```bash
npm run dev
```

Abre el navegador en:  
```
http://localhost:5173
```

Para generar la versión de producción:  
```bash
npm run build
```

---

## 5. 🛠️ Tecnologías utilizadas
- **React** → librería para construir la UI.  
- **Vite** → bundler rápido y ligero para desarrollo.  
- **Bootstrap** → maquetación responsiva.  
- **Material UI (MUI)** → algunos componentes listos para usar.  

---

## 6. 🕹️ Funcionamiento del Juego

### 6.1 Mecánica básica
- Empiezas con el botón **Miaulquimia**, que genera monedas (Miaunedas).  
- Cuantas más monedas tengas, más tarda en generarse la siguiente.  

### 6.2 Objetivo
- Construir el edificio **Culto** → 🎉 ¡Victoria!  

### 6.3 Recursos
- **Monedas** → con Miaulquimia.  
- **Amatistas y Hierbas** → con el botón Recoger o en el Michi Mercado.  
- **Trabajadores** → con Casitas (+5 cada una).  
- **Trigo** → producido automáticamente por el molino.  

### 6.4 Edificios y costes
- **Almacén** → 2 monedas.  
- **Casita** → 6 monedas + 6 amatistas.  
- **Boticaria** → 8 monedas + 9 amatistas + 5 hierbas.  
- **Michi Mercado** → 8 amatistas + 9 hierbas.  
- **Molino** → 5 monedas + 8 amatistas.  
- **Culto** → 10 monedas + 7 hierbas + 9 amatistas + 5 panes + 10 trabajadores.  

---

## 7. 📜 Reglas del Juego
1. Pulsa **Miaulquimia** para ganar monedas.  
2. Construye el **Almacén** para desbloquear recursos.  
3. Usa **Recoger** para obtener amatistas y hierbas.  
4. Construye **Casitas** para obtener trabajadores.  
5. Construye la **Boticaria** para empezar desbloquear el molino y el mercado.  
6. En el **Michi Mercado** podrás comprar amatistas y hierbas con monedas y pan con trigo.  
7. Construye el **Molino** para empezar a generar trigo y poder comprar pan.  
8. Construye el **Culto** → 🎉 ¡Has ganado el juego!  

---

## 8. 📂 Estructura del proyecto
```
src/
 ├── components/
 │    ├── Inicio/
 │    │    ├── Inicio.jsx
 │    │    ├── Inicio.css
 │    │    └── assets/
 │    └── Edificios/
 │         ├── Edificios.jsx
 │         ├── Edificios.css
 │         └── assets/
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 9. 📜 Licencia
Este proyecto se distribuye bajo la licencia MIT.  
