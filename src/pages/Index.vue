<template>
  <q-page id="body" class="flex flex-center">

    <q-dialog v-model="carousel">
      <q-carousel
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        height="200px"
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="column no-wrap flex-center">
          <q-icon name="style" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ bemvindo }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
          <q-icon name="book" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ atividade }} -  teste
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="check" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ acesso }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>

    <form id="form">
      <div id="header">
        <img alt="e-Teaching logo" src="../statics/logo.jpg" width="300" height="300">
      </div>
      <q-input type="number" v-model="rm" label="Informe sua credenciais" placeholder="R.M" hint="Digite seu R.M" :dense="dense" />
      <q-input v-model="password" :type="isPwd ? 'password' : 'text'" hint="Informe sua senha">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            placeholder="Password"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn color="white" text-color="black" id="button" icon="logout" label="Acessar" />
    </form>

  </q-page>
</template>
<style lang="stylus">
#body {
  background-color #8e0606
  height 100%
  margin 0px
  padding 0
}
#form {
  background-color #FFF
  height 100%
  padding-left 20px
  padding-right 20px
  padding-bottom 40px
  border-radius 10px
  box-shadow: 0 0 4em #4c4c4c;
}
#button {
  width 90%
}
</style>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      rm: '',
      password: '',
      carousel: false,
      card: false,
      sliders: false,

      slide: 1,
      bemvindo: 'Olá! Seja bem vindo ao sistema educacional e-Teaching, uma plataforma totalmente resposiva e interativa.',
      atividade: 'Aqui você terá uma experiencia única com professores, alunos e equipe acaemica para te auxiliarem no que for preciso.',
      acesso: 'Solicite um acesso agora mesmo a secretaria acadêmica de sua escola e bora pros estudos!',

      stars: 3,

      slideVol: 39,
      slideAlarm: 56,
      slideVibration: 63,
      isPwd: true,
      dense: false
    }
  },
  mounted () {
    this.carousel = true
  }
}
</script>
