<template>
  <div class="play-component column">
      <!-- <p class="title">המשחק של רותם</p> -->
      <img src="/img/cat.jpg" class="play-img"/>
    <button class="play-btn" @click="play">שחקו!</button>
    <div class="text-container category row">
      <div v-if="loading" class="loader"/>
      <p v-else>{{category}}</p>
    </div>
    <div class="text-container letter row">
      <div v-if="loading" class="loader"/>
      <p v-else >{{letter}}</p>
    </div>
  </div>
</template>

<script>

export default ({
  name: 'Play',
  data: ()=> ({
      loading: false,
      category: null,
      letter: null,
      categories: null,
      letters: null
  }),
  components: {},
  computed: {
    initCategories() {
      return ['צומח','דומם(חפץ)','צבע',"דבר כרצונך (ג'וקר)",'מחלות','אתרי טיולים','מדינה','איבר בגוף','חי','עיר','שם','מקצוע','משחק','אוכל']
    },
    initLetters() {
      return ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת']
    },
    isEmpty() {
      return !this.categories.length
    }
  },
  created() {
    this.initPlay()
  },
  methods: {
    initPlay() {
      this.categories = JSON.parse(JSON.stringify(this.initCategories));
      this.letters = JSON.parse(JSON.stringify(this.initLetters));        
    },
    play() {
      if (this.isEmpty) {
        this.initPlay()
      }
      this.loading = true;
      let idx = this.getRandomInt(0, this.categories.length -1);
      this.category = this.categories[idx];
      this.categories.splice(idx, 1);
      idx = this.getRandomInt(0, this.letters.length -1);
      this.letter = this.letters[idx];
      this.letters.splice(idx, 1)
      setTimeout(()=>{
          this.loading = false;
      }, 1500)
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
})
</script>
<style scoped lang="scss">
@import "@/assets/style.scss";
.play-component {
    align-items: center;
    margin: 50px 0;
}
.play-img {
    width: 74px;
    position: absolute;
    top: 0;
    left: 0;
}
.play-btn {
    width: 150px;
    height: 150px;
    border: none;
    border-radius: 50%;
    font-size: 40px;
    background-color: green;
    color: #fff;
    margin-bottom: 30px;
    direction: rtl;
}
.text-container {
    width: 80%;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    color: #fff;
    &.category {
        background-color: #dd481c;
        height: 110px;
        font-size: 28px;
    }
    &.letter {
        background-color: #25b0c2;
        height: 110px;
        font-size: 44px;;
    }
}
.loader {
 border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
