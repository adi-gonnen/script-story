<template>
  <div v-if="story" class="header-container">
    <ul class="story-container column">
      <li v-for="(line, idx) in story" :key="idx" class="story-line column">
        <div class="empty-line row">
          <div 
            v-for="(letter, index) in line" 
            :key="index" 
            :class="letter.class" 
            class="helper-container"
          >
          <p v-if="letter.class == 'letter'" class="line-helper">__</p>
          <p v-else-if="letter.class === 'special'" class="special-sign">{{letter.sign}}</p>
        </div>
        </div>
        <div class="symbol-line row">
          <i 
            v-for="(letter, index) in line" 
            :key="index" 
            :class="[letter.class, `em-${letter.sign}`]" 
            class="em">
          </i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Story",
  props: ['story'],
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
.helper-container {
  min-width: 27px;
  &.letter {
    margin-bottom: 2px;
  }
}
.line-helper {
  text-decoration: underline;
  color: white;
  -webkit-text-decoration-color: black;
  text-decoration-color: black;
  min-width: 27px;
  // max-height: 1px;
  // font-size: 8px;
}
.special-sign {

}
.symbol-line .special {
  color: transparent;
}
.letter {
  margin: 0 2px;
}

</style>
