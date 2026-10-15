import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// src/App.jsx
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        <div className="row">
          {/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}
          <AlumnoCard 
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />

          <AlumnoCard 
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />

          <AlumnoCard 
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estado="Matriculado"
          />

          <AlumnoCard 
            nombre="Juan David"
            carrera="ciberseguridad"
            estado="Matriculado"
          />

          <AlumnoCard 
            nombre="Miguel Luis"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />

          <AlumnoCard 
            nombre="Holiver"
            carrera="Administración Industrial"
            estado="Matriculado"
          />
        </div>
      </div>
    </>
  );
}

export default App;
