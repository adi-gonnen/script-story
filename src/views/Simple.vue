<template>
  <div class="header-container">
  <Story/>
  <!-- <full-index/> -->
  </div>
</template>

<script>
import Story from "@/components/Story.vue";
import FullIndex from "@/components/FullIndex.vue";
export default {
  name: 'Simple',
  components: { Story, FullIndex },
  data: ()=> ({}),
  computed: {
  },
  methods: {
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
</style>
