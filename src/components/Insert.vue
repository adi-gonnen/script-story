<template>
  <div class="insert-container column">
    <p class="insert-title">הכנס את הטקסט כאן:</p>
    <textarea v-model="text" id="textArea" rows="20" autofocus class="insert-textarea"/>
    <div class="row">
      <button class="submit-btn" @click="criptText">הצפן!</button>
      <button v-if="story" class="submit-btn" @click="printIndex">הדפס מקרא</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  computed: {
    story() {
      return this.$store.getters.getStory;
    },
     simple() {
      return this.$store.state.simple;
    }
  },
  mounted() {
    document.getElementById("textArea").focus();
    if (this.story) {
      this.text = this.story;
    }
  },
  methods: {
    criptText() {
      this.$store.dispatch("setCriptText", this.text);
      const target = this.simple ? '/simple' : '/cript';
      this.$router.push(target);
    },
    printIndex() {
      this.$router.push('/icons');
    }
  }
};
</script>

<style>
.insert-container {
  direction: rtl;
  max-width: 700px;
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

.submit-btn {
  height: 50px;
  width: 175px;
  text-align: center;
  font-size: 22px;
  border-radius: 12px;
  margin: 2px 10px;
  background-color: #8bc34a;
}
</style>
