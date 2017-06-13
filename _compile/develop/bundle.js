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
/***/ (function(module, exports) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	[].concat(_toConsumableArray(document.querySelectorAll('#slider_animals .anim'))).forEach(function (el) {
	  el.addEventListener('click', function () {
	    if (this.classList.contains('active')) {
	      clearAllActiveElements();
	    } else {
	      var filter = this.dataset.filter;
	      clearAllActiveElements();
	      this.classList.add('active');

	      if (filter === 'cats') {
	        filterElements('Котик');
	      } else if (filter === 'racoons') {
	        filterElements('Енотик');
	      }
	    }
	  });
	});

	function clearAllActiveElements() {
	  [].concat(_toConsumableArray(document.querySelectorAll('#slider_animals .anim'))).forEach(function (el) {
	    if (el.classList.contains('active')) el.classList.remove('active');
	  });

	  [].concat(_toConsumableArray(document.querySelectorAll('#slider_animals li'))).forEach(function (el) {
	    el.style.display = "block";
	  });
	}

	function filterElements(filter) {
	  [].concat(_toConsumableArray(document.querySelectorAll('#slider_animals li'))).forEach(function (el) {
	    if (el.dataset.type !== filter) el.style.display = "none";
	  });
	}

	// Interior slider
	if (window.main) {
	  var $carousel = $('#interior .slider').slick({
	    arrows: false,
	    fade: true,
	    adaptiveHeight: true
	  });

	  $('#interior .wrap_slider .left_arrow').on('click', function () {
	    $carousel.slick('slickPrev');
	  });

	  $('#interior .wrap_slider .right_arrow').on('click', function () {
	    $carousel.slick('slickNext');
	  });
	}

	// Maps init
	if (window.main) {
	  var init = function init() {
	    myMap = new ymaps.Map("map_body", {
	      center: [55.798654, 37.529129],
	      zoom: 16
	    });

	    myMap.behaviors.disable(['drag', 'scrollZoom']);

	    myPlacemark = new ymaps.Placemark([55.798654, 37.529129], null, {
	      iconLayout: 'default#image',
	      iconImageHref: location.origin + '/wp-content/themes/cats/images/geo_map.png',
	      iconImageSize: [42, 64],
	      iconImageOffset: [-39, -60]
	    });

	    myMap.geoObjects.add(myPlacemark);
	  };

	  ymaps.ready(init);
	  var myMap, myPlacemark;
	}
	// mobile menu funcs
	document.querySelector('#menu button').addEventListener('click', function (e) {
	  document.querySelector('#mobile_menu').classList.add('active');
	});

	document.querySelector('#mobile_menu .closer').addEventListener('click', function (e) {
	  document.querySelector('#mobile_menu').classList.remove('active');
	});

/***/ })
/******/ ]);