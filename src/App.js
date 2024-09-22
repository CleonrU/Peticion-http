import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Consulta from './components/consulta'; // Importar el componente de consulta de alumnos
import Curso from './components/curso'; // Importar el componente de creación de cursos
import './App.css'; // Asegúrate de que los estilos están en App.css

function App() {
    return (
        <Router>
            <div className="app-container">
                {/* Navbar */}
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/consulta-alumnos">Consulta de Alumnos</Link>
                        </li>
                        <li>
                            <Link to="/crear-curso">Crear Curso</Link>
                        </li>
                    </ul>
                </nav>

                {/* Contenido del cuerpo */}
                <div className="container">
                    <Routes>
                        {/* Definir las rutas */}
                        <Route path="/consulta-alumnos" element={<Consulta />} />
                        <Route path="/crear-curso" element={<Curso />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
