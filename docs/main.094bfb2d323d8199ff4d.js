/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


if (false) {}

var ourIcon = document.getElementById('menu-icon');
var menuTop = document.getElementById('menu-icon__top');
var menuMiddle = document.getElementById('menu-icon__middle');
var menuBottom = document.getElementById('menu-icon__bottom');
var ourMenu = document.getElementById('menu');
ourIcon.addEventListener('click', function () {
  if (ourMenu.className != "show") {
    ourIcon.className = "header__menu-icon header__menu-icon--fixed";
    ourMenu.className = ourMenu.className + "show";
    menuTop.className = menuTop.className + " white";
    menuMiddle.className = menuMiddle.className + " white";
    menuBottom.className = menuBottom.className + " white";
  } else {
    ourMenu.className = "";
    menuTop.classList.remove("white");
    menuMiddle.classList.remove("white");
    menuBottom.classList.remove("white");
    ourIcon.classList.remove("header__menu-icon--fixed");
  }
});
/******/ })()
;