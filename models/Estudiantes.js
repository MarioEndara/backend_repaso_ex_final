// Contiene todos los campos solicitados de estudiantes
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    cedula: { type: String, required: true },
    fecha_nacimiento: { type: String },
    ciudad: { type: String },
    direccion: { type: String },
    telefono: { type: String },
    email: { type: String }
});

module.exports = mongoose.model('Student', studentSchema);