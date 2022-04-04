import { Router } from 'express'
import * as chinchillasCtrl from '../controllers/chinchillas.js'
const router = Router()

// index
router.get('/', chinchillasCtrl.index)

// create
router.post('/', chinchillasCtrl.create)

// update
router.put('/:id', chinchillasCtrl.update)

// delete
router.delete('/:id', chinchillasCtrl.delete)

// show 
router.get('/:id', chinchillasCtrl.show)

export {
  router
}
