import express from 'express'
import { Router } from 'express';
const router = Router()
import { getUsuarios, postUsuario } from '../controllers/usuariosController.js'; 

// Ruta y manejador página de inicio para listar usuarios
router.get('/usuarios', getUsuarios);

// Ruta post y manejador página postear usuarios
router.post('/usuarios/registro', postUsuario)

export default router