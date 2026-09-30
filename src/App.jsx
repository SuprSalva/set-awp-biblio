import React from 'react';
import Encabezado from './components/Encabezado';
import Galeria from './components/Galeria';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      <Encabezado titulo="set-biblio-awp" />
      <main>
        <Galeria />
      </main>
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-0">xamen</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
