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
	  (0, _vkApi.vkApi)('#енот', _vkApi.html_func_news);
	}

	if (window.articles) {
	  (0, _vkApi.vkApi)('#енот', _vkApi.html_func_news);
	}

	if (window.shares) {
	  (0, _vkApi.vkApi)('#приз', _vkApi.html_func_news);
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

	    console.log('qa', query, window.VK.Api);

	    var url = 'https://api.vk.com/method/wall.search?owner_id=-144799026&query=' + encodeURIComponent(query) + '&access_token=6acba4a46acba4a46acba4a4986a97522c66acb6acba4a4339889facb5280d2e572de4c';

	    $.ajax({
	        url: url,
	        dataType: 'jsonp',
	        success: function success(info) {
	            var response = info.response;

	            var data = {
	                count: response[0],
	                items: response.slice(1, response.length)
	            };

	            if (data.count > 0) {
	                html_func(data.items);
	            }
	        }
	    });
	}

	function html_func_news(items) {
	    var html = '';

	    items.forEach(function (el) {

	        console.log(el);

	        var text = el.text;
	        var reg = /\[([^\[\]]+)\|([^\[\]]+)\]/g;
	        text = text.replace(reg, replacer);
	        text = text.replace(/#[^\s]+/g, '');
	        text = text.replace(/^(.{250}[^\s]*).*/, "$1...");

	        text = text.replace(/^(.+?)<br\s?\/?>/g, "<b class='post__title'>$1</b> <br>");

	        text = text.trim();

	        var link = 'https://vk.com/wall' + el.from_id + '_' + el.id;

	        var textElement = text ? '<div class="post__text">' + text + '</div>' : '';

	        html += '\n      <div class="post' + (!text ? ' image-only' : '') + '">\n        <a href="' + link + '" target="_blank" class="post__link">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n        <div class="post__image-wrapper">' + get_image(el) + '</div>\n        ' + textElement + '\n      </div>\n    ';
	    });

	    document.querySelector('#news_block').innerHTML = html;
	}

	function get_image(item) {
	    var hasImg = item.attachment && item.attachment.photo && item.attachment.photo.src_big;

	    if (hasImg) {
	        return '<img class="post__image" src="' + hasImg + '" alt="news"/>';
	    }

	    return '';
	}

	function replacer(substr, p1, p2) {
	    return '\n    <a href="https://vk.com/' + p1 + '">' + p2 + '</a>\n  ';
	}

/***/ })
/******/ ]);