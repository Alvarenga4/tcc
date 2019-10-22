<template>
  <q-page class="content">
    <div class="container">
      <label class="label">Informe o titulo da disciplina</label>
      <q-input outlined class="input" type="text" v-model="descricao" label="Disciplina" hint="Nome da disciplina" />
      <q-select
        filled
        v-model="id"
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="cursos"
        hint="Associar curso"
        required
        style="width: 100%; padding-bottom: 32px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-btn class="full-width" @click="cadastrar" text-color="white" label="Cadastrar" color="black" />
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
        <tr v-for="(l, index) in disciplinas" :key="index">
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
      id: '',
      model: null,
      cursos: null,
      descricao: '',
      disciplinas: []
    }
  },
  mounted () {
    let configs = {
      url: this.$store.state.url + '/cursos',
      headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
      method: 'get'
    }
    console.log(configs)
    this.$axios(configs).then(response => {
      if (response.data) {
        console.log(response.data)
        this.cursos = response.data.map(lista => ({ 'value': lista.id, 'label': lista.descricao }))
      }
    }).catch(error => {
      console.log(error)
    })

    return this.listaDisciplinas()
  },
  methods: {
    listaDisciplinas () {
      let configs = {
        url: this.$store.state.url + '/disciplinas',
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        method: 'get'
      }
      console.log(configs)
      this.$axios(configs).then(response => {
        if (response.data) {
          console.log(response.data)
          this.disciplinas = response.data
        }
      }).catch(error => {
        console.log(error)
      })
    },

    cadastrar () {
      let configs = {
        url: this.$store.state.url + '/disciplinas',
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        method: 'post',
        data: {
          descricao: this.descricao,
          id: this.curso
        }
      }
      console.log(configs.data)
    }
  }
}
</script>
