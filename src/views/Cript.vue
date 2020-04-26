<template>
  <div v-if="story" class="header-container">
    <Story v-if="pageType === 'story'"/>
    <Icons v-else/>
    <!-- <div :class="print ? 'hide-btns' : ''" class="btns-container row">
      <button
        :disabled="pageType === 'story'"
        class="story-btn"
        @click="changePageType('story')"
      >צופן</button>
      <button
        :disabled="pageType === 'index'"
        class="story-btn"
        @click="changePageType('index')"
      >מקרא</button>
      <button class="story-btn print-btn" @click="printStory">הדפס</button>
      <button class="story-btn" @click="returnHomePage">חזור</button>
    </div> -->
  </div>
</template>

<script>
import Story from "@/components/Story.vue";
// import Icons from "@/components/Icons.vue";
import jsPDF from 'jspdf';
export default {
  name: "Cript",
  components: {
    Story,
    // Icons
  },
  data() {
    return {
      pageType: "story",
      print: false
    };
  },
  computed: {
    story() {
      return this.$store.getters.getStory;
    },
    hiddenStory() {
      return this.$store.getters.hiddenStory;
    }
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
    changePageType(type) {
      this.pageType = type;
      this.print = false;
    },
    returnHomePage() {
      window.history.back();
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
