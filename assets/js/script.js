/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/forms.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/forms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = () => {
  const hideScroll = () => {
    document.querySelector('body').classList.add('fixed');
    document.querySelector('html').classList.add('fixed');
  };
  const showScroll = () => {
    document.querySelector('body').classList.remove('fixed');
    document.querySelector('html').classList.remove('fixed');
  };
  const toggleScroll = () => {
    document.querySelector('body').classList.toggle('fixed');
    document.querySelector('html').classList.toggle('fixed');
  };
  async function postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data
    });
    return await res.text();
  }
  try {
    const formAjax = document.querySelectorAll('form.form'),
      modal = document.querySelector('.modal'),
      modalSuccess = document.querySelector('.modal__success'),
      modalItems = document.querySelectorAll('.modal__item');
    formAjax.forEach(form => {
      const formBtn = form.querySelector('.btn');
      form.addEventListener('submit', e => {
        e.preventDefault();
        formBtn.classList.add('disable');
        const formData = new FormData(form);
        postData(form.action, formData).then(res => {
          formBtn.classList.remove('disable');
          modal.classList.add('active');
          modalItems.forEach(item => item.classList.remove('active'));
          modalSuccess.classList.add('active');
          hideScroll();
        });
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./assets/es6/blocks/mask.js":
/*!***********************************!*\
  !*** ./assets/es6/blocks/mask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+7 (___) ___-__-__',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./assets/es6/blocks/other.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/other.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const other = () => {
  const hideScroll = () => {
    document.querySelector('body').classList.add('fixed');
    document.querySelector('html').classList.add('fixed');
  };
  const showScroll = () => {
    document.querySelector('body').classList.remove('fixed');
    document.querySelector('html').classList.remove('fixed');
  };
  const toggleScroll = () => {
    document.querySelector('body').classList.toggle('fixed');
    document.querySelector('html').classList.toggle('fixed');
  };
  try {
    const bodyClickContent = document.querySelectorAll('.body-click-content'),
      bodyClickTarget = document.querySelectorAll('.body-click-target');
    document.body.addEventListener('click', e => {
      if (e.target.classList.contains('body-click-target') || e.target.classList.contains('body-click-close')) {
        e.preventDefault();
        let contentElem = e.target.getAttribute('data-content') ? document.querySelector('.body-click-content[data-content="' + e.target.getAttribute('data-content') + '"]') : e.target.nextElementSibling ? e.target.nextElementSibling : '';
        bodyClickContent.forEach(item => contentElem != item && item.classList.contains('global-hide') ? item.classList.remove('active') : '');
        bodyClickTarget.forEach(item => item.classList.contains('global-hide') && item != e.target ? item.classList.remove('active') : '');
        if (contentElem && contentElem.classList.contains('body-click-content')) contentElem.classList.toggle('active');else e.target.parentElement.classList.remove('active');
        !e.target.classList.contains('not-active') ? e.target.classList.toggle('active') : '';
      } else if (!e.target.closest('.body-click-content')) {
        bodyClickContent.forEach(item => !item.classList.contains('not-global') ? item.classList.remove('active') : '');
        bodyClickTarget.forEach(item => !item.classList.contains('not-active') && !item.classList.contains('not-global') ? item.classList.remove('active') : '');
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
  try {
    const targetElem = document.querySelectorAll('.elem_animate'),
      targetText = document.querySelectorAll('.text_animate');
    targetText.forEach(item => {
      let textCont = item.textContent.trim(),
        newInner = '',
        transit = 0;
      for (let i = 0; i < textCont.length; i++) {
        newInner += `<i class="or" style="transition: 0.4s all ${transit.toFixed(2)}s">${textCont[i]}</i>`;
        transit += 0.03;
      }
      item.innerHTML = newInner;
    });
    function returnHeight() {
      return window.innerWidth <= 600 ? window.innerHeight / 1.05 : window.innerHeight / 1.2;
    }
    function setAnim(mass) {
      mass.forEach(item => {
        if (returnHeight() + window.scrollY >= item.getBoundingClientRect().y + window.scrollY) {
          item.classList.add('anim');
        }
      });
    }
    setAnim(targetElem);
    setAnim(targetText);
    window.addEventListener('scroll', () => {
      setAnim(targetElem);
      setAnim(targetText);
    });
  } catch (e) {
    console.log(e.stack);
  }
  try {
    const modal = document.querySelector('.modal'),
      modalBtns = document.querySelectorAll('[data-call-modal]'),
      modalItems = document.querySelectorAll('.modal__item');
    modalBtns.forEach(btn => {
      if (btn.getAttribute('data-call-modal')) {
        btn.addEventListener('click', () => {
          modalItems.forEach(item => item.classList.remove('active'));
          modal.classList.add('active');
          modal.querySelector('.modal__item[data-modal="' + btn.getAttribute('data-call-modal') + '"]').classList.add('active');
          hideScroll();
        });
      }
    });
    modal.addEventListener('click', e => {
      if (e.target == modal || e.target.classList.contains('modal__close') || e.target.classList.contains('modal__hide')) {
        modalItems.forEach(item => item.classList.remove('active'));
        modal.classList.remove('active');
        showScroll();
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
  try {
    const headerBurger = document.querySelectorAll('.header__burger'),
      headerMobile = document.querySelector('.header__mobile'),
      headerMobileClose = headerMobile.querySelector('.header__mobile-close');
    const closeMobileMenu = () => {
      headerBurger.forEach(item => item.classList.remove('active'));
      headerMobile.classList.remove('active');
      showScroll();
    };
    headerBurger.forEach(burger => {
      burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        headerMobile.classList.toggle('active');
        toggleScroll();
      });
    });
    headerMobileClose && headerMobileClose.addEventListener('click', closeMobileMenu);
    document.body.addEventListener('click', e => {
      if (!e.target.classList.contains('header__mobile') && !e.target.classList.contains('header__burger') && !e.target.closest('.header__mobile')) closeMobileMenu();
    });
  } catch (e) {
    console.log(e.stack);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (other);

/***/ }),

/***/ "./assets/es6/blocks/scrolling.js":
/*!****************************************!*\
  !*** ./assets/es6/blocks/scrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = () => {
  try {
    const links = document.querySelectorAll('[href^="#"]'),
      speed = 0.15;
    const goingTo = hash => {
      let widthTop = document.documentElement.scrollTop,
        toBlock = document.querySelector(hash).getBoundingClientRect().top - 50,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          //location.hash = hash;
        }
      }
    };
    if (window.location.hash) goingTo(window.location.hash);
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        goingTo(this.hash);
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./assets/es6/blocks/slider.js":
/*!*************************************!*\
  !*** ./assets/es6/blocks/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const slider = () => {
  try {
    const sliderField = document.querySelectorAll('.slider');
    sliderField.forEach(slider => {
      let sliderTrack = slider.querySelector('.slider-track'),
        sliderList = slider.querySelector('.slider-list'),
        sliderDots = slider.querySelector('.slider-dots'),
        sliderNums = slider.querySelector('.slider-arrows-nums'),
        sliderArrows = slider.querySelector('.slider-arrows'),
        sliderDotsItems,
        slides = slider.querySelectorAll('.slide'),
        slidesSecond = slider.querySelectorAll('.slide-second'),
        slideWidth = 0,
        slideRight = slider.querySelector('.slider-arrows-item.right'),
        slideRightCount = slideRight ? slideRight.querySelector('.counter') : '',
        slideLeft = slider.querySelector('.slider-arrows-item.left'),
        slideLeftCount = slideLeft ? slideLeft.querySelector('.counter') : '',
        slideIndex = 0,
        slidesCount = slides.length,
        transform = 0,
        changedTrans = 0,
        dragging = false,
        nograp = slider.classList.contains('nograp'),
        startDrag = 0,
        lastScale = 0;
      if (sliderNums) {
        sliderNums.querySelector('.count').textContent = slidesCount;
      }
      if (slidesCount < 1 && sliderArrows) sliderArrows.style.display = 'none';
      if (sliderDots) {
        sliderDots.innerHTML = '';
        for (let i = 0; i < slidesCount; i++) {
          sliderDots.innerHTML += '<span></span>';
        }
        sliderDotsItems = sliderDots.querySelectorAll('span');
      }
      const getVisCount = () => {
        if (window.innerWidth <= 576 && slider.getAttribute('data-mob-vis')) {
          return +slider.getAttribute('data-mob-vis');
        } else if (window.innerWidth <= 768 && slider.getAttribute('data-stablet-vis')) {
          return +slider.getAttribute('data-stablet-vis');
        } else if (window.innerWidth <= 992 && slider.getAttribute('data-tablet-vis')) {
          return +slider.getAttribute('data-tablet-vis');
        } else if (window.innerWidth <= 1200 && slider.getAttribute('data-tablet-big-vis')) {
          return +slider.getAttribute('data-tablet-big-vis');
        } else if (window.innerWidth <= 1400 && slider.getAttribute('data-lap-vis')) {
          return +slider.getAttribute('data-lap-vis');
        } else if (window.innerWidth < 2100 && slider.getAttribute('data-pc-vis')) {
          return +slider.getAttribute('data-pc-vis');
        } else if (slider.getAttribute('data-tv-vis')) {
          return +slider.getAttribute('data-tv-vis');
        }
        return 1;
      };
      const slide = () => {
        transform = -(slideIndex * slideWidth);
        sliderTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
        slides.forEach(item => item.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        if (slideRightCount && slideLeftCount) {
          slideLeftCount.textContent = `${slideIndex === 0 ? slidesCount : slideIndex}/${slidesCount}`;
          slideRightCount.textContent = `${slideIndex + 2 > slidesCount ? 1 : slideIndex + 2}/${slidesCount}`;
        }
        if (sliderDots) {
          sliderDotsItems.forEach(dotItem => dotItem.classList.remove('active'));
          sliderDotsItems[slideIndex].classList.add('active');
        }
        if (sliderNums) {
          sliderNums.querySelector('.current').textContent = slideIndex + getVisCount();
        }
        if (slidesSecond.length > 0) {
          slidesSecond.forEach(item => item.classList.remove('active'));
          slidesSecond[slideIndex].classList.add('active');
        }
      };
      const moveRight = () => {
        slideIndex + getVisCount() >= slidesCount ? slideIndex = 0 : slideIndex++;
        slide();
      };
      const moveLeft = () => {
        slideIndex <= 0 ? slideIndex = slidesCount - getVisCount() : slideIndex--;
        slide();
      };
      const customMove = scale => {
        slideIndex += scale;
        if (slideIndex < 0) slideIndex = 0;
        if (slideIndex + getVisCount() >= slidesCount) slideIndex = slidesCount - getVisCount();
        slide();
      };
      const setSlideWidth = () => {
        slideWidth = slides[0].offsetWidth + +window.getComputedStyle(slides[0]).marginRight.replace('px', '');
      };
      const maxTransform = () => {
        return -(slideWidth * (slidesCount - getVisCount()));
      };
      const setTransform = scale => {
        changedTrans = transform + scale;
        if (changedTrans > 0) changedTrans = 0;
        if (changedTrans < maxTransform()) changedTrans = maxTransform();
        sliderTrack.style.transform = `translateX(${changedTrans}px)`;
      };
      const closeTransform = (gap = 150) => {
        if (dragging) {
          sliderTrack.classList.remove('fast');
          sliderList.classList.remove('grabbing');
          dragging = false;
          transform = changedTrans;
          let moved = -Math.ceil(lastScale / slideWidth);
          if (moved === 0) {
            if (lastScale < -gap) moved = 1;
            if (lastScale > gap) moved = -1;
          }
          customMove(moved);
          lastScale = 0;
          startDrag = 0;
        }
      };
      const openMove = pos => {
        dragging = true;
        startDrag = pos;
      };
      const moving = pos => {
        if (dragging) {
          sliderTrack.classList.add('fast');
          sliderList.classList.add('grabbing');
          lastScale = pos - startDrag;
          setTransform(pos - startDrag);
        }
      };
      slides.forEach((item, key) => {
        if (item.classList.contains('active')) slideIndex = key + getVisCount() >= slidesCount ? slidesCount - getVisCount() : key;
        item.addEventListener('click', () => {
          if (slidesSecond.length > 0) {
            slidesSecond.forEach(itemS => itemS.classList.remove('active'));
            slidesSecond[key].classList.add('active');
            slides.forEach(itemS => itemS.classList.remove('active'));
            slides[key].classList.add('active');
          }
        });
      });
      setSlideWidth();
      slide();
      if (!nograp) {
        sliderList.addEventListener('mousedown', e => openMove(e.clientX));
        sliderList.addEventListener('mousemove', e => moving(e.clientX));
        sliderList.addEventListener('mouseup', () => closeTransform(150));
        sliderList.addEventListener('mouseleave', () => closeTransform(150));
        sliderList.addEventListener('touchstart', e => openMove(e.touches[0].clientX));
        sliderList.addEventListener('touchmove', e => moving(e.touches[0].clientX));
        sliderList.addEventListener('touchend', () => closeTransform(50));
      }
      slideRight && slideRight.addEventListener('click', moveRight);
      slideLeft && slideLeft.addEventListener('click', moveLeft);
      if (sliderDots) {
        sliderDotsItems.forEach((dotItem, dotKey) => {
          dotItem.addEventListener('click', () => {
            slideIndex = dotKey;
            slide();
          });
        });
      }
      window.addEventListener("resize", () => {
        setSlideWidth();
        slide();
      });
    });
  } catch (e) {
    console.log(e.stack);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./assets/es6/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/scrolling */ "./assets/es6/blocks/scrolling.js");
/* harmony import */ var _blocks_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/mask */ "./assets/es6/blocks/mask.js");
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/slider */ "./assets/es6/blocks/slider.js");
/* harmony import */ var _blocks_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/forms */ "./assets/es6/blocks/forms.js");
/* harmony import */ var _blocks_other__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/other */ "./assets/es6/blocks/other.js");





'use strict';
window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_scrolling__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_mask__WEBPACK_IMPORTED_MODULE_1__["default"])('input[type="tel"]');
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_forms__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_other__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map