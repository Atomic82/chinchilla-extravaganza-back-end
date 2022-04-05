import { Router } from 'express'
import * as chinchillasCtrl from '../controllers/chinchillas.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
const router = Router()



/*-------------- Public Routes */

router.get('/:id', chinchillasCtrl.show)
router.get('/', chinchillasCtrl.index)

/*-------------- Protected Routes */
router.use(decodeUserFromToken)

router.post('/', checkAuth, chinchillasCtrl.create)
router.put('/:id', checkAuth, chinchillasCtrl.update)
router.delete('/:id', checkAuth, chinchillasCtrl.delete)



export {
  router
}
