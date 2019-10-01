'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['nome', 'email', 'password', 'cpf', 'rg',
      'orgaoemissor', 'cep', 'logradouro', 'numero', 'bairro', 'cidade', 'uf', 'professor',
      'formacao', 'faculdade', 'anoinicio', 'anotermino'])

    const user = await User.create(data)

    return user
  }

  async index () {
    const users = User.all()

    return users
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async update ({ params, request, response }) {
    const user = await User.findOrFail(params.id)

    const data = request.only([
      'nome',
      'email',
      'password',
      'cpf',
      'rg',
      'orgaoemissor',
      'cep',
      'logradouro',
      'numero',
      'bairro',
      'cidade',
      'uf',
      'professor',
      'formacao',
      'faculdade',
      'anoinicio',
      'anotermino'
    ])

    user.merge(data)

    await user.save()

    return user
  }

  async destroy ({ params, auth, response }) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}

module.exports = UserController
