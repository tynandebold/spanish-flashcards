import './scss/index.scss';

import { words } from './js/words';
import Vue from 'vue/dist/vue.js';

(function() {

  let wordBank = words;

  const app = new Vue({
    el: '#word-wrapper',
    data: {
      wordBank,
      spanish: '',
      english: '',
      isShown: false
    },
    methods: {
      showTranslation: function(e) {
        e.preventDefault();

        this.isShown = true;
      },
      changeWord: function() {
        this.isShown = false;

        const numWords = this.wordBank.length - 1;
        const randomNum = this.getRandomInt(0, (words.length - 1));
        const chosenWord = this.wordBank[randomNum];

        this.spanish = chosenWord.spanish;
        this.english = chosenWord.english;

        this.wordBank.splice(randomNum, 1);

        if (numWords === 0) {
          this.wordBank = words;
        }
      },
      getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    },
    mounted: function(){
      document.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.changeWord();
        } else if (e.keyCode === 27) {
          this.showTranslation(e);
        }
      });
    }
  });

  app.changeWord();
}());
