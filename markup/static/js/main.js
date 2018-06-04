'use strict';

(function () {
  var slider = document.querySelector('.slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".slider").owlCarousel({
        loop: true,
        items: 1,
        animateOut: 'fadeOut',
        slideTransition: 'ease',
        smartSpeed: 350,
        autoplay: false,
        nav: true
      });
    });
  }
})();

// hamburger

(function () {
  var hamburger = document.querySelector('.hamburger');
  var aside = document.querySelector('.aside');
  var navigation = document.querySelector('.page-header__row-bottom');
  var body = document.body;
  
  hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    aside.classList.toggle('aside--close');
    aside.classList.toggle('aside--open');
    body.classList.toggle('aside-open');
    navigation.classList.toggle('page-header__row-bottom--close');
  });
})();

