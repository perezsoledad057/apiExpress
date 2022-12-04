
import {Router} from 'express'
import { deleteclientes, getclientes, getcliente, patchclientes, postclientes, putclientes,  } from '../controllers/clientes.controllers.js'
const router=Router()

router.get('/clientes',getclientes)

router.get('/clientes/:id', getcliente)

router.post('/clientes', postclientes)

router.put('/clientes/:id', putclientes)

router.patch('/clientes/:id', patchclientes)

router.delete('/clientes/:id', deleteclientes)

export default router
