<template>
  <div class="header-container row">
    <ul v-if="index" class="signs-container row">
      <li v-for="(obj, idx) in index" :key="idx" class="sign">
        <div v-if="letterToPrint(obj.letter)" class="sign-container row">
          <span>{{obj.sign}}</span>&nbsp;=&nbsp; <span>{{obj.letter}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data: ()=> ({
  }),
  computed: {
    index() {
      return this.$store.getters.getIndex;
    }, 
  },
  methods: {
    letterToPrint(letter) {
      return ![' ', 'ך', 'ם', 'ן', 'ף', 'ץ'].some(x => x === letter)
    },
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
@media print { body { -webkit-print-color-adjust: exact; } }
.header-container {
  margin: 20px 0;
  direction: rtl;
}
.signs-container {
    flex-wrap: wrap;
}
.sign {
    margin-left: 20px;
}
.sign-container {
  margin-bottom: 50px;
  margin-right: 20px;
  z-index: 5;
}
</style>
