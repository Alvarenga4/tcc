'use strict'

const Route = use('Route')

Route.resource('users', 'UserController')
  .apiOnly()

Route.post('sessions', 'SessionsController.create');
