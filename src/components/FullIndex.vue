<template>
  <div class="header-container row">
    <ul v-if="index" class="signs-container row">
      <li v-for="(obj, idx) in sortedIndex" :key="idx" class="sign">
        <div class="sign-container row">
          <i :class="`em-${obj.sign}`" class="sign-icon em"></i>
          &nbsp;=&nbsp; 
          <span>{{obj.letter}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['index'],
  data: ()=> ({}),
  computed: {
    sortedIndex() {
      const ignoreLetters = [' ', 'ך', 'ם', 'ן', 'ף', 'ץ'];
      const letters = new Set(ignoreLetters);
      return [...new Set(this.index.filter(obj => !letters.has(obj.letter)))]
    }
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
  max-width: 80px;
  margin-left: 100px;
}
.sign-container {
  margin-bottom: 40px;
  margin-right: 20px;
  z-index: 5;
}
.sign-icon {
  min-width: 27px;
}
</style>
