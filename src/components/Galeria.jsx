import React, { useState, useEffect } from 'react';
import Foto from './Foto';
import Cargador from './Cargador';
import itemsGaleria from '../data';

export default function Galeria() {
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerFotos = async () => {
    return new Promise((resolve) => {
      resolve(itemsGaleria);
    });
  };

  useEffect(() => {
    const temporizador = setTimeout(async () => {
      const datos = await obtenerFotos();
      setFotos(datos);
      setCargando(false);
    }, 3000);

    return () => clearTimeout(temporizador);
  }, []);

  if (cargando) {
    return <Cargador mensaje="espera 3 segundos" />;
  }

  return (
    <div className="container mb-5">
      <div className="row">
        {fotos.map((foto) => (
          <Foto 
            key={foto.id} 
            imagen={foto.imagen} 
            titulo={foto.nombre} 
          />
        ))}
      </div>
    </div>
  );
}
