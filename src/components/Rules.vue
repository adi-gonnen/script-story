<template>
    <div class="rules-container">
        <p class="rules-title">טיפים</p>
        <ul>
            <li v-for="(rule, idx) in rules" :key="idx" class="rules-section column">
                <p>{{rule}}</p>
            </li>
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
                "בדרך כלל מילה שתתחיל ב ל' או ב' תיהיה בת 4 אותיות ומעלה",
                "הרבה מילים מסתיימות באות ה', מ' או נ'",
                "בסוף מילה נמצא הרבה 'ות' או 'ימ'",
                "כדאי להתחיל בסמל הכי נפוץ ולמצוא לו התאמה.",
                "3 המילים השכיחות ביותר בנות 2 אותיות: 'על', 'של', 'את'",
            ]
        }
    }

}
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
.rules-section {
    direction: rtl;
    font-size: 23px;
    text-align: right;
}
.rules-title {
    font-size: 22px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: right;
}

</style>
