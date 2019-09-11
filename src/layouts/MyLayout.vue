<template>
  <q-layout view="lHh Lpr lFf">

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
