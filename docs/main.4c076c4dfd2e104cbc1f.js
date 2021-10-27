/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./app/assets/scripts/modules/MobileMenu.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.ourIcon = document.querySelector('.header__menu-icon');
    this.menuTop = document.querySelector('.header__menu-icon__top');
    this.menuMiddle = document.querySelector('.header__menu-icon__middle');
    this.menuBottom = document.querySelector('.header__menu-icon__bottom');
    this.ourMenu = document.querySelector('.menu');
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.ourIcon.addEventListener("click", function () {
        return _this.toggleTheMenu();
      });
    }
  }, {
    key: "toggleTheMenu",
    value: function toggleTheMenu() {
      this.ourIcon.classList.toggle("header__menu-icon--fixed");
      this.ourMenu.classList.toggle("show");
      this.menuTop.classList.toggle("white");
      this.menuMiddle.classList.toggle("white");
      this.menuBottom.classList.toggle("white");
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ const modules_MobileMenu = (MobileMenu);
;// CONCATENATED MODULE: ./app/assets/scripts/App.js



if (false) {}

new modules_MobileMenu();
/******/ })()
;