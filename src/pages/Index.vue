<template>
  <q-page class="flex flex-center">
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
            {{ atividade }}
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
    <q-input v-model="rm" label="Informe sua credenciais" placeholder="Ex: 0123456" hint="Digite seu R.M" :dense="dense" />
    <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Informe sua senha">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn color="white" text-color="balck" id="button" icon="logout" label="Acessar" />
  </q-page>
</template>
<style lang="stylus">
#button {
  margin-top -100px
  margin-left 10px
  margin-right 10px
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
      bemvindo: 'Olá! Seja bem vindo ao sistema educacional e-Teaching! Uma plataforma totalmente resposiva e interativa.',
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
