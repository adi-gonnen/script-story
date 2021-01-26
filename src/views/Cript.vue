<template>
  <div class="header-container">
    <Story :story="hiddenStory"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Story from "@/components/Story.vue";
import jsPDF from 'jspdf';
export default {
  name: "Cript",
  components: { Story },
  data: () => ({
    pageType: "story",
    print: false
  }),
  computed: {
   ...mapState({
      hiddenStory: state => state.hiddenStory
    })
  },

  methods: {
    printStory() {
      // var doc = new jsPDF();
      // var specialElementHandlers = {
      //   '#editor': function (element, renderer) {
      //       return true;
      //   }
    // };
      // doc.fromHTML($('#content').html(), 15, 15);
      // doc.save("a4.pdf");
      this.print = true;
    },
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
.header-container {
  margin: 25px 0;
  direction: rtl;
}
.btns-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 20;
  &.hide-btns {
    z-index: 1;
    & .story-btn {
  background-color: #fff;
  color: #fff;
  border: none;
}
  }
}
.story-btn {
  margin: 20px;
  height: 50px;
  width: 175px;
  text-align: center;
  font-size: 22px;
  border-radius: 12px;
  background-color: #d3caca;
}
.print-btn {
  background-color: #8bc34a;
}
</style>
