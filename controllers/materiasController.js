const Materia = require('../models/Materias');

// Obtener todas las materias
const obtenerMaterias = async (req, res) => {
    try {
        const materias = await Materia.find();
        res.json(materias);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener materias" });
    }
};

// Crear una materia nueva
const crearMateria = async (req, res) => {
    try {
        const nuevaMateria = new Materia(req.body);
        await nuevaMateria.save();
        res.status(201).json(nuevaMateria);
    } catch (error) {
        res.status(400).json({ msg: "Error al crear materia", error });
    }
};

module.exports = { obtenerMaterias, crearMateria };