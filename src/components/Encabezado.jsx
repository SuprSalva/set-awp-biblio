import React from 'react';

export default function Encabezado({ titulo }) {
  return (
    <header className="bg-primary text-white text-center py-4 mb-4">
      <div className="container">
        <h1>{titulo}</h1>
        <p className="lead">Galeria de Fotos</p>
      </div>
    </header>
  );
}
