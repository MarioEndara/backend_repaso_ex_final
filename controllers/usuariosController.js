const Usuario = require('../models/Usuarios');

// Función para registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({
            msg: "Usuario creado con éxito",
            usuario: nuevoUsuario
        });
    } catch (error) {
        res.status(400).json({ msg: "Error al registrar usuario", error });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        
        // Validación exacta según la guía 
        if (usuario && usuario.password === password) {
            res.status(200).json({
                msg: `Bienvenido - ${usuario.nombre}`, // 
                user: usuario
            });
        } else {
            res.status(401).json({ msg: "Usuario o contraseña incorrectos." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

module.exports = { 
    registrarUsuario,
    login 
};