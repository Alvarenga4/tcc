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
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
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
      slideVibration: 63
    }
  },
  mounted () {
    this.carousel = true
  }
}
</script>
