/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};


if (false) {}

var ourIcon = document.getElementById('menu-icon');
var ourMenu = document.getElementById('menu');
ourIcon.addEventListener('click', function () {
  if (ourMenu.className != "show") {
    ourMenu.className = ourMenu.className + "show";
  } else {
    ourMenu.className = "";
  }
});
/******/ })()
;