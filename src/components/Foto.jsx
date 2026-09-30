import React from 'react';

export default function Foto({ imagen, titulo, descripcion, categoria }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={titulo} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
          <span className="badge bg-secondary mb-2">{categoria}</span>
          <h5 className="card-title text-capitalize">{titulo}</h5>
          <p className="card-text text-muted">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
