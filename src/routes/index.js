import { Router } from "express";
import bodyParser from "body-parser";
import { RegistrarCliente } from '../public/services/Conexion.js';
import {IniciarSesionCliente} from '../public/services/Conexion.js';
const router=Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/', (req, res) => res.render('index' ,{title: 'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title: 'Sobre Nosotros'}));
router.get('/carrito', (req, res) => res.render('Carrito' ,{title: 'Carrito'}));
router.get('/platos', (req, res) => res.render('Platos' ,{title: 'Platos'}));
router.get('/bebidas', (req, res) => res.render('Bebidas' ,{title: 'Bebidas'}));
router.get('/promociones', (req, res) => res.render('Promociones' ,{title: 'Promociones'}));
router.get('/iniciarSesion', (req, res) => res.render('iniciarSesion' ,{title:'Iniciar Sesion'}));
router.get('/registrarCliente', (req, res) => res.render('registrarCliente' ,{title:'Registrar Cliente'}));
router.get('/promobebida', (req, res) => res.render('Promobebida' ,{title: 'Promocion Bebidas'}));
router.get('/promochicharron', (req, res) => res.render('Promochicharron' ,{title: 'Promocion chicharron'}));
router.get('/promoconsumo', (req, res) => res.render('Promoconsumo' ,{title: 'Promocion Consumo'}));
router.get('/promodina', (req, res) => res.render('Promodina' ,{title: 'Promocion Dina'}));
router.get('/promohamburguesa', (req, res) => res.render('Promohamburguesa' ,{title: 'Promocion Hamburguesa'}));
router.get('/promoteque', (req, res) => res.render('Promoteque' ,{title: 'Promocion Tequeños'}));

router.post('/api/register', async (req, res) => {
    const { username, password, email } = req.body;
 
    
    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }
 
    
    const resultado = await RegistrarCliente(username, password, email);
 
    if (resultado.success) { 
        res.status(201).json(resultado);
    } else {
        res.status(400).json(resultado);
    }
 });
 
 
 router.use(bodyParser.urlencoded({ extended: true }));
 router.use(bodyParser.json());
 
 
 router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
 
    if (!username || !password) {
       return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
    }
 
    const resultado = await IniciarSesionCliente(username, password);
 
    if (resultado.success) {
       res.status(200).json(resultado);
    } else {
       res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
    }
 });
 
export default router;

