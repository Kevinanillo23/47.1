const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Permitir CORS para todas las solicitudes
app.use(express.json());

// Endpoint GET
app.get('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint GET');
});

// Endpoint POST
app.post('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint POST');
});

// Endpoint PUT
app.put('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint PUT');
});

// Endpoint PATCH
app.patch('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint PATCH');
});

// Endpoint DELETE
app.delete('/api/endpoint', (req, res) => {
    res.send('Soy un endpoint DELETE');
});

// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0', () => {
    console.log(`Servidor en http://kevin_23.com:${PORT}`);
});
