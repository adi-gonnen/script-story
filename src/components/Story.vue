<template>
  <div v-if="hiddenStory" class="header-container">
    <ul class="story-container column">
      <li v-for="(line, idx) in hiddenStory" :key="idx" class="story-line row">{{line}}</li>
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
  // max-width: 900px;
}
.story-line {
  margin-bottom: 50px;
  margin-left: 30px;
 z-index: 5;
  white-space: nowrap;
}

</style>
