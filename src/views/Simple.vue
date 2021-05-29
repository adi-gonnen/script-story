<template>
  <div class="header-container">
    <Story :story="hiddenStory"/>
    <full-index :index="index"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Story from "@/components/Story.vue";
import FullIndex from "@/components/FullIndex.vue";
export default {
  name: 'Simple',
  components: { Story, FullIndex },
  data: ()=> ({}),
  computed: {
     ...mapState({
      hiddenStory: state => state.hiddenStory,
      index: state => state.index,
    })
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
@media print { body { -webkit-print-color-adjust: exact; } }
.header-container {
  margin: 60px 0;
  direction: rtl;
}
</style>
