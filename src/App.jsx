import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// src/App.jsx
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador'; // <--- Importamos el componente Contador[cite: 8]

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole estadoInicial[cite: 11] */}
          <AlumnoCard 
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado"
          />

          <AlumnoCard 
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />

          <AlumnoCard 
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />

          <AlumnoCard 
            nombre="Juan David"
            carrera="ciberseguridad"
            estadoInicial="Matriculado"
          />

          <AlumnoCard 
            nombre="Miguel Luis"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />

          <AlumnoCard 
            nombre="Holiver"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />
        </div>

        {/* 4. Renderizamos el contador interactivo al final[cite: 8] */}
        <Contador />
      </div>
    </>
  );
}

export default App;