<template>
  <div v-if="hiddenStory" class="header-container">
    <ul class="story-container column">
      <li v-for="(line, idx) in hiddenStory" :key="idx" class="story-line column">
        <div class="empty-line row">
          <p v-for="(letter, index) in line" :key="index" :class="letter.class">{{letter.letter}}</p>
        </div>
        <div class="symbol-line row">
          <p v-for="(letter, index) in line" :key="index" :class="letter.class">{{letter.letter}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Story",
  computed: {
    hiddenStory() {
      return this.$store.getters.hiddenStory;
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
@media print {
  body {
    -webkit-print-color-adjust: exact;
  }
}
.story-container {
  flex-wrap: wrap;
  z-index: 5;
  margin: 0 20px;
  margin-bottom: 70px;
  // max-width: 900px;
}
.story-line {
  margin-bottom: 40px;
  margin-left: 30px;
  z-index: 5;
  white-space: pre;
}
.space {
  margin: 0 10px;
}
.empty-line .letter {
 text-decoration: underline;
 color: transparent;
 text-decoration-color: black;
}
.symbol-line .special {
  color: transparent;
}
.letter {
  padding: 0 1px;
}

</style>
