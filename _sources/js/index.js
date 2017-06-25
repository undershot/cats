import bornCalculate from './bornCalculate';

[...document.querySelectorAll('#slider_animals .anim')]
  .forEach(el => {
    el.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        clearAllActiveElements();
      } else {
        let filter = this.dataset.filter;
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
  [...document.querySelectorAll('#slider_animals .anim')]
    .forEach(el => {
      if (el.classList.contains('active')) el.classList.remove('active');
    });

  [...document.querySelectorAll('#slider_animals li')]
    .forEach(el => {
      el.style.display = "block";
    });
}

function filterElements(filter) {
  [...document.querySelectorAll('#slider_animals li')]
    .forEach(el => {
      if (el.dataset.type !== filter) el.style.display = "none";
    });
}

// Interior slider
if (window.main) {
  let $carousel = $('#interior .slider').slick({
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

  bornCalculate();
}

// Maps init
if (window.main) {
  ymaps.ready(init);
  var myMap,
    myPlacemark;

  function init(){
    myMap = new ymaps.Map("map_body", {
      center: [55.798654, 37.529129],
      zoom: 16
    });

    myMap.behaviors.disable(['drag','scrollZoom']);

    myPlacemark = new ymaps.Placemark([55.798654, 37.529129], null, {
      iconLayout: 'default#image',
      iconImageHref: `${location.origin}/wp-content/themes/cats/images/geo_map.png`,
      iconImageSize: [42, 64],
      iconImageOffset: [-39, -60]
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
// mobile menu funcs
document.querySelector('#menu button').addEventListener('click', e => {
  document.querySelector('#mobile_menu').classList.add('active');
});

document.querySelector('#mobile_menu .closer').addEventListener('click', e => {
  document.querySelector('#mobile_menu').classList.remove('active');
});
