import { useState } from 'react';

// Observa que ahora estadoInicial entra como Prop[cite: 9]
const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {
  // Creamos el estado tomando el valor que viene de la Prop[cite: 9]
  const [estado, setEstado] = useState(estadoInicial);

  // Lógica dinámica para el color del badge[cite: 9]
  const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';

  // Función para alternar el estado[cite: 9]
  const cambiarEstado = () => {
    if (estado === 'Matriculado') {
      setEstado('Inactivo');
    } else {
      setEstado('Matriculado');
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">{nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{carrera}</h6>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            {/* El badge ahora muestra el estado reactivo[cite: 10] */}
            <span className={`badge ${badgeColor}`}>{estado}</span>
            <div>
              {/* Al hacer clic, ejecutamos la función que alterna el estado[cite: 10] */}
              <button
                className="btn btn-sm btn-outline-info me-2"
                onClick={cambiarEstado}
              >
                Cambiar Estado
              </button>
              <button className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;