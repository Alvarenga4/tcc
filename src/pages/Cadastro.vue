<template class="template">
  <div class="caixa">
    <div class="header"></div>
    <form class="form">
      <div class="titulo"> Dados Pesoais </div>
      <div class="q-gutter-md row items-start">
        <q-input dark outlined class="col-5" type="text" v-model="nomecompleto" label="Nome" placeholder="Nome" hint="Digite seu nome"  />
        <q-input dark outlined class="col-5" type="text" v-model="email" label="Email" placeholder="Email" hint="Digite seu email"  />
        <q-input dark outlined class="col-5" type="text" v-model="cpf" label="CPF" placeholder="Informe seu CPF" hint="Digite seu CPF"  />
        <q-input dark outlined class="col-5" type="text" v-model="rg" label="RG" placeholder="RG" hint="Digite seu RG"  />
        <q-input dark outlined class="col-5" type="text" v-model="orgaoemissor" label="Orgão Emissor" placeholder="Digite o Orgão Emissor" hint="Digite o Orgão Emissor"  />
        <q-input dark outlined class="col-5" type="password" v-model="password" label="Digite uma senha" placeholder="Senha" hint="Informe uma senha"  />
      </div>

      <div class="titulo"> Endereço </div>
      <div class="q-gutter-md row items-start">
        <q-input dark outlined class="col-5" type="text" v-model="cep" label="CEP" placeholder="CEP" hint="Informe seu CEP"  />
        <q-input dark outlined class="col-5" type="text" v-model="logradouro" label="Logradouro" placeholder="Logradouro" hint="Informe seu Logradouro"  />
        <q-input dark outlined class="col-5" type="text" v-model="bairro" label="Bairro" placeholder="Bairro" hint="Informe seu bairro"  />
        <q-input dark outlined class="col-5" type="text" v-model="numero" label="Número" placeholder="Número" hint="Número da residencia"  />
        <q-input dark outlined class="col-5" type="text" v-model="complemento" label="Complemento" placeholder="Complemento" hint="Complemento"  />
        <q-input dark outlined class="col-5" type="text" v-model="municipio" label="Municipio" placeholder="Municipio" hint="Informe seu municipio"  />
        <q-input dark outlined class="col-5" type="text" v-model="estado" label="Estado" placeholder="Estado" hint="Informe seu estado"  />
      </div>

      <div class="titulo"> Informações Acadêmicas </div>
      <q-toggle v-model="professor" label="É professor" />
      <div v-if="professor == true" class="q-gutter-md row items-start">
        <q-input dark outlined class="col-5" type="text" v-model="formacao" label="Formação Acadêmica" placeholder="Formação" hint="Formação acadêmica"  />
        <q-input dark outlined class="col-5" type="text" v-model="faculdade" label="Faculdade" placeholder="Faculdade" hint="Informe sua instituição de ensino"  />
        <q-input dark outlined class="col-5" type="text" v-model="anoinicio" label="Inicio" mask="####" placeholder="Ano inicio" hint="Informe o ano de inicio"  />
        <q-input dark outlined class="col-5" type="text" v-model="anotermino" label="Termino" mask="####" placeholder="Ano termino" hint="Informe o ano de termino"  />
      </div>
      <q-btn id="cadastrar" class="full-width" @click="register" color="green" text-color="white" label="Cadastrar" />
    </form>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center">Código</th>
          <th class="text-center">Nome</th>
          <th class="text-center">Email</th>
          <th class="text-center">Formação</th>
          <th class="text-center">Faculdade</th>
          <th class="text-right">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(l, index) in lista" :key="index">
          <td class="text-center">{{l.id}}</td>
          <td class="text-center">{{l.nome}}</td>
          <td class="text-center">{{l.email}}</td>
          <td class="text-center">{{l.formacao}}</td>
          <td class="text-center">{{l.faculdade}}</td>
          <td class="text-right"><q-btn color="red" text-color="white" label="Remover" @click="deletar(l.id)" /></td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lista: [],
      professor: false,
      nomecompleto: '',
      email: '',
      cpf: '',
      rg: '',
      orgaoemissor: '',
      cep: '',
      logradouro: '',
      bairro: '',
      numero: '',
      complemento: '',
      municipio: '',
      estado: '',
      formacao: '',
      faculdade: '',
      anoinicio: '',
      anotermino: '',
      password: ''
    }
  },
  mounted () {
    this.listaUsuario()
  },
  methods: {
    listaUsuario () {
      console.log('Lista-Usuario')
      let configs = {
        url: this.$store.state.url + '/users',
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        timeout: this.$store.state.timeout,
        method: 'get'
      }
      this.$axios(configs).then(response => {
        console.log(response.data)
        if (response.data) {
          this.lista = response.data
        }
      })
    },
    register () {
      this.$q.loading.show({
        message: 'Aguarde, registrando dados...'
      })
      console.log('Register')
      let configs = {
        url: this.$store.state.url + '/users',
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        method: 'POST',
        data: {
          nome: this.nomecompleto,
          email: this.email,
          password: this.password,
          cpf: this.cpf,
          rg: this.rg,
          orgaoemissor: this.orgaoemissor,
          cep: this.cep,
          logradouro: this.logradouro,
          numero: this.numero,
          complemento: this.complemento,
          bairro: this.bairro,
          cidade: this.municipio,
          uf: this.estado,
          professor: this.professor,
          formacao: this.formacao,
          faculdade: this.faculdade,
          anoinicio: this.anoinicio,
          anotermino: this.anotermino
        }
      }
      console.log(configs.data)
      this.$axios(configs).then(response => {
        console.log(response)
        this.listaUsuario()
      })
    },
    deletar (id) {
      let configs = {
        url: this.$store.state.url + '/users/' + id,
        headers: { 'Authorization': 'Bearer ' + this.$q.localStorage.getItem('user_token') },
        timeout: this.$store.state.timeout,
        method: 'delete'
      }
      console.log(configs)
      console.log(id)
      this.$axios(configs).then(response => {
        console.log(response.data)
        if (response) {
          alert('Usuario deletado com sucesso!')
          this.listaUsuario()
        }
      }).catch(error => {
        console.log(error)
      }).finallly(() => this.$q.loading.hide())
    }
  }
}
</script>
<style lang="stylus">
.caixa {
  margin-left 20px
  margin-right 20px
  margin-top 20px
  margin-bottom 20px
  background-image url('../assets/background.png')
  background-repeat no-repeat
  background-size 100%
  align-items center
  background-attachment fixed
  background-position center
}
#cadastrar {
  margin-top 20px
  margin-bottom 20px
}
.titulo {
  width 100%
  background-color #2a2a2a
  border-radius 5px
  color #fff
  text-align center
  padding-top 7px
  padding-bottom 7px
  margin-top 30px
  text-transform uppercase
  opacity 0.7
  margin-bottom 20px
}
</style>
