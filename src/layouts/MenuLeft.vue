<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="header">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
           e-Teaching
        </q-toolbar-title>

        <div>v {{version}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <div class="header-menu">
        <div class="content">
          <q-avatar style="margin-top: 20px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png">
          </q-avatar>
          <p id="name_user">{{nome}}</p>
          Matricula: <p id="name_user">{{id}}</p>
        </div>
      </div>
      <q-list>
        <q-item clickable tag="a" target="_blank" @click="$router.replace({ name: 'home' })">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>Tela principal</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" @click="$router.replace({ name: 'registro' })">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro de usuário</q-item-label>
            <q-item-label caption>Cadastro de usuário</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" @click="$router.replace({ name: 'cursos' })">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastrar Curso</q-item-label>
            <q-item-label caption>Cadastro de cursos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" @click="$router.replace({ name: 'disciplina' })">
        <q-item-section avatar>
          <q-icon name="class" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Cadastrar Disciplina</q-item-label>
          <q-item-label caption>Cadastro de disciplina</q-item-label>
        </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" @click="$router.replace('/')">
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Encerrar sessão</q-item-label>
            <q-item-label caption>Fazer logout do sistema</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      version: '0.0.1',

      nome: this.$q.localStorage.getItem('user_name'),
      id: this.$q.localStorage.getItem('user_id')
    }
  },
  mounted () {
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
.header {
  background-color #000
  color #FFF
  text-align center
}
.header-menu {
  background-image: url('../assets/wallpaper.png')
  background-repeat no-repeat
  background-size 100%
  color #ffffff
  font-weight bolder
}
.content {
  margin-left 20px
}
</style>
