import Vue from 'vue'
import Vuex from 'vuex'
import storyService from './services/storyService.js'
import { networkInterfaces } from 'os';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dictionary: {},
    index: null,
    story: '',
    hiddenStory: null
  },

  getters: {
    soretedLetters(state) {
      return state.dictionary.sortedLetters;
    }
  },
  
  actions: {
    async loadSigns({ commit, dispatch }) {
      const letters = storyService.getLetters();
      const sortedLetters = storyService.getSortedLetters();
      const signs = await storyService.getSigns();
      commit('setSigns', { letters, signs, sortedLetters });
      await dispatch('getIndex');
    },
    
    async getIndex({ state, commit }) {
      let index = [];
      const letters = state.dictionary.letters;
      const signs = state.dictionary.signs;
      for (let i = 0, j = 0; i < letters.length; i++ , j++) {
        let letter = letters[i];
        let endLetter = ['ך', 'ם', 'ן', 'ף', 'ץ'].some((each) => {
          return each === letter;
        })
        if (endLetter) {
          index.push({ letter: letter, sign: signs[j-1], count: 0 });
          j--;
        } else {
          index.push({ letter: letter, sign: signs[j], count: 0 });
        }
      }
      index.push({ letter: " ", sign: " " })    //  space between words
      commit('setIndex', index)
    },

    async setCriptText({commit, dispatch}, text) {
      commit('setStory', text);
      let textLines = text.split("\n");
      const hiddenStory = await dispatch('hideStory', textLines);
      commit('setHiddenStory', hiddenStory);
    },

    async hideStory({ state, dispatch }, story) {
      const index = state.index;
      let hiddenStory = [];
      story.forEach((line) => {
        let newLine = [];
        [...line].forEach((letter) => {
          const signObj = index.find(item => item.letter === letter);
          const signIcon = signObj ? signObj.sign : letter;
          const letterClass = !signObj ? 'special' : signIcon === ' ' ? 'space' : 'letter'
          newLine.push({sign: signIcon, class: letterClass});  
        })
        hiddenStory.push(newLine)
      });
      await dispatch('sortIndex', hiddenStory);
      return hiddenStory;
    },

    sortIndex({state, commit}, story) {
      const index = Array.from(state.index);
      index.forEach((obj) => {
        let count = story.reduce((acc, line) => {
          [...line].forEach((letter) => {
            if (obj.sign === letter.sign) {
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
  },

  mutations: {
    setSigns(state, data) {
      state.dictionary = data;
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
})
