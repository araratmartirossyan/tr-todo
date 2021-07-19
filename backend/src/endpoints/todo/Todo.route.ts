import routerPromise from 'express-promise-router'

import { get, getAll, create, update, deleteItem } from './Todo.controller'

const router = routerPromise()

router.route('/:id').get(get)
router.route('/').post(create)
router.route('/').get(getAll)
router.route('/:id').put(update)
router.route('/:id').delete(deleteItem)

export default router
