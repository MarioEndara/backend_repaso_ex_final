const jwt = require('jsonwebtoken');

const protegerRuta = (req, res, next) => {
    let token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: "No hay token, permiso denegado" });
    }

    try {
        // Quitamos la palabra 'Bearer ' si es que viene en el header
        if (token.startsWith('Bearer ')) {
            token = token.split(' ')[1];
        }
        
        const cifrado = jwt.verify(token, process.env.JWT_SECRET || 'palabraSecreta');
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Token no válido" });
    }
};

module.exports = protegerRuta;