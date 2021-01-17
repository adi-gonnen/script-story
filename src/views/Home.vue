<template>
  <div class="home">
    <Insert/>
    <!-- <button class="submit-btn" @click="setSigns">הכן מקרא</button> -->
    <!-- <Rules/> -->
  </div>
</template>

<script>
import Rules from "@/components/Rules.vue";
import Insert from "@/components/Insert.vue";

export default {
  name: "home",
  components: { Rules, Insert },
  computed: {
    index() {
      return this.$store.getters.getIndex;
    },
    //  simple() {
    //   return this.$store.state.simple
    // }
  },
  mounted() {
    if (!this.index[0]) {
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

