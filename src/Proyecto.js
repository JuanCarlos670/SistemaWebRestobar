import express from 'express';
import {dirname,join} from 'path';
import {fileURLToPath} from 'url';
import router from './routes/index.js';
import { Conectar } from './public/services/Conexion.js';
import cors from 'cors'; // Importa el paquete CORS

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(join(__dirname, 'public'))); 
app.use(cors()); // Habilita CORS
app.use(router);

Conectar();
// app.get('/', (req, res) => res.render('index'));
app.listen(3000);
console.log('Server is running on http://localhost:3000');