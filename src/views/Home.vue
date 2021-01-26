<template>
  <div class="home">
    <Insert :story="story" :hidden-story="hiddenStory"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Insert from "@/components/Insert.vue";

export default {
  name: "home",
  components: { Insert },
  computed: {
    ...mapState({
      index: state => state.index,
      story: state => state.story,
      hiddenStory: state => state.hiddenStory
    })
  },
  mounted() {
    if (!this.index) {
      this.$store.dispatch("loadSigns");
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
@media print {
  body {
    -webkit-print-color-adjust: exact;
  }
}
</style>

