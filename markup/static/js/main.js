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

// select - basket
(function () {
  var selectContainer = document.querySelector('.user-block__basket-order-select');
  var selectInputContainer = document.querySelector('.user-block__basket-order-select-input-wrap');
  var selectInput = document.querySelector('.user-block__basket-order-select-input');
  var selectTextContainer = document.querySelector('.user-block__basket-order-select-content');
  
  if (selectContainer !== null) {
    selectInputContainer.addEventListener('click', function () {
      this.classList.add('user-block__basket-order-select-input-wrap--open');
      selectTextContainer.classList.remove('hidden');
    });

    selectTextContainer.addEventListener('click', function (evt) {
      var target = evt.target.closest('.user-block__basket-order-select-content-text');

      if (target) {
        selectInput.value = target.textContent;
        this.classList.add('hidden');
        selectInputContainer.classList.remove('user-block__basket-order-select-input-wrap--open');
      }
    });
  }
})();

// carts
(function () {
  var container = document.querySelectorAll('.carts__good-description-payment');
  
  var arr = {
    cart1: {
      totalCount: 0,
      totalPrice: 0
    },
    cart2: {
      totalCount: 0,
      totalPrice: 0
    },
    cart3: {
      totalCount: 0,
      totalPrice: 0
    },
    cart4: {
      totalCount: 0,
      totalPrice: 0
    },
    cart5: {
      totalCount: 0,
      totalPrice: 0
    },
    cart6: {
      totalCount: 0,
      totalPrice: 0
    },
    cart7: {
      totalCount: 0,
      totalPrice: 0
    },
    cart8: {
      totalCount: 0,
      totalPrice: 0
    },
    cart9: {
      totalCount: 0,
      totalPrice: 0
    },
    cart10: {
      totalCount: 0,
      totalPrice: 0
    },
    cart11: {
      totalCount: 0,
      totalPrice: 0
    },
    cart12: {
      totalCount: 0,
      totalPrice: 0
    },
    totalPriceCart: function () {
      return parseInt(this.cart1.totalPrice, 10) + parseInt(this.cart2.totalPrice, 10) + parseInt(this.cart3.totalPrice, 10) + parseInt(this.cart4.totalPrice, 10) + parseInt(this.cart5.totalPrice, 10) + parseInt(this.cart6.totalPrice, 10) + parseInt(this.cart7.totalPrice, 10) + parseInt(this.cart8.totalPrice, 10) + parseInt(this.cart9.totalPrice, 10) + parseInt(this.cart10.totalPrice, 10) + parseInt(this.cart11.totalPrice, 10) + parseInt(this.cart12.totalPrice, 10);
    },
    totalPriceCount: function () {
      return parseInt(this.cart1.totalCount, 10) + parseInt(this.cart2.totalCount, 10) + parseInt(this.cart3.totalCount, 10) + parseInt(this.cart4.totalCount, 10) + parseInt(this.cart5.totalCount, 10) + parseInt(this.cart6.totalCount, 10) + parseInt(this.cart7.totalCount, 10) + parseInt(this.cart8.totalCount, 10) + parseInt(this.cart9.totalCount, 10) + parseInt(this.cart10.totalCount, 10) + parseInt(this.cart11.totalCount, 10) + parseInt(this.cart12.totalCount, 10);
    }
  };
  
  if (container !== null) {
    var calculation = function () {
      for (var i = 0, len = container.length; i < len; i ++) {
        container[i].addEventListener('click', function (evt) {
          var target = this;
          var inputVal = target.children[0].children[1].children[1];
          var price = target.children[0].querySelector('.carts__good-description-payment-price');
          var labelsContainer = target.children[1];

          if (evt.target === labelsContainer.children[0].children[1]) {
            price.textContent = 600;
            price.dataset.price = 600;
            inputVal.value = 1;
            price.dataset.totalPrice = price.textContent;

            if (price.id === 'cart1') {
              arr.cart1.totalPrice = price.textContent;
              arr.cart1.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart2') {
              arr.cart2.totalPrice = price.textContent;
              arr.cart2.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart3') {
              arr.cart3.totalPrice = price.textContent;
              arr.cart3.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart4') {
              arr.cart4.totalPrice = price.textContent;
              arr.cart4.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart5') {
              arr.cart5.totalPrice = price.textContent;
              arr.cart5.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart6') {
              arr.cart6.totalPrice = price.textContent;
              arr.cart6.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart7') {
              arr.cart7.totalPrice = price.textContent;
              arr.cart7.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart8') {
              arr.cart8.totalPrice = price.textContent;
              arr.cart8.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart9') {
              arr.cart9.totalPrice = price.textContent;
              arr.cart9.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart10') {
              arr.cart10.totalPrice = price.textContent;
              arr.cart10.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart11') {
              arr.cart11.totalPrice = price.textContent;
              arr.cart11.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart12') {
              arr.cart12.totalPrice = price.textContent;
              arr.cart12.totalCount = price.dataset.totalCount;
            }
          }

          if (evt.target === labelsContainer.children[1].children[1]) {
            price.textContent = 750;
            price.dataset.price = 750;
            inputVal.value = 1;
            price.dataset.totalPrice = price.textContent;

            if (price.id === 'cart1') {
              arr.cart1.totalPrice = price.textContent;
              arr.cart1.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart2') {
              arr.cart2.totalPrice = price.textContent;
              arr.cart2.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart3') {
              arr.cart3.totalPrice = price.textContent;
              arr.cart3.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart4') {
              arr.cart4.totalPrice = price.textContent;
              arr.cart4.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart5') {
              arr.cart5.totalPrice = price.textContent;
              arr.cart5.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart6') {
              arr.cart6.totalPrice = price.textContent;
              arr.cart6.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart7') {
              arr.cart7.totalPrice = price.textContent;
              arr.cart7.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart8') {
              arr.cart8.totalPrice = price.textContent;
              arr.cart8.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart9') {
              arr.cart9.totalPrice = price.textContent;
              arr.cart9.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart10') {
              arr.cart10.totalPrice = price.textContent;
              arr.cart10.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart11') {
              arr.cart11.totalPrice = price.textContent;
              arr.cart11.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart12') {
              arr.cart12.totalPrice = price.textContent;
              arr.cart12.totalCount = price.dataset.totalCount;
            }
          }

          if (evt.target === labelsContainer.children[2].children[1]) {
            price.textContent = 900;
            price.dataset.price = 900;
            inputVal.value = 1;
            price.dataset.totalPrice = price.textContent;

            if (price.id === 'cart1') {
              arr.cart1.totalPrice = price.textContent;
              arr.cart1.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart2') {
              arr.cart2.totalPrice = price.textContent;
              arr.cart2.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart3') {
              arr.cart3.totalPrice = price.textContent;
              arr.cart3.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart4') {
              arr.cart4.totalPrice = price.textContent;
              arr.cart4.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart5') {
              arr.cart5.totalPrice = price.textContent;
              arr.cart5.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart6') {
              arr.cart6.totalPrice = price.textContent;
              arr.cart6.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart7') {
              arr.cart7.totalPrice = price.textContent;
              arr.cart7.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart8') {
              arr.cart8.totalPrice = price.textContent;
              arr.cart8.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart9') {
              arr.cart9.totalPrice = price.textContent;
              arr.cart9.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart10') {
              arr.cart10.totalPrice = price.textContent;
              arr.cart10.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart11') {
              arr.cart11.totalPrice = price.textContent;
              arr.cart11.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart12') {
              arr.cart12.totalPrice = price.textContent;
              arr.cart12.totalCount = price.dataset.totalCount;
            }
          }

          if (evt.target === labelsContainer.children[3].children[1]) {
            price.textContent = 1050;
            price.dataset.price = 1050;
            inputVal.value = 1;
            price.dataset.totalPrice = price.textContent;
            price.dataset.totalCount = parseInt(inputVal.value, 10);

            if (price.id === 'cart1') {
              arr.cart1.totalPrice = price.textContent;
              arr.cart1.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart2') {
              arr.cart2.totalPrice = price.textContent;
              arr.cart2.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart3') {
              arr.cart3.totalPrice = price.textContent;
              arr.cart3.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart4') {
              arr.cart4.totalPrice = price.textContent;
              arr.cart4.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart5') {
              arr.cart5.totalPrice = price.textContent;
              arr.cart5.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart6') {
              arr.cart6.totalPrice = price.textContent;
              arr.cart6.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart7') {
              arr.cart7.totalPrice = price.textContent;
              arr.cart7.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart8') {
              arr.cart8.totalPrice = price.textContent;
              arr.cart8.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart9') {
              arr.cart9.totalPrice = price.textContent;
              arr.cart9.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart10') {
              arr.cart10.totalPrice = price.textContent;
              arr.cart10.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart11') {
              arr.cart11.totalPrice = price.textContent;
              arr.cart11.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart12') {
              arr.cart12.totalPrice = price.textContent;
              arr.cart12.totalCount = price.dataset.totalCount;
            }
          }

          if (evt.target === target.children[0].children[1].children[0]) {
            if (inputVal.value >= 2) {
              inputVal.value = parseInt(inputVal.value, 10) - 1;
              price.textContent = parseInt(price.textContent, 10) - parseInt(price.dataset.price, 10);
              price.dataset.totalPrice = price.textContent;
              price.dataset.totalCount = parseInt(inputVal.value, 10);

              if (price.id === 'cart1') {
                arr.cart1.totalPrice = price.textContent;
                arr.cart1.totalCount = price.dataset.totalCount;
              }
              if (price.id === 'cart2') {
                arr.cart2.totalPrice = price.textContent;
                arr.cart2.totalCount = price.dataset.totalCount;
              }
              if (price.id === 'cart3') {
                arr.cart3.totalPrice = price.textContent;
                arr.cart3.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart4') {
                arr.cart4.totalPrice = price.textContent;
                arr.cart4.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart5') {
                arr.cart5.totalPrice = price.textContent;
                arr.cart5.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart6') {
                arr.cart6.totalPrice = price.textContent;
                arr.cart5.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart7') {
                arr.cart7.totalPrice = price.textContent;
                arr.cart7.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart8') {
                arr.cart8.totalPrice = price.textContent;
                arr.cart8.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart9') {
                arr.cart9.totalPrice = price.textContent;
                arr.cart9.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart10') {
                arr.cart10.totalPrice = price.textContent;
                arr.cart10.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart11') {
                arr.cart11.totalPrice = price.textContent;
                arr.cart11.totalPrice = price.dataset.totalCount;
              }
              if (price.id === 'cart12') {
                arr.cart12.totalPrice = price.textContent;
                arr.cart12.totalPrice = price.dataset.totalCount;
              }

              console.log(arr);
            }
          }
          if (evt.target === target.children[0].children[1].children[2]) {
            inputVal.value = parseInt(inputVal.value, 10) + 1;
            price.textContent = parseInt(price.textContent, 10) + parseInt(price.dataset.price, 10);
            price.dataset.totalPrice = price.textContent;
            price.dataset.totalCount = parseInt(inputVal.value, 10);

            if (price.id === 'cart1') {
              arr.cart1.totalPrice = price.textContent;
              arr.cart1.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart2') {
              arr.cart2.totalPrice = price.textContent;
              arr.cart2.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart3') {
              arr.cart3.totalPrice = price.textContent;
              arr.cart3.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart4') {
              arr.cart4.totalPrice = price.textContent;
              arr.cart4.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart5') {
              arr.cart5.totalPrice = price.textContent;
              arr.cart5.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart6') {
              arr.cart6.totalPrice = price.textContent;
              arr.cart6.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart7') {
              arr.cart7.totalPrice = price.textContent;
              arr.cart7.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart8') {
              arr.cart8.totalPrice = price.textContent;
              arr.cart8.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart9') {
              arr.cart9.totalPrice = price.textContent;
              arr.cart9.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart10') {
              arr.cart10.totalPrice = price.textContent;
              arr.cart10.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart11') {
              arr.cart11.totalPrice = price.textContent;
              arr.cart11.totalCount = price.dataset.totalCount;
            }
            if (price.id === 'cart12') {
              arr.cart12.totalPrice = price.textContent;
              arr.cart12.totalCount = price.dataset.totalCount;
            }

            console.log(arr);
          }

          if (evt.target === target.children[2].children[0]) {
            var footerBasketPrice = document.querySelector('.user-block__fixed-basket-result-span--price');
            var footerBasketCount = document.querySelector('.user-block__fixed-basket-result-span--goods');
            var headerBasketCount = document.querySelector('.user-block__basket-indicator');
            var cartButton = target.children[2].children[0];

            if (cartButton.id === 'cartButton1') {
              arr.cart1.totalPrice = price.textContent;
              arr.cart1.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton2') {
              arr.cart2.totalPrice = price.textContent;
              arr.cart2.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton3') {
              arr.cart3.totalPrice = price.textContent;
              arr.cart3.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton4') {
              arr.cart4.totalPrice = price.textContent;
              arr.cart4.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton5') {
              arr.cart5.totalPrice = price.textContent;
              arr.cart5.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton6') {
              arr.cart6.totalPrice = price.textContent;
              arr.cart6.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton7') {
              arr.cart7.totalPrice = price.textContent;
              arr.cart7.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton8') {
              arr.cart8.totalPrice = price.textContent;
              arr.cart8.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton9') {
              arr.cart9.totalPrice = price.textContent;
              arr.cart9.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton10') {
              arr.cart10.totalPrice = price.textContent;
              arr.cart10.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton11') {
              arr.cart11.totalPrice = price.textContent;
              arr.cart11.totalCount = price.dataset.totalCount;
            }
            if (cartButton.id === 'cartButton12') {
              arr.cart12.totalPrice = price.textContent;
              arr.cart12.totalCount = price.dataset.totalCount;
            }

            console.log(arr);

            footerBasketPrice.textContent = arr.totalPriceCart();
            footerBasketCount.textContent = arr.totalPriceCount();
            headerBasketCount.textContent = arr.totalPriceCount();
          }
        });
      };
    };
    
    calculation();
  }
})();

// aside filter
(function () {
  var filterContainer = document.querySelector('.aside__filters');
  
  filterContainer.addEventListener('click', function (evt) {
    var target = evt.target.closest('.aside__filters-title');
    
    if (target) {
      target.classList.toggle('aside__filters-title--close');
    }
  });
})();

// basket
(function () {
  var cartsPrice = {
    cart1: {
      price: 750,
      totalPrice: 750,
      setPlus: function () {
        return this.totalPrice = this.price + this.totalPrice;
      },
      setMinus: function () {
        if (this.totalPrice > this.price) {
          return this.totalPrice = this.totalPrice - this.price;
        }
      },
      setResetTotalPrice: function () {
        return this.totalPrice = 0;
      }
    },
    cart2: {
      price: 750,
      totalPrice: 750,
      setPlus: function () {
        return this.totalPrice = this.price + this.totalPrice;
      },
      setMinus: function () {
        if (this.totalPrice > this.price) {
          return this.totalPrice = this.totalPrice - this.price;
        }
      },
      setResetTotalPrice: function () {
        return this.totalPrice = 0;
      }
    },
    cart3: {
      price: 750,
      totalPrice: 750,
      setPlus: function () {
        return this.totalPrice = this.price + this.totalPrice;
      },
      setMinus: function () {
        if (this.totalPrice > this.price) {
          return this.totalPrice = this.totalPrice - this.price;
        }
      },
      setResetTotalPrice: function () {
        return this.totalPrice = 0;
      }
    },
    getTotalPrice: function () {
      return this.cart1.totalPrice + this.cart2.totalPrice + this.cart3.totalPrice;
    }
  };

  var carts = document.querySelectorAll('.user-block__table-basket-row-cart');
  var basket = document.querySelector('.user-block__table-basket-total-price-sum');
  basket.textContent = cartsPrice.getTotalPrice();
  
  for (var i = 0, len = carts.length; i < len; i++) {
    carts[i].addEventListener('click', function (evt) {
      var target = this;
      var inc = evt.target.closest('.user-block__table-basket-payment-control--plus');
      var dec = evt.target.closest('.user-block__table-basket-payment-control--minus');
      var cartExit = evt.target.closest('.user-block__table-basket-cancel');
      var cartInput = this.querySelector('.user-block__table-basket-payment-input');
      var numInput = parseInt(cartInput.value, 10);
      var sum = this.querySelector('.user-block__table-basket-price--sum');
      
      if (inc) {
        cartInput.value = numInput + 1;
        if (target.id === 'cart1') {
          sum.textContent = cartsPrice.cart1.setPlus();
          basket.textContent = cartsPrice.getTotalPrice();
        } else if (target.id === 'cart2') {
          sum.textContent = cartsPrice.cart2.setPlus();
          basket.textContent = cartsPrice.getTotalPrice();
        } else if (target.id === 'cart3') {
          sum.textContent = cartsPrice.cart3.setPlus();
          basket.textContent = cartsPrice.getTotalPrice();
        }
      }
      if (dec) {
        if (parseInt(cartInput.value, 10) > 1) {
          cartInput.value = numInput - 1;
          if (target.id === 'cart1') {
            sum.textContent = cartsPrice.cart1.setMinus();
            basket.textContent = cartsPrice.getTotalPrice();
          } else if (target.id === 'cart2') {
            sum.textContent = cartsPrice.cart2.setMinus();
            basket.textContent = cartsPrice.getTotalPrice();
          } else if (target.id === 'cart3') {
            sum.textContent = cartsPrice.cart3.setMinus();
            basket.textContent = cartsPrice.getTotalPrice();
          }
        }
      }
      if (cartExit) {
        if (target.id === 'cart1') {
          target.remove();
          cartsPrice.cart1.setResetTotalPrice();
          basket.textContent = cartsPrice.getTotalPrice();
        }
        if (target.id === 'cart2') {
          target.remove();
          cartsPrice.cart2.setResetTotalPrice();
          basket.textContent = cartsPrice.getTotalPrice();
        }
        if (target.id === 'cart3') {
          target.remove();
          cartsPrice.cart3.setResetTotalPrice();
          basket.textContent = cartsPrice.getTotalPrice();
        }
      }
    });
  }
})();

