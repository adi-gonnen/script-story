<template>
  <div class="header-container row">
    <ul v-if="index" class="signs-container column">
      <li v-for="(obj, idx) in index" :key="idx" class="sign column">
        <div v-if="!ignoreLetter(obj.letter)" class="sign-container row">
          <div>{{obj.sign}}</div>
          <div class="count">({{obj.count}})</div>
          <div>____</div>
        </div>
      </li>
    </ul>
    <ul v-if="letters" class="signs-container column">
      <li v-for="(letter, idx) in letters" :key="idx" class="sign column">
        <div class="sign-container row">
          <div>{{letter}}</div>
          <span class="checkbox"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Icons',
  data: ()=> ({}),
  computed: {
   ...mapState({
      index: state => state.index
    }),
    ...mapGetters({
      letters: 'soretedLetters'
    }),
    ignoreLetter() {
      return letter => {
        return [' ', 'ך', 'ם', 'ן', 'ף', 'ץ'].some(x => x === letter)
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
@media print { body { -webkit-print-color-adjust: exact; } }
.header-container {
  margin: 20px 0;
  direction: rtl;
  justify-content: space-around;
  // transform: rotate(90deg);
}
.signs-container {
    max-height: 885px;
    flex-wrap: wrap;
}
.sign {
    max-width: 80px;
    margin-left: 100px;
}
.sign-container {
  margin-bottom: 50px;
  margin-right: 20px;
  z-index: 5;
}
.count {
  margin: 0 10px;
}
.checkbox {
  min-width: 30px;
  min-height: 28px;
  margin: 0 10px;
  border: 1px solid black;
}
</style>
