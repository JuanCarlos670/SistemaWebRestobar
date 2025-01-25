import pg from 'pg';
const { Client } = pg;

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