const Materia = require('../models/Materias');

const crearMateriasDefault = async () => {
    const materiasEjemplo = [
        { nombre: "Programación", codigo: "TDSD214", creditos: 4, nivel: "Segundo Semestre" },
        { nombre: "Bases de Datos", codigo: "TDSD343", creditos: 3, nivel: "Tercer Semestre" },
        { nombre: "Desarrollo de Aplicaciones Móviles", codigo: "TDSD514", creditos: 4, nivel: "Quinto Semestre" }
    ];

    try {
        for (const m of materiasEjemplo) {
            const existe = await Materia.findOne({ codigo: m.codigo });
            if (!existe) {
                const nuevaMateria = new Materia(m);
                await nuevaMateria.save();
                console.log(`✅ Materia creada: ${m.nombre}`);
            }
        }
        console.log("ℹ️ Verificación de materias completada");
    } catch (error) {
        console.error("❌ Error al precargar materias:", error);
    }
};

module.exports = crearMateriasDefault;