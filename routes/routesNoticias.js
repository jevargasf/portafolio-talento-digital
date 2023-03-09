import express from 'express'
import { Router } from 'express';
const router = Router()
import { getNoticias, postNoticia } from '../controllers/noticiasController.js';


// Ruta y manejador página de inicio para listar noticias
router.get('/', getNoticias);

// Ruta post y manejador página postear noticias
router.post('/noticias/crear', postNoticia)

export default router