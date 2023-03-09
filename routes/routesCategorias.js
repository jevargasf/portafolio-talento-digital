import express from 'express'
import { Router } from 'express';
const router = Router()
import { getCategorias, postCategoria } from '../controllers/categoriasControllers.js'


// Ruta y manejador página de inicio para listar cateogorías
router.get('/categorias', getCategorias);

// Ruta post y manejador página postear categorías
router.post('/categorias/crear', postCategoria)

export default router