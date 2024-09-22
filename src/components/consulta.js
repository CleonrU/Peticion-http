import React, { useState } from 'react';

function Consulta() {
    const [Carnet, setCarnet] = useState('');
    const [Estudiante, setEstudiante] = useState('');
    const [Email, setEmail] = useState('');
    const [Seccion, setSeccion] = useState('');
    const [message, setMessage] = useState('');

    const handleBuscar = async () => {
        console.log('Iniciando búsqueda...');
        try {
            const response = await fetch(`https://test-deploy-12.onrender.com/estudiantes/${Carnet}`);
            const data = await response.json();

            if (data) {
                setEstudiante(data.Estudiante);
                setEmail(data.Email);
                setSeccion(data.Seccion);
                setMessage('Datos del Alumno');
            } else {
                setMessage('No se encontró este carnet');
            }
        } catch (error) {
            console.error('Error al consultar', error);
            setMessage('Error al consultar');
        }
    };

    return (
        <div>
            <h2>Consulta de Alumnos</h2>
            <div>
                <label>Carnet:</label>
                <input
                    type="text"
                    value={Carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleBuscar}>Buscar</button>
            </div>
            {message && <p>{message}</p>}
            <div>
                <label>Estudiante:</label>
                <input type="text" value={Estudiante} disabled />
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={Email} disabled />
            </div>
            <div>
                <label>Sección:</label>
                <input type="text" value={Seccion} disabled />
            </div>
        </div>
    );
}

export default Consulta;
