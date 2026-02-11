const Usuario = require('../models/Usuarios');

const crearAdminDefault = async () => {
    try {
        const existeAdmin = await Usuario.findOne({ email: "mendara2009@gmail.com" });
        
        if (!existeAdmin) {
            const admin = new Usuario({
                nombre: "Admin",
                apellido: "Sistema",
                email: "mendara2009@gmail.com",
                password: "admin123" // En el examen lo hashearemos, por ahora deja así
            });
            await admin.save();
            console.log("✅ Usuario administrador creado por defecto");
        } else {
            console.log("ℹ️ El administrador ya existe");
        }
    } catch (error) {
        console.error("❌ Error al crear admin inicial:", error);
    }
};

module.exports = crearAdminDefault;