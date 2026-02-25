const Student = require('../models/Estudiantes'); // Asegúrate que el archivo se llame Estudiantes.js

// CREAR ESTUDIANTE (POST)
const crearEstudiante = async (req, res) => {
    const { cedula, email } = req.body;

    try {
        // Validación de duplicados (Puntos extra por lógica de negocio)
        const existe = await Student.findOne({ $or: [{ cedula }, { email }] });
        if (existe) {
            return res.status(400).json({ msg: "La cédula o el email ya están registrados" });
        }

        const nuevoEstudiante = new Student(req.body);
        await nuevoEstudiante.save();
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(400).json({ msg: "Error al crear estudiante", error });
    }
};

// OBTENER TODOS LOS ESTUDIANTES (GET)
const obtenerEstudiantes = async (req, res) => {
    try {
        // Eliminamos el .populate() porque este modelo no tiene relaciones
        const estudiantes = await Student.find(); 
        res.status(200).json(estudiantes);
    } catch (error) {
        // Este es el mensaje que veías en Postman cuando fallaba el populate
        res.status(500).json({ msg: "Error al obtener datos" }); 
    }
};

module.exports = { crearEstudiante, obtenerEstudiantes };