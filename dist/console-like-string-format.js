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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = (function () {
  const argumentArray = Array.from(arguments)
  const firstArg = argumentArray.shift(1)

  let resultString = ''
  let i = 0
  let hasPercentSign = false
  while (i < firstArg.length) {
    const token = firstArg[i]
    if (hasPercentSign && ['c', 's', 'i', 'd', 'f', 'O', 'o'].indexOf(token) > -1) {
      hasPercentSign = false
      if ('c' === token) {
        // ignore %c
        argumentArray.shift()
      } else if ('s' === token) {
        resultString += argumentArray.shift()
      } else if ('o' === token.toLowerCase()) {
        resultString += JSON.stringify(argumentArray.shift())
      } else if ('i' === token || 'd' === token) {
        let val = ''
        try {
          val = parseInt(argumentArray.shift())
        } catch (e){
          console.warn(e)
        }
        resultString += '' + val
      } else if ('f' === token) {
        let val = ''
        try {
          val = parseFloat(argumentArray.shift())
        } catch (e){
          console.warn(e)
        }
        resultString += '' + val
      } else if ('%' === token) {
        resultString += '' + '%'
        hasPercentSign = true
      }
      i++
    } else if ('%' === token) {
      if (hasPercentSign) {
        resultString += '%'
      }
      hasPercentSign = true
      i++
    } else {
      resultString += '' + token
      i++
    }
  }

  if (argumentArray.length > 0) {
    const stringifiedArray = argumentArray.map(item => {
      return typeof item === 'object' ? JSON.stringify(item) : item
    })
    resultString += ' ' + stringifiedArray.join(' ')
  }

  return resultString
});


/***/ })
/******/ ]);