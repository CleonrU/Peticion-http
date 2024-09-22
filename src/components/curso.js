import React, { useState } from 'react';

function Curso() {
    const [nombre, setNombre] = useState('');
    const [creditos, setCreditos] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoCurso = {
            nombre: nombre,
            creditos: parseInt(creditos),
            descripcion: descripcion
        };

        try {
            const response = await fetch('https://test-deploy-12.onrender.com/cursos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoCurso),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Curso creado exitosamente');
                setNombre('');
                setCreditos('');
                setDescripcion('');
            } else {
                setMessage(`Error al crear el curso: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error al crear el curso');
        }
    };

    return (
        <div>
            <h2>Crear Curso</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del Curso:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Créditos:</label>
                    <input
                        type="number"
                        value={creditos}
                        onChange={(e) => setCreditos(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Crear Curso</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Curso;
