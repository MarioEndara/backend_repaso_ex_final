const User = require('../models/Usuarios');

const login = async (req, res) => {
    const { email, password } = req.body; // [cite: 371, 372]

    try {
        // 1. Buscar al usuario por email
        const user = await User.findOne({ email });

        // 2. Verificar si existe y si la clave coincide
       
        if (user && user.password === password) {
            res.status(200).json({
                msg: `Bienvenido - ${user.nombre}`, // 
                user: {
                    id: user._id,
                    nombre: user.nombre,
                    apellido: user.apellido
                }
            });
        } else {
            // Mensaje de error
            res.status(401).json({ msg: "Usuario o contraseña incorrectos." });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error en el servidor" });
    }
};

module.exports = { login };