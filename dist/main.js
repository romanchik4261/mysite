/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n// Чтобы пересобрасть файл main.js из папки dist команда: npm run build\r\n// Чтобы разрабатывать: npm run watch\n\n//# sourceURL=webpack://my_site/./src/index.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst form = () => {\n  console.log('Init!');\n\n// inputmask\nconst form = document.querySelector('.form');\nconst telSelector = form.querySelector('input[type=\"tel\"]');\nconst inputMask = new Inputmask('+7 (999) 999-99-99');\ninputMask.mask(telSelector);\n\nconst validation = new JustValidate('.form');\n\nvalidation\n  .addField('.input-name', [\n    {\n      rule: 'minLength',\n      value: 3,\n    },\n    {\n      rule: 'maxLength',\n      value: 30,\n    },\n    {\n      rule: 'required',\n      value: true,\n      errorMessage: 'Введите имя!'\n    }\n  ])\n  .addField('.input-mail', [\n    {\n      rule: 'required',\n      value: true,\n      errorMessage: 'Email обязателен',\n    },\n    {\n      rule: 'email',\n      value: true,\n      errorMessage: 'Введите корректный Email',\n    },\n  ])\n  .addField('.input-tel', [\n    {\n      rule: 'required',\n      value: true,\n      errorMessage: 'Телефон обязателен',\n    },\n    {\n      rule: 'function',\n      validator: function() {\n        const phone = telSelector.inputmask.unmaskedvalue();\n        return phone.length === 10;\n      },\n      errorMessage: 'Введите корректный телефон',\n    },\n  ]).onSuccess((event) => {\n    console.log('Validation passes and form submitted', event);\n\n    let formData = new FormData(event.target);\n\n    console.log(...formData);\n\n    let xhr = new XMLHttpRequest();\n\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        if (xhr.status === 200) {\n          console.log('Отправлено');\n        }\n      }\n    }\n\n    xhr.open('POST', 'mail.php', true);\n    xhr.send(formData);\n\n    event.target.reset();\n  });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://my_site/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const btnMenu = document.querySelector('.btn-menu')\r\n  const menu = document.querySelector('.navigation')\r\n  const btnClose = document.querySelector('.btn-close')\r\n\r\n  const openMenu = () => {\r\n    menu.style.display = 'flex'\r\n  }\r\n\r\n  const closeMenu = () => {\r\n    menu.style.display = ''\r\n  }\r\n\r\n  btnMenu.addEventListener('click', openMenu)\r\n\r\n  btnClose.addEventListener('click', closeMenu)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://my_site/./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;