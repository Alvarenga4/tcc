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
        <img alt="e-Teaching logo" src="~assets/logo.jpg" width="70" height="70">
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
      <q-list>
        <q-item clickable tag="a" target="_blank" @click="$router.replace('/registro')">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cadastro de usuário</q-item-label>
            <q-item-label caption>Cadastro de usuário</q-item-label>
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
      version: '0.0.1'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
.header {
  background-color #FFF
  color #000
  text-align center
}
</style>
