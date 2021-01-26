<template>
  <div class="insert-container column">
    <p class="insert-title">הכנס את הטקסט כאן:</p>
    <textarea v-model="text" id="textArea" rows="20" autofocus class="insert-textarea"/>
    <div v-if="hiddenStory" class="row">
      <router-link to="/cript" tag="button" class="insert-btn" >הדפס כתב סתרים</router-link>
      <router-link to="/icons" tag="button" class="insert-btn" >הדפס מקרא</router-link>
      <router-link to="/rules" tag="button" class="insert-btn" >הדפס כללים</router-link>
      <button class="insert-btn" @click="criptText">הצפן מחדש</button>
    </div>
    <button v-else class="insert-btn submit-btn" @click="criptText">הצפן!</button>
  </div>
</template>

<script>
export default {
  name: 'Insert',
  props: ['story', 'hiddenStory'],
  data: () => ({
    text: ""
  }),
  computed: {},
  mounted() {
    document.getElementById("textArea").focus();
    if (this.story) {
      this.text = this.story;
    }
  },
  methods: {
    criptText() {
      this.$store.dispatch("setCriptText", this.text);
    },
  }
};
</script>

<style>
.insert-container {
  direction: rtl;
  max-width: 790px;
  margin: auto;
}
.insert-title {
  font-size: 28px;
  margin-bottom: 20px;
}
.insert-textarea {
  margin-bottom: 20px;
  font-size: 18px;
}
.insert-btn {
  height: 70px;
  width: 175px;
  text-align: center;
  font-size: 22px;
  border-radius: 12px;
  margin: 2px 6px;
  background-color: #8bc34a;
}
</style>
