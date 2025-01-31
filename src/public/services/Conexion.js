import pg from 'pg';
const { Client } = pg;
import bcrypt from 'bcrypt';

const config ={
    user: 'db_restobar_user',
    host: 'dpg-cuaenvaj1k6c73e4rqfg-a.oregon-postgres.render.com',
    database: 'db_restobar',
    password: 'vkpL6RifKKNVOWqjJi2bAOWHJJpnny1D',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar() {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        console.log('Conexión exitosa');
        return cliente;
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

export async function RegistrarCliente(username, password, email) {
    const cliente = new Client(config);
    try {
        await cliente.connect();

        // Verificar si el usuario o correo ya existen
        const verificarQuery = 'SELECT * FROM cliente WHERE username = $1 OR email = $2';
        const verificarValores = [username, email];
        const verificarResultado = await cliente.query(verificarQuery, verificarValores);

        if (verificarResultado.rows.length > 0) {
            return { success: false, message: 'El usuario o correo ya están registrados' };
        }

        // Encriptar la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insertar nuevo usuario
        const insertarQuery = `
            INSERT INTO cliente (username, password, email)
            VALUES ($1, $2, $3) RETURNING id, username, email;
        `;
        const insertarValores = [username, hashedPassword, email];
        const insertarResultado = await cliente.query(insertarQuery, insertarValores);

        return {
            success: true,
            message: 'Cliente registrado exitosamente',
            user: insertarResultado.rows[0],
        };
    } catch (error) {
        console.error('Error en la función RegistrarCliente:', error);
        return { success: false, message: 'Error en el servidor' };
    } finally {
        await cliente.end();
    }
}
export async function IniciarSesionCliente(username, password) {
    const cliente = new Client(config);
    try {
        await cliente.connect();

        // Verificar si el usuario existe
        const verificarQuery = 'SELECT * FROM cliente WHERE username = $1';
        const verificarValores = [username];
        const verificarResultado = await cliente.query(verificarQuery, verificarValores);

        if (verificarResultado.rows.length === 0) {
            return { success: false, message: 'Usuario no encontrado' };
        }

        const user = verificarResultado.rows[0];

        // Comparar la contraseña
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return { success: false, message: 'Contraseña incorrecta' };
        }

        return {
            success: true,
            message: 'Inicio de sesión exitoso',
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        };
    } catch (error) {
        console.error('Error en la función IniciarSesionCliente:', error);
        return { success: false, message: 'Error en el servidor' };
    } finally {
        await cliente.end();
    }
}