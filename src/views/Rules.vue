<template>
 <div class="rules-container">
    <p class="rules-title">טיפים</p>
    <ul>
      <ol v-for="(rule, idx) in rules" :key="idx" class="rules-section column">
        <p>{{rule}}</p>
      </ol>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Rules',
  computed: {
    rules() {
      return [
        "הרבה מילים מתחילות באות א', 'ב', 'ה', ו' או ל'",
        "בדרך כלל מילה שתתחיל ב ל', ו' או ב' תיהיה בת 4 אותיות ומעלה",
        "הרבה מילים מסתיימות באות ה', מ' או נ'",
        "בסוף מילה נמצא הרבה 'ות' או 'ימ'",
        "כדאי להתחיל בסמלים הכי נפוצים ולמצוא להם התאמה.",
        "מילים שכיחות בעברית בנות 2 אותיות: 'את', 'של', 'על', 'לא'"
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
@media print { body { -webkit-print-color-adjust: exact; } }
.rules-container {
  margin: 20px 0;
  direction: rtl;
}
.rules-title {
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
}
.rules-section {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
