/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _comp = __webpack_require__(1);

	var _comp2 = _interopRequireDefault(_comp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	'use strict';
	//   $(document).ready(function () {
	//     'use strict';
	// //Аякс отправка форм
	//     $("#application").submit(function () {
	//       var data = {
	//         name : document.querySelector('input[name="name"]').value,
	//         email : document.querySelector('input[name="email"]').value,
	//         telephone : document.querySelector('input[name="telephone"]').value
	//       };
	//       $.ajax({
	//         type: "POST",
	//         url: "mail.php",
	//         data: data
	//       }).done(function (value) {
	//         $('#mail')[0].innerHTML = value;
	//         $('#mail').removeClass('not_visible_mail');
	//         setTimeout(function () {
	//           $("#form").trigger("reset");
	//         }, 1000);
	//       });
	//     return false;
	//     });
	//  function  test() {
	// 	console.log('test!');
	// }
	//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
	//   });

	(0, _comp2.default)();

	// Доходит ли до сюда код

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = test;
	function test() {
		console.log('test');
	}

/***/ }
/******/ ]);