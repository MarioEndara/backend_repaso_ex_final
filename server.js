//Servidor sin restricciones(configuracion de Cors)
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/basedatos');
const authRoutes = require('./routes/authRoutes');
const usuariosRutas = require('./routes/usuariosRoutes');
const crearAdminDefault = require('./utils/createAdmin');
const crearMateriasDefault = require('./utils/createMaterias');

// Cargar variables de entorno
dotenv.config();


// Conexion con la base de datos y creación de admin por defecto
connectDB().then(() => {
    crearAdminDefault();
    crearMateriasDefault();
});

const app = express();

// MIDDLEWARES
// Conexion desde cualquier origen- Frontend local o desplegado
app.use(cors()); 
app.use(express.json());
app.use('/api', authRoutes);

// Rutas
app.use('/api/usuarios', usuariosRutas);
app.use('/api/materias', require('./routes/materiaRoutes'));
app.use('/api/estudiantes', require('./routes/estudianteRoutes'));

// El puerto para Render [cite: 199]
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor listo en puerto ${PORT}`));
