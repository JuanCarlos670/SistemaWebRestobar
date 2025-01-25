import { Router } from "express";
const router=Router();

router.get('/', (req, res) => res.render('index' ,{title: 'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title: 'Sobre Nosotros'}));
router.get('/carrito', (req, res) => res.render('Carrito' ,{title: 'Carrito'}));
router.get('/platos', (req, res) => res.render('Platos' ,{title: 'Platos'}));
router.get('/bebidas', (req, res) => res.render('Bebidas' ,{title: 'Bebidas'}));
router.get('/promociones', (req, res) => res.render('Promociones' ,{title: 'Promociones'}));

export default router;

