<template>
  <q-page class="bg-login flex flex-left body">
    <div id="block" class="q-pa-md input" style="width: 400px">
        <q-card v-for="(l, index) in lista" :key="index" class="my-card col-6">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom">
              <div class="text-h6">{{l.disciplina}}</div>
              <div class="text-subtitle2">{{l.professor}}</div>
            </div>
          </q-img>

          <q-card-actions>
            <q-btn @click="entrar(l.id)" flat>entrar na sala</q-btn>
            <q-btn flat>sair da sala</q-btn>
          </q-card-actions>
        </q-card>

        <label class="label" v-if="lista.length <= 0">NENHUMA SALA DE AULA ENCONTRADA :(</label>

    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      lista: []
    }
  },
  mounted () {
    let configs = {
      url: this.$store.state.url,
      headers: { 'Content-Type': 'application/json' },
      timeout: this.$store.state.timeout,
      method: 'get'
    }
    console.log(configs)
  },
  methods: {
    entrar (id) {
      this.$router.replace('aula/' + id)
    }
  }
}
</script>
<style lang="stylus">
.label {
  color: #FFF
  font-weight bold
  text-align center
}
.body {
  background-image url('../assets/background.png')
  background-repeat no-repeat
  background-size 100%
  background-attachment fixed
  background-position center
}
.btnStore {
  margin-top 10px
}
</style>
