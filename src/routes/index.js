import { Router } from "express";
const router=Router();

router.get('/', (req, res) => res.render('index' ,{title: 'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title: 'Sobre Nosotros'}));
router.get('/carrito', (req, res) => res.render('Carrito' ,{title: 'Carrito'}));
router.get('/platos', (req, res) => res.render('Platos' ,{title: 'Platos'}));
router.get('/bebidas', (req, res) => res.render('Bebidas' ,{title: 'Bebidas'}));
router.get('/promociones', (req, res) => res.render('Promociones' ,{title: 'Promociones'}));
router.get('/login', (req, res) => res.render('Login' ,{title: 'Login'}));
router.get('/registro', (req, res) => res.render('Registro' ,{title: 'Registro'}));
router.get('/promobebida', (req, res) => res.render('Promobebida' ,{title: 'Promocion Bebidas'}));
router.get('/promochicharron', (req, res) => res.render('Promochicharron' ,{title: 'Promocion chicharron'}));
router.get('/promoconsumo', (req, res) => res.render('Promoconsumo' ,{title: 'Promocion Consumo'}));
router.get('/promodina', (req, res) => res.render('Promodina' ,{title: 'Promocion Dina'}));
router.get('/promohamburguesa', (req, res) => res.render('Promohamburguesa' ,{title: 'Promocion Hamburguesa'}));
router.get('/promoteque', (req, res) => res.render('Promoteque' ,{title: 'Promocion Tequeños'}));

export default router;

