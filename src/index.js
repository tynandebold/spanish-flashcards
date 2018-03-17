import './scss/index.scss';

import { words } from './js/sample';

(function() {

  function init() {
    changeWord();
    bindEvents();
  }

  let wordBank = words;

  function changeWord() {
    const numWords = wordBank.length - 1;
    const randomNum = getRandomInt(0, (words.length - 1));
    const chosenWord = wordBank[randomNum];

    writeMarkup(chosenWord);

    wordBank.splice(randomNum, 1);

    if (numWords === 0) {
      wordBank = words;
    }
  }

  function writeMarkup(chosenWord) {
    const template = `
    <div class="spanish">Spanish: ${chosenWord.spanish}</div>
    <div class="english">English: ${chosenWord.english}<span class="overlay">Show translation.</span>
    </div>`;

    document.querySelector('#word-wrapper').innerHTML = template;
  }

  function showTranslation(e) {
    e.preventDefault();

    if (e.target.tagName === 'SPAN' || e.keyCode === 27) {
      removeOverlay();
    }
  }

  function removeOverlay() {
    document.querySelector('.overlay').classList.add('show');
  }

  function bindEvents() {
    document.querySelector('button').addEventListener('click', changeWord);
    document.querySelector('#word-wrapper').addEventListener('click', showTranslation);
    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        changeWord();
      } else if (e.keyCode === 27) {
        showTranslation(e);
      }
    });
  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init();
}());
