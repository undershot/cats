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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _bornCalculate = __webpack_require__(1);

	var _bornCalculate2 = _interopRequireDefault(_bornCalculate);

	var _vkApi = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	  (0, _bornCalculate2.default)();
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

	if (window.news) {
	  (0, _vkApi.vkApi)('#новости', _vkApi.html_func_news);
	}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = initScript;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function bornCalculate(bornDate) {
	  var year = ['год', 'года', 'лет'];
	  var month = ['месяц', 'месяца', 'месяцев'];
	  var _bornDate = new Date(bornDate * 1000);
	  var nowDate = new Date();

	  var result = '';
	  var bornYear = nowDate.getFullYear() - _bornDate.getFullYear();
	  var bornMonth = nowDate.getMonth() - _bornDate.getMonth() + 1;

	  if (bornYear > 0) {
	    switch (bornYear) {
	      case 1:
	        result = bornYear + ' ' + year[0];
	        break;
	      case 2:
	      case 3:
	      case 4:
	        result = bornYear + ' ' + year[1];
	        break;
	      default:
	        result = bornYear + ' ' + year[2];
	        break;
	    }
	  }

	  if (bornMonth > 0) {
	    switch (bornMonth) {
	      case 1:
	        result += ' ' + bornMonth + ' ' + month[0];
	        break;
	      case 2:
	      case 3:
	      case 4:
	        result += ' ' + bornMonth + ' ' + month[1];
	        break;
	      default:
	        result += ' ' + bornMonth + ' ' + month[2];
	        break;
	    }
	  }

	  return result;
	}

	function initScript() {
	  [].concat(_toConsumableArray(document.querySelectorAll('.data_age'))).forEach(function (el) {
	    var _bornDate = el.dataset.age;

	    el.textContent = bornCalculate(_bornDate);
	  });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.vkApi = vkApi;
	exports.html_func_news = html_func_news;
	function vkApi(query, html_func) {
	  window.VK.init({
	    apiId: 6092424
	  });

	  window.VK.Api.call('wall.search', {
	    owner_id: -144799026,
	    query: query
	  }, function (info) {
	    var response = info.response;

	    var data = {
	      count: response[0],
	      items: response.slice(1, response.length)
	    };

	    if (data.count > 0) {
	      html_func(data.items);
	    }

	    console.log(data);
	  });
	}

	function html_func_news(items) {
	  var html = '';

	  items.forEach(function (el) {
	    var text = el.text;
	    var reg = /\[(club144799026)\|(Котики-Енотики антикафе с животными)\]/g;
	    text = text.replace(reg, replacer);
	    html += '\n      <div class="post">\n        ' + text + '\n        ' + get_image(el) + '\n      </div>\n    ';
	  });

	  document.querySelector('#news_block').innerHTML = html;
	}

	function get_image(item) {
	  var hasImg = item.attachment && item.attachment.photo && item.attachment.photo.src_big;

	  if (hasImg) {
	    return '<img src="' + hasImg + '" alt="news"/>';
	  }

	  return '';
	}

	function replacer(substr, p1, p2) {
	  return '\n    <a href="https://vk.com/' + p1 + '">' + p2 + '</a>\n  ';
	}

/***/ })
/******/ ]);