<template>
  <q-page class="bg-login flex flex-center body">
    <div id="block" class="q-pa-md input" style="width: 400px">

      <q-input id="input" rounded outlined placeholder="EMAIL" class="full-width" v-model="email">
        <template v-slot:append>
          <q-icon name="person" color="white" />
        </template>
      </q-input>

      <q-input rounded outlined placeholder="SENHA" class="full-width input" type="password" v-model="password">
        <template v-slot:append>
          <q-icon name="security" color="white" />
        </template>
      </q-input>
      <q-btn id="botao" @click="login" class="full-width" color="secondary" icon="logout" />
      <template>
        <q-icon name="book" color="white" /> <label @click="register">Registre-se</label>
      </template>
    </div>
  </q-page>
</template>
<style lang="stylus" scoped>
* {
  margin 0
  padding 0
}
.body {
  background-image url('../assets/wallpaper.png')
  background-repeat no-repeat
  height 100%
  background-size cover
  align-items center
  background-attachment fixed
  background-position center
  color #FFF
  margin-bottom 10px
  text-align center
  font-weight bold
  font-size 16px
}
#block {
  margin-top -100px
  font-size 15px
}
#botao {
  margin-top 10px
}

.input {
  margin-top 10px
  color #FFF
}
</style>
<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted () {
  },
  methods: {
    register () {
      console.log('Register')
    },
    login () {
      this.$q.loading.show({
        delay: 1,
        message: 'Aguarde...' // ms
      })
      let configs = {
        url: this.$store.state.url + '/sessions',
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        data: {
          email: this.email,
          password: this.password
        }
      }
      console.log(configs.data)
      this.$axios(configs).then(response => {
        if (response.data) {
          this.$router.replace('home')
          this.$q.localStorage.set('user_id', response.data.id)
          this.$q.localStorage.set('user_token', response.data.token)
          this.$q.localStorage.set('user_name', response.data.nome)
          this.$q.localStorage.set('user_cpf', response.data.cpf)
          this.$q.localStorage.set('user_cep', response.data.cep)
          this.$q.localStorage.set('user_logradouro', response.data.logradouro)
          this.$q.localStorage.set('user_bairro', response.data.bairro)
          this.$q.localStorage.set('user_numero', response.data.numero)
          this.$q.localStorage.set('user_cidade', response.data.cidade)
          this.$q.localStorage.set('user_professor', response.data.professor)
          this.$q.localStorage.set('user_uf', response.data.uf)
          console.log(this.$q.localStorage.getItem('user_name'))
        }
      }).catch(error => {
        console.log(error)
      }).finally(() => this.$q.loading.hide())
    }
  }
}
</script>
