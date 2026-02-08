const Estudiante = require('../models/Estudiantes');

// CREAR ESTUDIANTE
const crearEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = new Estudiante(req.body);
        await nuevoEstudiante.save();
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(400).json({ msg: "Error al crear estudiante" });
    }
};

// OBTENER TODOS LOS ESTUDIANTES
const obtenerEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener datos" });
    }
};

module.exports = { crearEstudiante, obtenerEstudiantes };