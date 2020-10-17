import { Router } from 'express'
import OphanagesController from './controllers/OrphanagesController'
import multer from 'multer'
import uploadConfig from './config/Upload'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', OphanagesController.index)
routes.get('/orphanages/:id', OphanagesController.show)
routes.post('/orphanages', upload.array('images') ,OphanagesController.create)



export { routes }