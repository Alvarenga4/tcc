
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'registro',
        name: 'registroaluno',
        component: () => import('pages/RegistroAluno.vue')
      }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/MenuLeft.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('pages/Home.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/registro-usuarios',
        name: 'registro',
        component: () => import('pages/Cadastro.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/aula/:id',
        name: 'aula',
        component: () => import('pages/Aula.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/criar_aula/cadastrar',
        name: 'cursos',
        component: () => import('pages/Cursos.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/criar_disciplina/cadastrar',
        name: 'disciplina',
        component: () => import('pages/Disciplina.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
