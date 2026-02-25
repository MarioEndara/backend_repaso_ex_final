const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken');

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
        // 1. Buscar el usuario
        let usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(400).json({ msg: "Usuario no existe" });

        // 2. Verificar contraseña
        if (usuario.password !== password) return res.status(400).json({ msg: "Password incorrecto" });

        // 3. Token
        const payload = {
            usuario: { id: usuario.id }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'palabraSecreta',
            { expiresIn: '8h' },
            (err, token) => {
                if (err) throw err;
                res.json({ 
                    token,
                    user: {
                        nombre: usuario.nombre,
                        email: usuario.email
                    }
                });
            }
        );

    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { 
    registrarUsuario,
    login 
};