/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _sample = __webpack_require__(2);

(function () {

  function init() {
    changeWord();
    bindEvents();
  }

  var wordBank = _sample.words;

  function changeWord() {
    var numWords = wordBank.length - 1;
    var randomNum = getRandomInt(0, _sample.words.length - 1);
    var chosenWord = wordBank[randomNum];

    writeMarkup(chosenWord);

    wordBank.splice(randomNum, 1);

    if (numWords === 0) {
      wordBank = _sample.words;
    }
  }

  function writeMarkup(chosenWord) {
    var template = '\n    <div class="spanish">Spanish: ' + chosenWord.spanish + '</div>\n    <div class="english">English: ' + chosenWord.english + '<span class="overlay">Show translation.</span>\n    </div>';

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
    document.addEventListener('keyup', function (e) {
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
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var words = exports.words = [{
	"spanish": "el,la",
	"english": "the"
}, {
	"spanish": "de",
	"english": "of, from"
}, {
	"spanish": "que",
	"english": "that, which"
}, {
	"spanish": "y",
	"english": "and"
}, {
	"spanish": "a",
	"english": "to, at"
}, {
	"spanish": "en",
	"english": "in, on"
}, {
	"spanish": "un",
	"english": "a, an"
}, {
	"spanish": "ser",
	"english": "to be"
}, {
	"spanish": "no",
	"english": "no"
}, {
	"spanish": "haber",
	"english": "to have"
}, {
	"spanish": "por",
	"english": "by, for, through"
}, {
	"spanish": "con",
	"english": "with"
}, {
	"spanish": "para",
	"english": "for, to, in order to"
}, {
	"spanish": "como",
	"english": "like, as"
}, {
	"spanish": "estar",
	"english": "to be (location)"
}, {
	"spanish": "tener",
	"english": "to have"
}, {
	"spanish": "todo",
	"english": "all, every"
}, {
	"spanish": "pero",
	"english": "but, yet, except"
}, {
	"spanish": "más",
	"english": "more"
}, {
	"spanish": "hacer",
	"english": "to do, make"
}, {
	"spanish": "o",
	"english": "or"
}, {
	"spanish": "poder",
	"english": "to be able to; can"
}, {
	"spanish": "decir",
	"english": "to tell, say"
}, {
	"spanish": "este",
	"english": "this (m) [esta (f)]"
}, {
	"spanish": "ir",
	"english": "to go"
}, {
	"spanish": "otro",
	"english": "other, another"
}, {
	"spanish": "ese",
	"english": "that (m) [esa (f)]"
}, {
	"spanish": "si",
	"english": "if, whether"
}, {
	"spanish": "ya",
	"english": "already, still"
}, {
	"spanish": "ver",
	"english": "to see"
}, {
	"spanish": "porque",
	"english": "because"
}, {
	"spanish": "dar",
	"english": "to give"
}, {
	"spanish": "cuando",
	"english": "when"
}, {
	"spanish": "muy",
	"english": "very, really"
}, {
	"spanish": "sin",
	"english": "without"
}, {
	"spanish": "vez",
	"english": "time (specific occurrence)"
}, {
	"spanish": "mucho",
	"english": "much, many, a lot"
}, {
	"spanish": "saber",
	"english": "to know (a fact), find out"
}, {
	"spanish": "qué",
	"english": "what?, which?, how?"
}, {
	"spanish": "sobre",
	"english": "on top of, over, about"
}, {
	"spanish": "alguno",
	"english": "some, someone"
}, {
	"spanish": "mismo",
	"english": "same"
}, {
	"spanish": "también",
	"english": "also"
}, {
	"spanish": "hasta",
	"english": "until, up to, even"
}, {
	"spanish": "año",
	"english": "year"
}, {
	"spanish": "dos",
	"english": "two"
}, {
	"spanish": "querer",
	"english": "to want, love"
}, {
	"spanish": "entre",
	"english": "between, among"
}, {
	"spanish": "así",
	"english": "like that"
}, {
	"spanish": "primero",
	"english": "first"
}, {
	"spanish": "desde",
	"english": "from, since"
}, {
	"spanish": "grande",
	"english": "large, great, big"
}, {
	"spanish": "eso",
	"english": "that"
}, {
	"spanish": "ni",
	"english": "not even, neither, nor"
}, {
	"spanish": "llegar",
	"english": "to arrive"
}, {
	"spanish": "pasar",
	"english": "to pass, spend (time)"
}, {
	"spanish": "tiempo",
	"english": "time (general), weather"
}, {
	"spanish": "sí",
	"english": "yes"
}, {
	"spanish": "día",
	"english": "day"
}, {
	"spanish": "uno",
	"english": "one"
}, {
	"spanish": "bien",
	"english": "well"
}, {
	"spanish": "poco",
	"english": "little, few, a little bit"
}, {
	"spanish": "deber",
	"english": "should, ought to; to owe"
}, {
	"spanish": "entonces",
	"english": "so, then"
}, {
	"spanish": "poner",
	"english": "to put (on), get"
}, {
	"spanish": "cosa",
	"english": "thing"
}, {
	"spanish": "tanto",
	"english": "so much, so many"
}, {
	"spanish": "hombre",
	"english": "man, mankind, husband"
}, {
	"spanish": "parecer",
	"english": "to seem, look like"
}, {
	"spanish": "nuestro",
	"english": "our"
}, {
	"spanish": "tan",
	"english": "such, as, too, so"
}, {
	"spanish": "donde",
	"english": "where"
}, {
	"spanish": "ahora",
	"english": "now"
}, {
	"spanish": "parte",
	"english": "part, portion"
}, {
	"spanish": "después",
	"english": "after"
}, {
	"spanish": "vida",
	"english": "life"
}, {
	"spanish": "quedar",
	"english": "to remain, stay"
}, {
	"spanish": "siempre",
	"english": "always, forever"
}, {
	"spanish": "creer",
	"english": "to believe, think"
}, {
	"spanish": "hablar",
	"english": "to speak, talk"
}, {
	"spanish": "llevar",
	"english": "to take, carry"
}, {
	"spanish": "dejar",
	"english": "to let, leave"
}, {
	"spanish": "nada",
	"english": "nothing, not at all"
}, {
	"spanish": "cada",
	"english": "each, every"
}, {
	"spanish": "seguir",
	"english": "to follow, keep on"
}, {
	"spanish": "menos",
	"english": "less, fewer"
}, {
	"spanish": "nuevo",
	"english": "new"
}, {
	"spanish": "encontrar",
	"english": "to find"
}, {
	"spanish": "algo",
	"english": "something, somewhat"
}, {
	"spanish": "sólo",
	"english": "only, just"
}, {
	"spanish": "pues",
	"english": "then, well then"
}, {
	"spanish": "llamar",
	"english": "to call, name"
}, {
	"spanish": "venir",
	"english": "to come"
}, {
	"spanish": "pensar",
	"english": "to think"
}, {
	"spanish": "aquel",
	"english": "that (over there)"
}, {
	"spanish": "momento",
	"english": "moment, time"
}, {
	"spanish": "sino",
	"english": "but, except, rather"
}, {
	"spanish": "esto",
	"english": "this"
}, {
	"spanish": "salir",
	"english": "to leave, go out"
}, {
	"spanish": "volver",
	"english": "to return, to to do again"
}, {
	"spanish": "forma",
	"english": "form, shape, way"
}, {
	"spanish": "antes",
	"english": "before"
}, {
	"spanish": "bueno",
	"english": "good"
}, {
	"spanish": "casa",
	"english": "house"
}, {
	"spanish": "aunque",
	"english": "although, even though"
}, {
	"spanish": "mundo",
	"english": "world"
}, {
	"spanish": "tres",
	"english": "three"
}, {
	"spanish": "tal",
	"english": "such (a)"
}, {
	"spanish": "mejor",
	"english": "best, better"
}, {
	"spanish": "tomar",
	"english": "to take, drink"
}, {
	"spanish": "cierto",
	"english": "certain, sure"
}, {
	"spanish": "conocer",
	"english": "to know (someone or place)"
}, {
	"spanish": "hacia",
	"english": "toward, towards"
}, {
	"spanish": "cómo",
	"english": "how?"
}, {
	"spanish": "mujer",
	"english": "woman, wife"
}, {
	"spanish": "vivir",
	"english": "to live"
}, {
	"spanish": "aquí",
	"english": "here"
}, {
	"spanish": "caso",
	"english": "case, occasion"
}, {
	"spanish": "sentir",
	"english": "to feel, regret"
}, {
	"spanish": "luego",
	"english": "later, afterwards"
}, {
	"spanish": "país",
	"english": "country"
}, {
	"spanish": "tratar",
	"english": "to try, treat, deal with"
}, {
	"spanish": "lugar",
	"english": "place, position"
}, {
	"spanish": "persona",
	"english": "person"
}, {
	"spanish": "mayor",
	"english": "larger, older, main"
}, {
	"spanish": "último",
	"english": "last, final"
}, {
	"spanish": "propio",
	"english": "own, proper, typical"
}, {
	"spanish": "quien",
	"english": "who, whom"
}, {
	"spanish": "mirar",
	"english": "to look, watch"
}, {
	"spanish": "hora",
	"english": "hour, time (specific"
}, {
	"spanish": "ninguno",
	"english": "no, none, nobody"
}, {
	"spanish": "trabajo",
	"english": "work, job, effort"
}, {
	"spanish": "casi",
	"english": "almost, nearly"
}, {
	"spanish": "punto",
	"english": "point, dot, period"
}, {
	"spanish": "durante",
	"english": "during, for (time"
}, {
	"spanish": "cualquier",
	"english": "any, anyone"
}, {
	"spanish": "mano",
	"english": "hand"
}, {
	"spanish": "nunca",
	"english": "never, ever"
}, {
	"spanish": "manera",
	"english": "way, manner"
}, {
	"spanish": "cual",
	"english": "which, who, whom"
}, {
	"spanish": "mientras",
	"english": "while, whereas"
}, {
	"spanish": "contar",
	"english": "to tell, count"
}, {
	"spanish": "fin",
	"english": "end"
}, {
	"spanish": "tipo",
	"english": "type, kind"
}, {
	"spanish": "gente",
	"english": "people"
}, {
	"spanish": "además",
	"english": "also, as well, besides"
}, {
	"spanish": "solo",
	"english": "lonely, alone"
}, {
	"spanish": "empezar",
	"english": "to begin, start"
}, {
	"spanish": "ejemplo",
	"english": "example"
}, {
	"spanish": "esperar",
	"english": "to wait, hope (for), expect"
}, {
	"spanish": "hoy",
	"english": "today, nowadays"
}, {
	"spanish": "lado",
	"english": "side"
}, {
	"spanish": "hijo",
	"english": "son, [pl] children"
}, {
	"spanish": "allí",
	"english": "there, over there"
}, {
	"spanish": "éste",
	"english": "this one"
}, {
	"spanish": "problema",
	"english": "problem"
}, {
	"spanish": "cuenta",
	"english": "bill, account"
}, {
	"spanish": "medio",
	"english": "means, middle; pormedio: through"
}, {
	"spanish": "contra",
	"english": "against, opposite"
}, {
	"spanish": "buscar",
	"english": "to look for"
}, {
	"spanish": "dentro",
	"english": "inside"
}, {
	"spanish": "largo",
	"english": "long"
}, {
	"spanish": "palabra",
	"english": "word"
}, {
	"spanish": "existir",
	"english": "to exist"
}, {
	"spanish": "niño",
	"english": "child, little boy"
}, {
	"spanish": "entrar",
	"english": "to enter"
}, {
	"spanish": "embargo",
	"english": "sin embargo: nevertheless"
}, {
	"spanish": "único",
	"english": "only, unique, sole"
}, {
	"spanish": "padre",
	"english": "father"
}, {
	"spanish": "trabajar",
	"english": "to work"
}, {
	"spanish": "pequeño",
	"english": "little, small, young"
}, {
	"spanish": "alto",
	"english": "tall, high"
}, {
	"spanish": "cambio",
	"english": "change"
}, {
	"spanish": "escribir",
	"english": "to write"
}, {
	"spanish": "cuatro",
	"english": "four"
}, {
	"spanish": "ahí",
	"english": "there"
}, {
	"spanish": "perder",
	"english": "to lose, miss"
}, {
	"spanish": "historia",
	"english": "history, story"
}, {
	"spanish": "idea",
	"english": "idea"
}, {
	"spanish": "agua",
	"english": "water"
}, {
	"spanish": "producir",
	"english": "to produce, cause"
}, {
	"spanish": "noche",
	"english": "night, evening"
}, {
	"spanish": "ciudad",
	"english": "city"
}, {
	"spanish": "modo",
	"english": "way, manner"
}, {
	"spanish": "nombre",
	"english": "name, noun"
}, {
	"spanish": "ocurrir",
	"english": "to happen, occur"
}, {
	"spanish": "familia",
	"english": "family"
}, {
	"spanish": "realidad",
	"english": "reality, actuality"
}, {
	"spanish": "entender",
	"english": "to understand"
}, {
	"spanish": "pedir",
	"english": "to ask for, request"
}, {
	"spanish": "recibir",
	"english": "to receive"
}, {
	"spanish": "obra",
	"english": "work, book, deed"
}, {
	"spanish": "importante",
	"english": "important"
}, {
	"spanish": "medio",
	"english": "half, middle"
}, {
	"spanish": "verdad",
	"english": "truth"
}, {
	"spanish": "mes",
	"english": "month"
}, {
	"spanish": "todavía",
	"english": "still, yet"
}, {
	"spanish": "razón",
	"english": "reason; tener razón: to be right"
}, {
	"spanish": "cuanto",
	"english": "en cuanto a: in terms of, regarding"
}, {
	"spanish": "bajo",
	"english": "under, underneath"
}, {
	"spanish": "recordar",
	"english": "to remember, remind"
}, {
	"spanish": "grupo",
	"english": "group"
}, {
	"spanish": "mil",
	"english": "thousand"
}, {
	"spanish": "humano",
	"english": "human"
}, {
	"spanish": "terminar",
	"english": "to finish, end"
}, {
	"spanish": "permitir",
	"english": "to allow, permit"
}, {
	"spanish": "aparecer",
	"english": "to appear"
}, {
	"spanish": "conseguir",
	"english": "to get, acquire, obtain"
}, {
	"spanish": "comenzar",
	"english": "to begin, start"
}, {
	"spanish": "varios",
	"english": "several, various"
}, {
	"spanish": "posible",
	"english": "possible"
}, {
	"spanish": "servir",
	"english": "to serve"
}, {
	"spanish": "general",
	"english": "general"
}, {
	"spanish": "sacar",
	"english": "to take out"
}, {
	"spanish": "necesitar",
	"english": "to need"
}, {
	"spanish": "relación",
	"english": "relationship, relation"
}, {
	"spanish": "cinco",
	"english": "five"
}, {
	"spanish": "cuerpo",
	"english": "body"
}, {
	"spanish": "nadie",
	"english": "nobody, anybody"
}, {
	"spanish": "mantener",
	"english": "to keep, maintain"
}, {
	"spanish": "hecho",
	"english": "fact, happening"
}, {
	"spanish": "ante",
	"english": "before"
}, {
	"spanish": "principio",
	"english": "beginning, principle"
}, {
	"spanish": "resultar",
	"english": "to result, turn out"
}, {
	"spanish": "igual",
	"english": "equal, same (as"
}, {
	"spanish": "señor",
	"english": "sir, Mr, lord"
}, {
	"spanish": "pueblo",
	"english": "people, village"
}, {
	"spanish": "tarde",
	"english": "afternoon, evening"
}, {
	"spanish": "segundo",
	"english": "second"
}, {
	"spanish": "leer",
	"english": "to read"
}, {
	"spanish": "caer",
	"english": "to fall"
}, {
	"spanish": "cambiar",
	"english": "to change"
}, {
	"spanish": "ojo",
	"english": "eye"
}, {
	"spanish": "calle",
	"english": "street"
}, {
	"spanish": "presentar",
	"english": "to introduce, present"
}, {
	"spanish": "blanco",
	"english": "white"
}, {
	"spanish": "se",
	"english": "reflexive marker"
}, {
	"spanish": "su",
	"english": "his/her/their/your"
}, {
	"spanish": "le",
	"english": "he /she/it; 3rd person indirect obj"
}, {
	"spanish": "lo",
	"english": "it; the (+ neuter"
}, {
	"spanish": "lo",
	"english": "it; 3rd person direct object (masc"
}, {
	"spanish": "la",
	"english": "it; 3rd person direct object (fem"
}, {
	"spanish": "me",
	"english": "me"
}, {
	"spanish": "él",
	"english": "he"
}, {
	"spanish": "mi",
	"english": "my"
}, {
	"spanish": "yo",
	"english": "I"
}, {
	"spanish": "nos",
	"english": "us"
}, {
	"spanish": "ella",
	"english": "she"
}, {
	"spanish": "te",
	"english": "you"
}, {
	"spanish": "nosotros",
	"english": "we"
}];

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map