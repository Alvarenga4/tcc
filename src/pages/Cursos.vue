<template>
  <q-page class="content">
    <div class="container">
      <label class="label">Informe o titulo do curso</label>
      <q-input outlined class="input" type="text" v-model="descricao" label="Curso" hint="Nome do curso" />
      <q-btn @click="cadastrar" class="full-width" text-color="white" label="Cadastrar" color="black" />
    </div>
    <q-markup-table class="table">
      <thead>
        <tr>

          <th class="text-center">Código</th>
          <th class="text-center">Nome do Curso</th>
          <th class="text-center">Data de cadastro</th>
          <th class="text-center">Data de atualização</th>
          <th class="text-right">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(l, index) in lista" :key="index">
          <td class="text-center">{{l.id}}</td>
          <td class="text-center">{{l.descricao}}</td>
          <td class="text-center">{{l.created_at}}</td>
          <td class="text-center">{{l.updated_at}}</td>
          <td class="text-right"><q-btn color="red" text-color="white" label="Remover" @click="deletar(l.id)" /></td>
        </tr>
      </tbody>
    </q-markup-table>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      descricao: '',
      lista: []
    }
  },
  mounted () {
    return this.listarCursos()
  },
  methods: {
    cadastrar () {
      let configs = {
        url: this.$store.state.url + '/cursos',
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        method: 'post',
        data: {
          descricao: this.descricao
        }
      }
      console.log(configs)
      this.$axios(configs).then(response => {
        if (response.data) {
          alert('Curso cadastrardo com sucesso')
          return this.listarCursos()
        }
      }).catch(error => {
        alert('Erro ao cadastrar curso')
        console.log(error.response)
      })
    },
    listarCursos () {
      let configs = {
        url: this.$store.state.url + '/cursos',
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        method: 'get'
      }
      console.log(configs)
      this.$axios(configs).then(response => {
        if (response.data) {
          console.log(response.data)
          this.lista = response.data
        }
      }).catch(error => {
        alert('Erro ao cadastrar curso')
        console.log(error.response)
      })
    },
    deletar (id) {
      let configs = {
        url: this.$store.state.url + '/cursos/' + id,
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        timeout: this.$store.state.timeout,
        method: 'delete'
      }
      console.log(configs)
      console.log(id)
      this.$axios(configs).then(response => {
        console.log(response.data)
        if (response) {
          alert('Curso deletado com sucesso!')
          this.listarCursos()
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.container {
  margin-left 30px
  margin-right 30px
  padding 0
  justify-content center
}
.container > label {
  color #FFF,
  font-weight bolder
  matgin-top 10px
}
.table {
  margin-top 30px
}
</style>
