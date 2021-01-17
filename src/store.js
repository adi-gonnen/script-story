import Vue from 'vue'
import Vuex from 'vuex'
import storyService from './services/storyService.js'
import { networkInterfaces } from 'os';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    letters: [],
    signs: [],
    index: [],
    story: '',
    hiddenStory: [],
    sortedLetters: [],
    simple: true
  },
  getters: {
    getLetters(state) {
      return state.letters;
    },
    getIndex(state) {
      return state.index;
    },
    getStory(state) {
      return state.story;
    },
    hiddenStory(state) {
      return state.hiddenStory;
    },
    getSortedLetters(state) {
      return state.sortedLetters;
    }
  },
  mutations: {
    setSigns(state, data) {
      state.letters = data.letters;
      state.signs = data.signs;
      state.sortedLetters = data.sortedLetters;
    },
    setIndex(state, index) {
      state.index = index;
    },
    setStory(state, story) {
      state.story = story;
    },
    setHiddenStory(state, story) {
      state.hiddenStory = story
    },
  },
  actions: {
    async loadSigns({ commit, dispatch }) {
      const letters = storyService.getLetters();
      const sortedLetters = storyService.getSortedLetters();
      const signs = await storyService.getSigns();
      commit('setSigns', { letters, signs, sortedLetters });
      await dispatch('getIndex');
    },
    async setCriptText({commit, dispatch}, text) {
      commit('setStory', text);
      let textLines = text.split("\n");
      const hiddenStory = await dispatch('hideStory', textLines);
      commit('setHiddenStory', hiddenStory);
    },
    async hideStory({ state, dispatch }, story) {
      const index = state.index;
      let hidenStory = [];
      story.forEach((line) => {
        let newLine = [];
        [...line].forEach((letter) => {
          const signObj = index.find(item => item.letter === letter);
          // const option = state.simple ? letter : '';   //keep non-letter sign (?,.exc) or delete 
          const signIcon = signObj ? signObj.sign : letter;
          const letterClass = !signObj ? 'special' : signIcon === ' ' ? 'space' : 'letter'
          newLine.push({letter: signIcon, class: letterClass});  
        })
        hidenStory.push(newLine)
      });
      await dispatch('sortIndex', hidenStory);
      return hidenStory;
    },
    async getIndex({ state, commit }) {
      let index = [];
      const letters = state.letters;
      const signs = state.signs;
      for (let i = 0, j = 0; i < letters.length; i++ , j++) {
        let letter = letters[i];
        let endLetter = ['ך', 'ם', 'ן', 'ף', 'ץ'].some((each) => {
          return each === letter;
        })
        if (endLetter) {
          index.push({ letter: letter, sign: signs[j-1], count: '' });
          j--;
        } else {
          index.push({ letter: letter, sign: signs[j], count: '' });
        }
      }
      index.push({ letter: " ", sign: " " })    //  space between words
      commit('setIndex', index)
    },
    
    sortIndex({state, commit}, story) {
      const index = Array.from(state.index);
      index.forEach((obj) => {
        let count = story.reduce((acc, line) => {
          [...line].forEach((letter) => {
            if (obj.sign === letter) {
              acc++;
            }
          })
          return acc
        }, 0)
        obj.count = count;
      })
      index.sort(function (a,b) {
        return b.count - a.count
      })
      commit('setIndex', index);
    },
  }
})
