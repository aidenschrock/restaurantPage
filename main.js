/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_pageElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageElements */ \"./src/pages/pageElements.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n;\n\n\n\n\n(0,_pages_pageElements__WEBPACK_IMPORTED_MODULE_0__.buildPage)();\ndocument.getElementById(\"home\").addEventListener(\"click\", tabHome);\ndocument.getElementById(\"about\").addEventListener(\"click\", tabAbout);\ndocument.getElementById(\"menu\").addEventListener(\"click\", tabMenu);\ndocument.getElementById(\"contact\").addEventListener(\"click\", tabContact);\n\nfunction tabHome() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"\");\n  content.innerHTML = \"\";\n  (0,_pages_pageElements__WEBPACK_IMPORTED_MODULE_0__.buildPage)();\n}\n\nfunction tabAbout() {\n  var content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n  (0,_pages_about__WEBPACK_IMPORTED_MODULE_1__.aboutBuild)();\n}\n\nfunction tabMenu() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"\");\n  content.innerHTML = \"\";\n  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__.menuBuild)();\n}\n\nfunction tabContact() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"\");\n  content.innerHTML = \"\";\n  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_3__.contactBuild)();\n}\n\nconsole.log('Hello!');\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! namespace exports */
/*! export aboutBuild [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutBuild\": () => /* binding */ aboutBuild\n/* harmony export */ });\nfunction aboutBuild() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"aboutContainer\");\n  var title = document.createElement('h1'); // title.textContent = \"About\"\n  // title.setAttribute(\"id\", \"aboutTitle\")\n\n  var image = document.createElement('img');\n  image.setAttribute(\"id\", \"aboutImage\");\n  image.src = \"/assets/aboutimage.jpg\";\n  var para = document.createElement('p');\n  para.setAttribute(\"id\", \"aboutPara\");\n  para.textContent = \"The idea for Divine Diner was formed by Jan Brooks in 2006. She spent many twilight hours at\\\n     diners to recover from the traditional college drinking and fell in love with the 1950's diner vibe. However, \\\n     she found herself wanting comfort food that fit a healthier lifestyle. That's when Jan decided to create Divine \\\n     Diner! Divine Diner has the aesthetic and comfort of a typical diner, but creates the traditional diner meals with a \\\n     healthy twist.\";\n  content.appendChild(image);\n  content.appendChild(title);\n  content.appendChild(para);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/breakfast.js":
/*!********************************!*\
  !*** ./src/pages/breakfast.js ***!
  \********************************/
/*! namespace exports */
/*! export breakfastBuild [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"breakfastBuild\": () => /* binding */ breakfastBuild\n/* harmony export */ });\nfunction breakfastBuild() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"breakfastContainer\");\n  var title = document.createElement('h1');\n  title.textContent = \"Breakfast Menu\";\n  title.setAttribute(\"id\", \"breakfastTitle\");\n  var menuText = document.createElement('p');\n  menuText.setAttribute(\"id\", \"breakfastPara\");\n  menuText.textContent = \"Banana Oat Waffles\\r\\nBreakfast Burritos\\r\\nEgg & Sweet Potato Hash\\r\\nUltimate Breakfast Bowl\";\n  var sidesTitle = document.createElement('h2');\n  sidesTitle.setAttribute(\"id\", \"sidesTitle\");\n  sidesTitle.textContent = \"Sides\";\n  var breakfastSides = document.createElement('p');\n  breakfastSides.setAttribute(\"id\", \"breakfastSides\");\n  breakfastSides.textContent = \"Vegan Hashbrowns\\r\\nFruit cup\\r\\nFruit & Yogurt Parfaits\\r\\nTurkey Bacon\";\n  content.appendChild(title);\n  content.appendChild(menuText);\n  content.appendChild(sidesTitle);\n  content.appendChild(breakfastSides);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/breakfast.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! namespace exports */
/*! export contactBuild [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactBuild\": () => /* binding */ contactBuild\n/* harmony export */ });\nfunction contactBuild() {\n  var content = document.getElementById(\"content\");\n  var title = document.createElement('h1');\n  title.textContent = \"Reach out to us!\";\n  title.setAttribute(\"id\", \"contactTitle\");\n  var para = document.createElement('p');\n  para.setAttribute(\"id\", \"contactPara\");\n  para.textContent = \"Hours of Operation:\\r\\nMon-Thurs: 9am-9pm\\r\\nFri & Sat: 9am-11pm\\r\\nSun: 9am-5pm \\r\\n\\r\\nPhone Number: 888-888-888 \\r\\nAddress: 666 goodboy lane bmx, TX \\r\\nEmail:Gotcha @aol.com \";\n  content.appendChild(title);\n  content.appendChild(para);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/drinks.js":
/*!*****************************!*\
  !*** ./src/pages/drinks.js ***!
  \*****************************/
/*! namespace exports */
/*! export drinksBuild [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drinksBuild\": () => /* binding */ drinksBuild\n/* harmony export */ });\nfunction drinksBuild() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"drinksContainer\");\n  var title = document.createElement('h1');\n  title.textContent = \"Drink Menu\";\n  title.setAttribute(\"id\", \"drinkTitle\");\n  var drinkText = document.createElement('p');\n  drinkText.setAttribute(\"id\", \"drinkPara\");\n  drinkText.textContent = \"Coffee\\r\\nOrange Juice\\r\\nGrape Juice\\r\\nSpring Water\";\n  var smoothieTitle = document.createElement('h2');\n  smoothieTitle.textContent = \"Smoothies\";\n  smoothieTitle.setAttribute(\"id\", \"smoothieTitle\");\n  var menuText = document.createElement('p');\n  menuText.setAttribute(\"id\", \"smoothiePara\");\n  menuText.textContent = \"Strawberry\\r\\nMango\\r\\nBerry\\r\\nAvocado\";\n  content.appendChild(title);\n  content.appendChild(drinkText);\n  content.appendChild(smoothieTitle);\n  content.appendChild(menuText);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/drinks.js?");

/***/ }),

/***/ "./src/pages/lunch.js":
/*!****************************!*\
  !*** ./src/pages/lunch.js ***!
  \****************************/
/*! namespace exports */
/*! export lunchBuild [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lunchBuild\": () => /* binding */ lunchBuild\n/* harmony export */ });\nfunction lunchBuild() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"lunchContainer\");\n  var title = document.createElement('h1');\n  title.textContent = \"Lunch / Dinner Menu\";\n  title.setAttribute(\"id\", \"lunchTitle\");\n  var menuText = document.createElement('p');\n  menuText.setAttribute(\"id\", \"lunchPara\");\n  menuText.textContent = \"Vegan Burger\\r\\nHealthy Turkey Chili\\r\\nVeggie sandwich\";\n  var sidesTitle = document.createElement('h2');\n  sidesTitle.setAttribute(\"id\", \"lunchSidesTitle\");\n  sidesTitle.textContent = \"Sides\";\n  var lunchSides = document.createElement('p');\n  lunchSides.setAttribute(\"id\", \"lunchSides\");\n  lunchSides.textContent = \"Sweet Potato Fries\\r\\nBroccoli\\r\\nAsparagus Spears\\r\\nFeta Cheese Bites\";\n  content.appendChild(title);\n  content.appendChild(menuText);\n  content.appendChild(sidesTitle);\n  content.appendChild(lunchSides);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/lunch.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/*! namespace exports */
/*! export menuBuild [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuBuild\": () => /* binding */ menuBuild\n/* harmony export */ });\n/* harmony import */ var _breakfast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast */ \"./src/pages/breakfast.js\");\n/* harmony import */ var _lunch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lunch */ \"./src/pages/lunch.js\");\n/* harmony import */ var _drinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drinks */ \"./src/pages/drinks.js\");\n;\n\n\n\nfunction menuBuild() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"menuGrid\");\n  var figure1 = document.createElement('figure');\n  figure1.setAttribute(\"id\", \"figure1\");\n  var image1 = document.createElement('img');\n  image1.setAttribute(\"id\", \"breakfastImage\");\n  image1.src = \"/assets/BananaOatWaffles.jpg\";\n  var figcap1 = document.createElement('figcaption');\n  figcap1.setAttribute(\"id\", \"figcap1\");\n  figcap1.textContent = \"Breakfast\";\n  figure1.appendChild(image1);\n  figure1.appendChild(figcap1);\n  var figure2 = document.createElement('figure');\n  figure2.setAttribute(\"id\", \"figure2\");\n  var image2 = document.createElement('img');\n  image2.setAttribute(\"id\", \"lunchImage\");\n  image2.src = \"/assets/burger.jpg\";\n  var figcap2 = document.createElement('figcaption');\n  figcap2.setAttribute(\"id\", \"figcap2\");\n  figcap2.textContent = \"Lunch/Dinner\";\n  figure2.appendChild(image2);\n  figure2.appendChild(figcap2);\n  var figure3 = document.createElement('figure');\n  figure3.setAttribute(\"id\", \"figure3\");\n  var image3 = document.createElement('img');\n  image3.setAttribute(\"id\", \"drinkImage\");\n  image3.src = \"/assets/smoothie.jpg\";\n  var figcap3 = document.createElement('figcaption');\n  figcap3.setAttribute(\"id\", \"figcap3\");\n  figcap3.textContent = \"Drinks\";\n  figure3.appendChild(image3);\n  figure3.appendChild(figcap3);\n  figure1.addEventListener(\"click\", selectBreakfast);\n  figure2.addEventListener(\"click\", selectLunch);\n  figure3.addEventListener(\"click\", selectDrinks);\n\n  function selectBreakfast() {\n    console.log('contact click');\n    var content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n    (0,_breakfast__WEBPACK_IMPORTED_MODULE_0__.breakfastBuild)();\n  }\n\n  function selectLunch() {\n    console.log('contact click');\n    var content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n    (0,_lunch__WEBPACK_IMPORTED_MODULE_1__.lunchBuild)();\n  }\n\n  function selectDrinks() {\n    console.log('contact click');\n    var content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n    (0,_drinks__WEBPACK_IMPORTED_MODULE_2__.drinksBuild)();\n  }\n\n  content.appendChild(figure1);\n  content.appendChild(figure2);\n  content.appendChild(figure3);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/pageElements.js":
/*!***********************************!*\
  !*** ./src/pages/pageElements.js ***!
  \***********************************/
/*! namespace exports */
/*! export buildPage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildPage\": () => /* binding */ buildPage\n/* harmony export */ });\nfunction buildPage() {\n  var content = document.getElementById(\"content\");\n  content.setAttribute(\"class\", \"homePage\");\n  var title = document.createElement('h1');\n  title.textContent = \"Divine Diner\";\n  title.setAttribute(\"id\", \"title\"); // let image = document.createElement('img');\n  // image.setAttribute(\"id\", \"homeImage\");\n  // image.src = \"/assets/diner.jpg\"\n\n  var para = document.createElement('p');\n  para.setAttribute(\"id\", \"homePara\");\n  para.textContent = \"Diner classics with ingredients that make every bite guilt-free.\"; // content.appendChild(image)\n\n  content.appendChild(title);\n  content.appendChild(para);\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pages/pageElements.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/main.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/main.css ***!
  \********************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ \"./node_modules/css-loader/dist/runtime/cssWithMappingToString.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_diner_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/diner.jpg */ \"./src/assets/diner.jpg\");\n// Imports\n;\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Monoton&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@500&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_diner_jpg__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    background-color: black;\\n    color: white;\\n}\\n\\nul {\\n    list-style-type: none;\\n    padding-left: 0;\\n    display: flex;\\n    flex-direction: row;\\n    margin-bottom: 5px;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    flex-wrap: wrap;\\n    cursor: pointer;\\n    font-size: 25px;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\nli:hover {\\n    color: blue;\\n    background: rgb(24, 22, 22);\\n}\\n\\nli {\\n    box-sizing: border-box;\\n    flex: 1;\\n    padding: 15px 5px;\\n    text-align: center;\\n    transition: all 0.2s ease-in-out;\\n    vertical-align: middle;\\n}\\n\\n#content {\\n    position: relative;\\n    text-align: center;\\n}\\n\\n.homePage {\\n    width: 99vw;\\n    height: 80vh;\\n}\\n\\n.homePage::before {\\n    content: \\\"\\\";\\n    background-size: cover;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    opacity: 0.7;\\n    position: absolute;\\n    top: 0px;\\n    right: 0px;\\n    bottom: 0px;\\n    left: 0px;\\n}\\n\\n#title {\\n    position: absolute;\\n    width: 80vw;\\n    height: auto;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -70%);\\n    font-family: 'Bungee Shade', cursive;\\n    font-size: 150px;\\n    color: white;\\n}\\n\\n#homeImage {\\n    width: 99vw;\\n    height: 80vh;\\n    opacity: .5;\\n}\\n\\n#homePara {\\n    width: 80vw;\\n    height: auto;\\n    position: absolute;\\n    top: 70%;\\n    left: 50%;\\n    transform: translate(-50%, 100%);\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n    font-size: 50px;\\n}\\n\\n.aboutContainer {\\n    display: block;\\n    flex-wrap: nowrap;\\n    width: 90vw;\\n    margin-left: 5vw;\\n}\\n\\n#aboutTitle {\\n    text-align: left;\\n    /* margin-left: 60px;\\n    margin-top: 80px; */\\n    font-family: 'Monoton', cursive;\\n}\\n\\n#aboutPara {\\n    width: 40vw;\\n    flex: 1;\\n    justify-content: left;\\n    /* margin-left: 45px; */\\n    font-size: 43px;\\n    text-align: left;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n    line-height: 2;\\n}\\n\\n#aboutImage {\\n    height: 80vh;\\n    width: auto;\\n    flex: 1;\\n    justify-content: right;\\n    float: right;\\n    /* margin-top: 20px;\\n    margin-right: 60px; */\\n}\\n\\n.menuGrid {\\n    display: flex;\\n}\\n\\n#figure1,\\n#figure2,\\n#figure3 {\\n    margin-top: 15%;\\n    width: 400px;\\n    height: 400px;\\n    flex: 1;\\n    text-align: center;\\n}\\n\\n#breakfastImage,\\n#lunchImage,\\n#drinkImage {\\n    width: 300px;\\n    height: 300px;\\n    justify-content: center;\\n    opacity: .5;\\n}\\n\\n#breakfastImage:hover,\\n#lunchImage:hover,\\n#drinkImage:hover {\\n    opacity: 1;\\n}\\n\\n#figcap1,\\n#figcap2,\\n#figcap3 {\\n    font-size: 35px;\\n    padding: 10px;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n    text-align: center;\\n}\\n\\n#contactTitle {\\n    text-align: left;\\n    margin-top: 70px;\\n    margin-left: 60px;\\n}\\n\\n#contactPara {\\n    font-size: 30px;\\n    text-align: left;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    margin-left: 55px;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#breakfastTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#sidesTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#breakfastPara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#breakfastSides {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#lunchTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#lunchPara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#lunchSidesTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#lunchSides {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#drinkTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#drinkPara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#smoothieTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#smoothiePara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n@media screen and (max-width: 1000px) {\\n    #title {\\n        font-size: 100px;\\n    }\\n    #homePara {\\n        font-size: 35px;\\n    }\\n    #homeImage {\\n        width: 120vw;\\n    }\\n    #aboutPara {\\n        width: 40vw;\\n        font-size: 30px;\\n        flex-wrap: wrap;\\n    }\\n    #aboutImage {\\n        width: 40vw;\\n        height: auto;\\n    }\\n    #figure1,\\n    #figure2,\\n    #figure3 {\\n        width: 200px;\\n        height: 200px;\\n    }\\n    #breakfastImage,\\n    #lunchImage,\\n    #drinkImage {\\n        width: 200px;\\n        height: 200px;\\n    }\\n    #breakfastTitle,\\n    #sidesTitle,\\n    #breakfastPara,\\n    #breakfastSides,\\n    #lunchTitle,\\n    #lunchPara,\\n    #lunchSidesTitle,\\n    #lunchSides,\\n    #drinkTitle,\\n    #drinkPara,\\n    #smoothieTitle,\\n    #smoothiePara {\\n        text-align: center;\\n        justify-content: center;\\n    }\\n    #breakfastPara,\\n    #breakfastSides,\\n    #lunchPara,\\n    #lunchSides,\\n    #drinkPara,\\n    #smoothiePara {\\n        padding-left: 160px;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/css/main.css\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');\\n@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');\\n@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@500&display=swap');\\nbody {\\n    background-color: black;\\n    color: white;\\n}\\n\\nul {\\n    list-style-type: none;\\n    padding-left: 0;\\n    display: flex;\\n    flex-direction: row;\\n    margin-bottom: 5px;\\n    justify-content: space-between;\\n    align-items: flex-end;\\n    flex-wrap: wrap;\\n    cursor: pointer;\\n    font-size: 25px;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\nli:hover {\\n    color: blue;\\n    background: rgb(24, 22, 22);\\n}\\n\\nli {\\n    box-sizing: border-box;\\n    flex: 1;\\n    padding: 15px 5px;\\n    text-align: center;\\n    transition: all 0.2s ease-in-out;\\n    vertical-align: middle;\\n}\\n\\n#content {\\n    position: relative;\\n    text-align: center;\\n}\\n\\n.homePage {\\n    width: 99vw;\\n    height: 80vh;\\n}\\n\\n.homePage::before {\\n    content: \\\"\\\";\\n    background-size: cover;\\n    background-image: url(../assets/diner.jpg);\\n    opacity: 0.7;\\n    position: absolute;\\n    top: 0px;\\n    right: 0px;\\n    bottom: 0px;\\n    left: 0px;\\n}\\n\\n#title {\\n    position: absolute;\\n    width: 80vw;\\n    height: auto;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -70%);\\n    font-family: 'Bungee Shade', cursive;\\n    font-size: 150px;\\n    color: white;\\n}\\n\\n#homeImage {\\n    width: 99vw;\\n    height: 80vh;\\n    opacity: .5;\\n}\\n\\n#homePara {\\n    width: 80vw;\\n    height: auto;\\n    position: absolute;\\n    top: 70%;\\n    left: 50%;\\n    transform: translate(-50%, 100%);\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n    font-size: 50px;\\n}\\n\\n.aboutContainer {\\n    display: block;\\n    flex-wrap: nowrap;\\n    width: 90vw;\\n    margin-left: 5vw;\\n}\\n\\n#aboutTitle {\\n    text-align: left;\\n    /* margin-left: 60px;\\n    margin-top: 80px; */\\n    font-family: 'Monoton', cursive;\\n}\\n\\n#aboutPara {\\n    width: 40vw;\\n    flex: 1;\\n    justify-content: left;\\n    /* margin-left: 45px; */\\n    font-size: 43px;\\n    text-align: left;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n    line-height: 2;\\n}\\n\\n#aboutImage {\\n    height: 80vh;\\n    width: auto;\\n    flex: 1;\\n    justify-content: right;\\n    float: right;\\n    /* margin-top: 20px;\\n    margin-right: 60px; */\\n}\\n\\n.menuGrid {\\n    display: flex;\\n}\\n\\n#figure1,\\n#figure2,\\n#figure3 {\\n    margin-top: 15%;\\n    width: 400px;\\n    height: 400px;\\n    flex: 1;\\n    text-align: center;\\n}\\n\\n#breakfastImage,\\n#lunchImage,\\n#drinkImage {\\n    width: 300px;\\n    height: 300px;\\n    justify-content: center;\\n    opacity: .5;\\n}\\n\\n#breakfastImage:hover,\\n#lunchImage:hover,\\n#drinkImage:hover {\\n    opacity: 1;\\n}\\n\\n#figcap1,\\n#figcap2,\\n#figcap3 {\\n    font-size: 35px;\\n    padding: 10px;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n    text-align: center;\\n}\\n\\n#contactTitle {\\n    text-align: left;\\n    margin-top: 70px;\\n    margin-left: 60px;\\n}\\n\\n#contactPara {\\n    font-size: 30px;\\n    text-align: left;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    margin-left: 55px;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#breakfastTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#sidesTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#breakfastPara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#breakfastSides {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#lunchTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#lunchPara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#lunchSidesTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#lunchSides {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#drinkTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#drinkPara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n#smoothieTitle {\\n    margin-top: 40px;\\n    margin-left: 40px;\\n    text-decoration: underline;\\n    text-align: left;\\n}\\n\\n#smoothiePara {\\n    width: 500px;\\n    font-size: 25px;\\n    text-align: left;\\n    margin-left: 50px;\\n    white-space: pre-line;\\n    line-height: 2.5;\\n    font-family: 'Yanone Kaffeesatz', sans-serif;\\n}\\n\\n@media screen and (max-width: 1000px) {\\n    #title {\\n        font-size: 100px;\\n    }\\n    #homePara {\\n        font-size: 35px;\\n    }\\n    #homeImage {\\n        width: 120vw;\\n    }\\n    #aboutPara {\\n        width: 40vw;\\n        font-size: 30px;\\n        flex-wrap: wrap;\\n    }\\n    #aboutImage {\\n        width: 40vw;\\n        height: auto;\\n    }\\n    #figure1,\\n    #figure2,\\n    #figure3 {\\n        width: 200px;\\n        height: 200px;\\n    }\\n    #breakfastImage,\\n    #lunchImage,\\n    #drinkImage {\\n        width: 200px;\\n        height: 200px;\\n    }\\n    #breakfastTitle,\\n    #sidesTitle,\\n    #breakfastPara,\\n    #breakfastSides,\\n    #lunchTitle,\\n    #lunchPara,\\n    #lunchSidesTitle,\\n    #lunchSides,\\n    #drinkTitle,\\n    #drinkPara,\\n    #smoothieTitle,\\n    #smoothiePara {\\n        text-align: center;\\n        justify-content: center;\\n    }\\n    #breakfastPara,\\n    #breakfastSides,\\n    #lunchPara,\\n    #lunchSides,\\n    #drinkPara,\\n    #smoothiePara {\\n        padding-left: 160px;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/main.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nmodule.exports = function cssWithMappingToString(item) {\n  var _item = _slicedToArray(item, 4),\n      content = _item[1],\n      cssMapping = _item[3];\n\n  if (typeof btoa === 'function') {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    var sourceMapping = \"/*# \".concat(data, \" */\");\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/cssWithMappingToString.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 3:0-14 */
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/diner.jpg":
/*!******************************!*\
  !*** ./src/assets/diner.jpg ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"03b80caa42afe1fcd7f0053f5f096f7a.jpg\");\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/diner.jpg?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./main.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/css/main.css\");\n;\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_main_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://my-webpack-project/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;