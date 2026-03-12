/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('signup', [controllers.NewAccount, 'store'])
        router.post('login', [controllers.AccessToken, 'store'])
        router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
      })
      .prefix('auth')
      .as('auth')

    router.patch('products/:id/forge', [controllers.Products, 'forge'])
    router.resource('products', controllers.Products).apiOnly()

    router.get('raw-materials/list-all', [controllers.RawMaterials, 'listAll'])
    router.post('raw-materials/seed', [controllers.RawMaterials, 'seed'])
    router.resource('raw-materials', controllers.RawMaterials).apiOnly()

    router.resource('forges', controllers.Forges).apiOnly().except(['show', 'update'])
  })
  .prefix('/api/v1')
