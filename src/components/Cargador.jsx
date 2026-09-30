import React from 'react';

export default function Cargador({ mensaje }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '50vh' }}>
      <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
        <span className="visually-hidden">Cargando...</span>
      </div>
      <h4>{mensaje || 'Cargando imagenes'}</h4>
    </div>
  );
}
