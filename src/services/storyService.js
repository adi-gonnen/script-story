
const letters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ך', 'ל', 'מ', 'ם', 'נ', 'ן', 'ס', 'ע', 'פ', 'ף', 'צ', 'ץ', 'ק', 'ר', 'ש', 'ת']
const signs = ['💩', '🐴', '🐬', '🍒', '🐸', '💀', '🔑', '🙉', '🌷', '🍌', '🌽', '💜', '🥕', '🚲', '🍉', '🍭', '🌎', '🌴', '🚀', '⛔', '🌈', '🦄']
const sortedLetters = ['י', 'ו', 'ה', 'מ', 'ר', 'ל', 'ת', 'ב', 'נ', 'א', 'ש', 'ע', 'ד', 'ק', 'פ', 'כ', 'ח', 'ס', 'ג', 'ט', 'צ', 'ז']

function getLetters() {
  return letters;
}
function getSortedLetters() {
  return sortedLetters;
}
function getSigns() {
  return shuffle(signs);
  // return signs;
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default {
  getLetters,
  getSortedLetters,
  getSigns
}

