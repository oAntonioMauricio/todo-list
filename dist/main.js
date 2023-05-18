/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/container/container.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/container/container.css ***!
  \**************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/background.svg */ "./src/components/container/assets/svg/background.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mainContainer {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #f5f7f9;\n\n  display: grid;\n  grid-template-rows: 150px 1fr;\n  grid-template-columns: 150px 1fr;\n}\n\n@media only screen and (max-width: 767px) {\n  /* CSS rules for mobile devices */\n}\n", "",{"version":3,"sources":["webpack://./src/components/container/container.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,yDAAoD;EACpD,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,yBAAyB;;EAEzB,aAAa;EACb,6BAA6B;EAC7B,gCAAgC;AAClC;;AAEA;EACE,iCAAiC;AACnC","sourcesContent":[".mainContainer {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(\"./assets/svg/background.svg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #f5f7f9;\n\n  display: grid;\n  grid-template-rows: 150px 1fr;\n  grid-template-columns: 150px 1fr;\n}\n\n@media only screen and (max-width: 767px) {\n  /* CSS rules for mobile devices */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".logoDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  grid-column: 1;\n  padding: 2rem 0;\n}\n\n.header {\n  grid-column: 2;\n  padding: 2rem 0;\n}\n\n.projectDiv {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 100%;\n}\n\n.project {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 12px;\n\n  background-color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.projectTitle {\n  margin: 0;\n}\n\n.projectButton {\n  background-color: #0258ff;\n  color: #ffffff;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  border-style: none;\n\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n}\n\n.projectButton:hover {\n  background-color: #1e40af;\n}\n\n.svgHeader {\n  width: 1rem;\n  height: 1rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/header/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;;EAET,uBAAuB;EACvB,oBAAoB;EACpB,mBAAmB;EACnB;sCACoC;AACtC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;;EAElB,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":[".logoDiv {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  grid-column: 1;\n  padding: 2rem 0;\n}\n\n.header {\n  grid-column: 2;\n  padding: 2rem 0;\n}\n\n.projectDiv {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  height: 100%;\n}\n\n.project {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 12px;\n\n  background-color: white;\n  padding: 1rem 1.5rem;\n  border-radius: 24px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n\n.projectTitle {\n  margin: 0;\n}\n\n.projectButton {\n  background-color: #0258ff;\n  color: #ffffff;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 500;\n  border-radius: 0.5rem;\n  border-style: none;\n\n  display: inline-flex;\n  text-align: center;\n  align-items: center;\n}\n\n.projectButton:hover {\n  background-color: #1e40af;\n}\n\n.svgHeader {\n  width: 1rem;\n  height: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/todo/todo.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/todo/todo.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".todoGrid {\n  grid-column: 2;\n\n  display: grid;\n  grid-template-columns: 350px 350px;\n  gap: 2rem;\n  overflow: auto;\n}\n\n.todoTab,\n.modalSection {\n  background-color: white;\n  padding: 1.5rem 1.5rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  height: min-content;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.todoH4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-transform: capitalize;\n}\n\n.todoFlex {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.todoBox {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #dbdbdb;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n  gap: 0.75rem;\n}\n\n.todoEl {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.todoEl p {\n  margin: 0;\n}\n\n.divDatePrior {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.newDate {\n  color: #8a8a8a;\n}\n\n.todoOption {\n  display: flex;\n  gap: 1rem;\n}\n\n.todoOption svg {\n  color: #8a8a8a;\n  cursor: pointer;\n}\n\n.todoOption svg:hover {\n  color: #0258ff;\n}\n\n.todoOption svg path {\n  pointer-events: none;\n}\n\n.newTodo {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: white;\n  color: #b1b1b1;\n  border-style: none;\n  border: 2px solid #dbdbdb;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n\n  cursor: pointer;\n}\n\n.textNewTodo {\n  margin: 0;\n}\n\n/* Modal */\n\n.modalSection {\n  width: 450px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n\n.modalDiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.closeDiv {\n  display: flex;\n  color: #b1b1b1;\n  background: white;\n  border-style: none;\n  border: 2px solid #dbdbdb;\n  border-radius: 0.3rem;\n  padding: 0.1rem;\n  cursor: pointer;\n}\n\n.modalOverlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.formDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todoForm {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.priorSet {\n  display: flex;\n  gap: 1rem;\n}\n\n.priorFlex {\n  display: flex;\n  gap: 0.25rem;\n}\n\n.submitForm {\n  background-color: #0258ff;\n  color: white;\n  border-style: none;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.submitForm:hover {\n  background-color: #024fe9;\n}\n\n@media only screen and (max-width: 767px) {\n  /* CSS rules for mobile devices */\n  .todoGrid {\n    grid-column: 1/3;\n    display: grid;\n    grid-template-columns: 100% 100%;\n    padding: 25px;\n    gap: 2rem;\n    overflow: auto;\n    grid-auto-flow: row;\n  }\n\n  .modalSection {\n    width: auto;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/components/todo/todo.css"],"names":[],"mappings":"AAAA;EACE,cAAc;;EAEd,aAAa;EACb,kCAAkC;EAClC,SAAS;EACT,cAAc;AAChB;;AAEA;;EAEE,uBAAuB;EACvB,sBAAsB;EACtB,qBAAqB;EACrB;sCACoC;EACpC,mBAAmB;;EAEnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,cAAc;EACd,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;;EAEf,eAAe;AACjB;;AAEA;EACE,SAAS;AACX;;AAEA,UAAU;;AAEV;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,qBAAqB;EACrB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;EACjC;IACE,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,aAAa;IACb,SAAS;IACT,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;AACF","sourcesContent":[".todoGrid {\n  grid-column: 2;\n\n  display: grid;\n  grid-template-columns: 350px 350px;\n  gap: 2rem;\n  overflow: auto;\n}\n\n.todoTab,\n.modalSection {\n  background-color: white;\n  padding: 1.5rem 1.5rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  height: min-content;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.todoH4 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 0;\n  margin-bottom: 0;\n  text-transform: capitalize;\n}\n\n.todoFlex {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.todoBox {\n  display: flex;\n  flex-direction: column;\n  border: 2px solid #dbdbdb;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n  gap: 0.75rem;\n}\n\n.todoEl {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.todoEl p {\n  margin: 0;\n}\n\n.divDatePrior {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.newDate {\n  color: #8a8a8a;\n}\n\n.todoOption {\n  display: flex;\n  gap: 1rem;\n}\n\n.todoOption svg {\n  color: #8a8a8a;\n  cursor: pointer;\n}\n\n.todoOption svg:hover {\n  color: #0258ff;\n}\n\n.todoOption svg path {\n  pointer-events: none;\n}\n\n.newTodo {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 0.5rem;\n  background-color: white;\n  color: #b1b1b1;\n  border-style: none;\n  border: 2px solid #dbdbdb;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n\n  cursor: pointer;\n}\n\n.textNewTodo {\n  margin: 0;\n}\n\n/* Modal */\n\n.modalSection {\n  width: 450px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n}\n\n.modalDiv {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.closeDiv {\n  display: flex;\n  color: #b1b1b1;\n  background: white;\n  border-style: none;\n  border: 2px solid #dbdbdb;\n  border-radius: 0.3rem;\n  padding: 0.1rem;\n  cursor: pointer;\n}\n\n.modalOverlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(3px);\n  z-index: 1;\n}\n\n.hidden {\n  display: none;\n}\n\n.formDiv {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todoForm {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.priorSet {\n  display: flex;\n  gap: 1rem;\n}\n\n.priorFlex {\n  display: flex;\n  gap: 0.25rem;\n}\n\n.submitForm {\n  background-color: #0258ff;\n  color: white;\n  border-style: none;\n  border-radius: 0.3rem;\n  padding: 0.5rem;\n  cursor: pointer;\n}\n\n.submitForm:hover {\n  background-color: #024fe9;\n}\n\n@media only screen and (max-width: 767px) {\n  /* CSS rules for mobile devices */\n  .todoGrid {\n    grid-column: 1/3;\n    display: grid;\n    grid-template-columns: 100% 100%;\n    padding: 25px;\n    gap: 2rem;\n    overflow: auto;\n    grid-auto-flow: row;\n  }\n\n  .modalSection {\n    width: auto;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  font-family: \"Poppins\", sans-serif;\n}\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,kCAAkC;AACpC","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;IAGI;;AAEJ;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;;IAGI;;AAEJ;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;IAEI;;AAEJ;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;;EAIE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;;;;IAKI;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/components/container/container.css":
/*!************************************************!*\
  !*** ./src/components/container/container.css ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/container/container.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/todo/todo.css":
/*!**************************************!*\
  !*** ./src/components/todo/todo.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./todo.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/todo/todo.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/appLogic/todoLogic.js":
/*!***********************************!*\
  !*** ./src/appLogic/todoLogic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// todo object to create / update todo list
const todoLogic = (() => {
  //
  const saveTodo = {
    projects: {
      todo: [
        {
          title: "Your first task!",
          date: "2023-05-20",
          priority: {
            high: false,
            med: false,
            low: true,
          },
        },
      ],
      done: [],
    },
  };

  // create and add todo to DB
  const createTodo = (data) => {
    if (typeof data === "object") {
      // eslint-disable-next-line no-console
      console.log("Running Logic...");
      saveTodo.projects.todo.push(data);
      // eslint-disable-next-line no-console
      console.log(saveTodo.projects);
    } else {
      // eslint-disable-next-line no-console
      console.log("Invalid argument. Please provide an object.");
    }
  };

  // move Todo
  const moveTodo = (project, from, index, to) => {
    // eslint-disable-next-line no-console
    console.log("moving todo to a differente category");
    const todoMoving = saveTodo[project][from].splice(index, 1)[0];
    saveTodo[project][to].push(todoMoving);
    // eslint-disable-next-line no-console
    console.log(saveTodo);
  };

  // delete task from DB
  const deleteTodo = (category, index) => {
    // eslint-disable-next-line no-console
    console.log("deleting entry from DB...");
    saveTodo.projects[category].splice(index, 1);
    // eslint-disable-next-line no-console
    console.log(saveTodo.projects);
  };

  const getData = () => saveTodo;

  return { createTodo, moveTodo, deleteTodo, getData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoLogic);


/***/ }),

/***/ "./src/components/container/container.js":
/*!***********************************************!*\
  !*** ./src/components/container/container.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.css */ "./src/components/container/container.css");


// append main container with css grid for layout
const container = () => {
  console.log("container ONLINE");

  const root = document.getElementById("root");

  // main container
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("mainContainer");
  mainContainer.setAttribute("id", "mainContainer");
  root.append(mainContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (container);


/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.css */ "./src/components/header/header.css");


// build header

const header = (() => {
  const build = () => {
    console.log("header ONLINE");

    const container = document.getElementById("mainContainer");

    // - FIRST HALF -
    // logo section
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logoDiv");
    container.append(logoDiv);

    // Create a new logo element
    const logo = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    logo.setAttribute("version", "1.0");
    logo.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    logo.setAttribute("width", "50");
    logo.setAttribute("height", "50");
    logo.setAttribute("xml:space", "preserve");
    logo.setAttribute("viewBox", "0 0 100 100");

    // Create a new path element and set its attributes
    const logoPath1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    logoPath1.setAttribute("fill", "#0258FF");
    logoPath1.setAttribute(
      "d",
      "M30 58.841h32.246c11.648 0 21.087-9.438 21.087-21.084 0-11.645-9.44-21.09-21.087-21.09H30V10h32.246C77.575 10 90 22.43 90 37.757c0 15.326-12.425 27.751-27.754 27.751H30v-6.667z"
    );

    // Create a new path element and set its attributes
    const logoPath2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    logoPath2.setAttribute("fill", "#263238");
    logoPath2.setAttribute(
      "d",
      "M70 83.333V90H37.754C22.425 90 10 77.57 10 62.243c0-15.326 12.425-27.751 27.754-27.751H70v6.667H37.754c-11.648 0-21.087 9.438-21.087 21.084 0 11.644 9.44 21.09 21.087 21.09H70z"
    );

    // Append the path elements to the logo element
    logo.appendChild(logoPath1);
    logo.appendChild(logoPath2);

    // Append the logo element to the div element
    logoDiv.appendChild(logo);

    // - SECOND HALF -
    // header html
    const htmlHeader = document.createElement("header");
    htmlHeader.classList.add("header");
    container.append(htmlHeader);

    // div for project selection
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    htmlHeader.append(projectDiv);

    // project
    const project = document.createElement("div");
    project.classList.add("project");
    projectDiv.append(project);

    // project title
    const projectTitle = document.createElement("h3");
    projectTitle.classList.add("projectTitle");
    projectTitle.textContent = "Projects";
    projectTitle.setAttribute("id", "projectTitle");
    project.append(projectTitle);

    // project button
    const projectButton = document.createElement("button");
    projectButton.classList.add("projectButton");

    project.append(projectButton);

    // svg for button
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("svgHeader");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("viewBox", "0 0 24 24");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("d", "M19 9l-7 7-7-7");

    svg.appendChild(path);
    projectButton.appendChild(svg);
  };

  return { build };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/components/todo/todo.js":
/*!*************************************!*\
  !*** ./src/components/todo/todo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.css */ "./src/components/todo/todo.css");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _appLogic_todoLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../appLogic/todoLogic */ "./src/appLogic/todoLogic.js");




// build the to do section

const todo = (() => {
  //
  // func to build html
  const buildHtml = (className, element, parent, text) => {
    const newEl = document.createElement(element);
    if (className) {
      newEl.classList.add(className);
    }
    newEl.textContent = text;
    parent.append(newEl);
    return newEl;
  };

  // main build func
  const build = () => {
    // eslint-disable-next-line no-console
    console.log("todo ONLINE");
    const container = document.getElementById("mainContainer");

    // build grid for todo bars
    const todoGrid = buildHtml("todoGrid", "div", container);
    todoGrid.setAttribute("id", "todoGrid");

    // build done tab
    const doneTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for done tab
    const doneH4 = buildHtml("todoH4", "h4", doneTab);
    doneH4.textContent = "Done";

    // build flex for done cards
    const doneFlex = buildHtml("todoFlex", "div", doneTab);
    doneFlex.setAttribute("id", "doneParent");

    // build done container
    const doneBox = buildHtml("todoBox", "div", doneFlex);

    // build first done
    const doneEl = buildHtml("todoEl", "div", doneBox);
    doneEl.textContent = "This task is done!";

    // ** EXTRA BUILD ** //
    // eslint-disable-next-line no-use-before-define
    buildModal();
    // eslint-disable-next-line no-use-before-define
    deleteModal();

    // eslint-disable-next-line no-use-before-define
    updateUi();
  };

  // func to build the add new modal
  const buildModal = () => {
    // eslint-disable-next-line no-console
    console.log("modal ONLINE");

    const container = document.getElementById("mainContainer");

    // build section for modal
    const modalSection = buildHtml("modalSection", "section", container);
    modalSection.classList.add("hidden");
    modalSection.setAttribute("id", "modalSection");

    // build div(overlay) for modal
    const modalOverlay = buildHtml("modalOverlay", "div", container);
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("id", "modalOverlay");

    // build div/flex for modal
    const modalDiv = buildHtml("modalDiv", "div", modalSection);

    // build h3
    const modalH3 = buildHtml("todoH4", "h4", modalDiv);
    modalH3.textContent = "Add Task";

    // build close button
    const closeDiv = buildHtml("closeDiv", "button", modalDiv);

    // build svg for close button
    const svgClose = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgClose.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgClose.setAttribute("fill", "none");
    svgClose.setAttribute("viewBox", "0 0 24 24");
    svgClose.setAttribute("stroke-width", "1.5");
    svgClose.setAttribute("stroke", "currentColor");
    svgClose.setAttribute("class", "svgClose");
    svgClose.setAttribute("width", "20"); // set width to 20px
    svgClose.setAttribute("height", "20"); // set height to 20px

    const closePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    closePath.setAttribute("stroke-linecap", "round");
    closePath.setAttribute("stroke-linejoin", "round");
    closePath.setAttribute("d", "M6 18L18 6M6 6l12 12");

    svgClose.appendChild(closePath);
    closeDiv.append(svgClose);

    // build form
    const todoForm = buildHtml("todoForm", "form", modalSection);
    todoForm.setAttribute("id", "todoForm");

    // build div for title
    const titleDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for title
    // eslint-disable-next-line no-unused-vars
    const titleLabel = buildHtml("titleLabel", "label", titleDiv, "Title");
    titleLabel.setAttribute("for", "title");
    // eslint-disable-next-line no-unused-vars
    const titleInput = buildHtml("titleInput", "input", titleDiv);
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    titleInput.required = true;

    // build div for dueDate
    const dateDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for dueDate
    // eslint-disable-next-line no-unused-vars
    const dateLabel = buildHtml("dateLabel", "label", dateDiv, "Due Date");
    dateLabel.setAttribute("for", "date");
    // eslint-disable-next-line no-unused-vars
    const dateInput = buildHtml("dateInput", "input", dateDiv);
    dateInput.type = "date";
    dateInput.id = "date";
    dateInput.name = "date";

    // build div for priority
    const priorDiv = buildHtml("formDiv", "div", todoForm);

    // build label and input for priority
    // eslint-disable-next-line no-unused-vars
    const priorLabel = buildHtml("priorLabel", "label", priorDiv, "Priority");
    const priorSet = buildHtml("priorSet", "div", priorDiv);

    // build div for high label and input
    const highPriorDiv = buildHtml("priorFlex", "div", priorSet);

    // create a radio button element for the "High" priority level
    const highPrior = buildHtml(null, "input", highPriorDiv);
    highPrior.type = "checkbox";
    highPrior.id = "high";
    highPrior.name = "priority";
    highPrior.value = "high";

    // create a label element for the "High" priority level radio button
    const highPriorLabel = buildHtml(null, "label", highPriorDiv);
    highPriorLabel.textContent = "High";
    highPriorLabel.setAttribute("for", "high");

    // build div for medium label and input
    const medPriorDiv = buildHtml("priorFlex", "div", priorSet);

    // create a radio button element for the "Medium" priority level
    const medPrior = buildHtml(null, "input", medPriorDiv);
    medPrior.type = "checkbox";
    medPrior.id = "medium";
    medPrior.name = "priority";
    medPrior.value = "medium";

    // create a label element for the "Medium" priority level radio button
    const medPriorLabel = buildHtml(null, "label", medPriorDiv);
    medPriorLabel.textContent = "Medium";
    medPriorLabel.setAttribute("for", "medium");

    // build div for low label and input
    const lowPriorDiv = buildHtml("priorFlex", "div", priorSet);

    // create a radio button element for the "Low" priority level
    const lowPrior = buildHtml(null, "input", lowPriorDiv);
    lowPrior.type = "checkbox";
    lowPrior.id = "low";
    lowPrior.name = "priority";
    lowPrior.value = "low";

    // create a label element for the "Low" priority level radio button
    const lowPriorLabel = buildHtml(null, "label", lowPriorDiv);
    lowPriorLabel.textContent = "Low";
    lowPriorLabel.setAttribute("for", "low");

    // create submit button
    // eslint-disable-next-line no-unused-vars
    const submitForm = buildHtml("submitForm", "button", todoForm, "Submit");
    submitForm.setAttribute("form", "todoForm");
    submitForm.setAttribute("type", "submit");

    // **** Event Listeners **** //

    // toggle modal on overlay
    modalOverlay.addEventListener("click", (e) => {
      // cancel background touch
      e.stopPropagation();
      modalSection.classList.add("hidden");
      modalOverlay.classList.add("hidden");
      todoForm.reset();
    });

    // toggle modal on close button
    closeDiv.addEventListener("click", (e) => {
      // cancel background touch
      e.stopPropagation();
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      todoForm.reset();
    });

    // submit form
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      // cancel background touch
      event.stopPropagation();
      // eslint-disable-next-line no-console
      console.log("sending to logic...");
      const title = titleInput.value;
      const date = dateInput.value;
      const priority = {
        high: highPrior.checked,
        med: medPrior.checked,
        low: lowPrior.checked,
      };

      // actions after submiting
      _appLogic_todoLogic__WEBPACK_IMPORTED_MODULE_1__["default"].createTodo({ title, date, priority });
      // eslint-disable-next-line no-use-before-define
      updateUi();
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
      todoForm.reset();
    });
  };

  // func to build the delete modal
  const deleteModal = () => {
    const container = document.getElementById("mainContainer");

    // build section for modal
    const modalSection = buildHtml("modalSection", "section", container);
    modalSection.classList.add("hidden");
    modalSection.setAttribute("id", "deleteSection");

    // build div(overlay) for modal
    const modalOverlay = buildHtml("modalOverlay", "div", container);
    modalOverlay.classList.add("hidden");
    modalOverlay.setAttribute("id", "deleteOverlay");

    // build div/flex for modal
    const modalDiv = buildHtml("modalDiv", "div", modalSection);

    // build h3
    const modalH3 = buildHtml("todoH4", "h4", modalDiv);
    modalH3.textContent = "Delete The Task?";

    // build close button
    const closeDiv = buildHtml("closeDiv", "button", modalDiv);

    // build svg for close button
    const svgClose = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgClose.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgClose.setAttribute("fill", "none");
    svgClose.setAttribute("viewBox", "0 0 24 24");
    svgClose.setAttribute("stroke-width", "1.5");
    svgClose.setAttribute("stroke", "currentColor");
    svgClose.setAttribute("class", "svgClose");
    svgClose.setAttribute("width", "20"); // set width to 20px
    svgClose.setAttribute("height", "20"); // set height to 20px

    const closePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    closePath.setAttribute("stroke-linecap", "round");
    closePath.setAttribute("stroke-linejoin", "round");
    closePath.setAttribute("d", "M6 18L18 6M6 6l12 12");

    svgClose.appendChild(closePath);
    closeDiv.append(svgClose);

    // Create text from task
    const todoText = buildHtml("deleteText", "div", modalSection);
    todoText.textContent = "text here";
    todoText.setAttribute("id", "deleteText");

    // create submit button
    const confirmDelete = buildHtml(
      "submitForm",
      "button",
      modalSection,
      "Confirm"
    );

    // *** event listeners ***

    // toggle modal on overlay
    modalOverlay.addEventListener("click", () => {
      modalSection.classList.add("hidden");
      modalOverlay.classList.add("hidden");
    });

    // toggle modal on close button
    closeDiv.addEventListener("click", () => {
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
    });

    // delete method
    confirmDelete.addEventListener("click", () => {
      // eslint-disable-next-line no-console
      console.log("sending delete index to db...");
      const taskToDelete = document.getElementById("deleteText");
      const index = taskToDelete.getAttribute("data-index");
      const section = taskToDelete.getAttribute("section");
      // eslint-disable-next-line no-console
      console.log(section);
      _appLogic_todoLogic__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(section, index);
      // eslint-disable-next-line no-use-before-define
      updateUi();
      modalSection.classList.toggle("hidden");
      modalOverlay.classList.toggle("hidden");
    });
  };

  // func to build sections (name of the category: todo, done, etc..)
  const buildSection = (h4) => {
    const todoGrid = document.getElementById("todoGrid");

    // build todo tab
    const todoTab = buildHtml("todoTab", "div", todoGrid);

    // build h3 for todo tab
    const todoH4 = buildHtml("todoH4", "h4", todoTab);
    todoH4.textContent = h4;

    // build flex for todo cards
    const todoFlex = buildHtml("todoFlex", "div", todoTab);
    todoFlex.setAttribute("id", `${h4}Parent`);

    if (h4 !== "done") {
      // build newTodo button
      const newTodo = buildHtml("newTodo", "button", todoTab);

      // build svg icon on the button
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svg.setAttribute("fill", "none");
      svg.setAttribute("viewBox", "0 0 24 24");
      svg.setAttribute("stroke-width", "1.5");
      svg.setAttribute("stroke", "currentColor");
      svg.setAttribute("class", "svgNewTodo");
      svg.setAttribute("width", "20"); // set width to 20px
      svg.setAttribute("height", "20"); // set height to 20px

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute("stroke-linecap", "round");
      path.setAttribute("stroke-linejoin", "round");
      path.setAttribute("d", "M12 4.5v15m7.5-7.5h-15");

      svg.appendChild(path);
      newTodo.prepend(svg);

      // build text for button
      const textNewTodo = buildHtml("textNewTodo", "p", newTodo);
      textNewTodo.textContent = "Add Task";

      // select dom nodes
      const modalSection = document.getElementById("modalSection");
      const modalOverlay = document.getElementById("modalOverlay");
      const titleInput = document.getElementById("title");
      // New code here
      newTodo.addEventListener("click", (e) => {
        e.stopPropagation();
        modalSection.classList.toggle("hidden");
        modalOverlay.classList.toggle("hidden");
        titleInput.focus();
      });
    }
  };

  // func to build box (text + buttons)
  const todoComplete = (flexSection, text, date, priority, index, section) => {
    //
    // build div for task + buttons
    const newBox = buildHtml("todoBox", "div", flexSection);

    // build div for text and date
    const newEl = buildHtml("todoEl", "div", newBox);
    newEl.setAttribute("data-index", index);
    newEl.setAttribute("section", section);

    // build p for task
    const newTask = buildHtml("newTask", "p", newEl);
    newTask.innerText = text;

    // if there's date or prior build the nodes

    if (section !== "done") {
      if (date || priority) {
        //
        // build div for date || prior
        const divDatePrior = buildHtml("divDatePrior", "div", newEl);

        if (priority) {
          //
          // build icons for priority
          const newPrior = (color) => {
            const priorSvg = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg"
            );
            priorSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
            priorSvg.setAttribute("viewBox", "0 0 24 24");
            priorSvg.setAttribute("fill", color);
            priorSvg.setAttribute("width", "20");
            priorSvg.setAttribute("height", "20");

            const priorPath = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "path"
            );
            priorPath.setAttribute("fill-rule", "evenodd");
            priorPath.setAttribute(
              "d",
              "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            );
            priorPath.setAttribute("clip-rule", "evenodd");

            priorSvg.appendChild(priorPath);
            divDatePrior.appendChild(priorSvg);
          };

          // loop through the 3 priority options and render the svg
          Object.keys(priority).forEach((e) => {
            if (priority[e]) {
              switch (e) {
                case "high":
                  newPrior("#ef4444");
                  break;
                case "med":
                  newPrior("#eab308");
                  break;
                case "low":
                  newPrior("#22c55e");
                  break;
                default:
                  // eslint-disable-next-line no-console
                  console.log(`Unexpected error on svg render`);
              }
            }
          });
        }

        if (date) {
          // build p for date
          const newDate = buildHtml("newDate", "p", divDatePrior);
          newDate.innerText = date;
        }
      }
    }

    // build div for buttons
    const newOption = buildHtml("todoOption", "div", newBox);

    // Svg size
    const svgSize = "20";

    // svg complete
    const svgComplete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgComplete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgComplete.setAttribute("fill", "none");
    svgComplete.setAttribute("viewBox", "0 0 24 24");
    svgComplete.setAttribute("stroke-width", "1.5");
    svgComplete.setAttribute("stroke", "currentColor");
    svgComplete.setAttribute("width", svgSize);
    svgComplete.setAttribute("height", svgSize);

    const completePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    completePath.setAttribute("stroke-linecap", "round");
    completePath.setAttribute("stroke-linejoin", "round");
    completePath.setAttribute("d", "M4.5 12.75l6 6 9-13.5");

    svgComplete.appendChild(completePath);

    // ** Do not render on the done section **
    if (section !== "done") {
      newOption.appendChild(svgComplete);
    }

    // svg undo
    const undoSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    undoSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    undoSvg.setAttribute("fill", "none");
    undoSvg.setAttribute("viewBox", "0 0 24 24");
    undoSvg.setAttribute("stroke-width", "1.5");
    undoSvg.setAttribute("stroke", "currentColor");
    undoSvg.setAttribute("width", svgSize);
    undoSvg.setAttribute("height", svgSize);

    const undoPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    undoPath.setAttribute("stroke-linecap", "round");
    undoPath.setAttribute("stroke-linejoin", "round");
    undoPath.setAttribute("d", "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3");

    undoSvg.appendChild(undoPath);

    // ** render only on the done section
    if (section === "done") {
      newOption.appendChild(undoSvg);
    }

    // svg edit
    const svgEdit = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgEdit.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgEdit.setAttribute("fill", "none");
    svgEdit.setAttribute("viewBox", "0 0 24 24");
    svgEdit.setAttribute("stroke-width", "1.5");
    svgEdit.setAttribute("stroke", "currentColor");
    svgEdit.setAttribute("width", svgSize);
    svgEdit.setAttribute("height", svgSize);

    const editPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    editPath.setAttribute("stroke-linecap", "round");
    editPath.setAttribute("stroke-linejoin", "round");
    editPath.setAttribute(
      "d",
      "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
    );

    svgEdit.appendChild(editPath);
    newOption.appendChild(svgEdit);

    // svg delete
    const svgDelete = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgDelete.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgDelete.setAttribute("fill", "none");
    svgDelete.setAttribute("viewBox", "0 0 24 24");
    svgDelete.setAttribute("stroke-width", "1.5");
    svgDelete.setAttribute("stroke", "currentColor");
    svgDelete.setAttribute("width", svgSize);
    svgDelete.setAttribute("height", svgSize);
    svgDelete.setAttribute("id", "svgDelete");

    const deletePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    deletePath.setAttribute("stroke-linecap", "round");
    deletePath.setAttribute("stroke-linejoin", "round");
    deletePath.setAttribute(
      "d",
      "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    );

    svgDelete.appendChild(deletePath);
    newOption.append(svgDelete);

    // *** event listeners ***

    // task done icon
    svgComplete.addEventListener("click", (e) => {
      // eslint-disable-next-line no-console
      console.log("task done... sending to db");
      const project = document
        .getElementById("projectTitle")
        .textContent.toLowerCase();
      const from = "todo";
      const moveIndex =
        e.target.parentNode.parentNode.firstChild.getAttribute("data-index");
      const to = "done";
      _appLogic_todoLogic__WEBPACK_IMPORTED_MODULE_1__["default"].moveTodo(project, from, moveIndex, to);
      // update the whole ui
      // eslint-disable-next-line no-use-before-define
      updateUi();
    });

    // undo task icon
    undoSvg.addEventListener("click", (e) => {
      // eslint-disable-next-line no-console
      console.log("reverting task to todo...");
      const project = document
        .getElementById("projectTitle")
        .textContent.toLowerCase();
      const from = "done";
      const moveIndex =
        e.target.parentNode.parentNode.firstChild.getAttribute("data-index");
      const to = "todo";
      _appLogic_todoLogic__WEBPACK_IMPORTED_MODULE_1__["default"].moveTodo(project, from, moveIndex, to);
      // update the whole ui
      // eslint-disable-next-line no-use-before-define
      updateUi();
    });

    // modify todo icon
    svgEdit.addEventListener("click", () => {
      // eslint-disable-next-line no-alert
      alert("Under maintenance. Sorry for the inconvenience.");
    });

    // delete/thrash icon
    svgDelete.addEventListener("click", (e) => {
      //
      // eslint-disable-next-line no-console
      console.log("Delete element clicked!");

      // cancel background touch
      e.stopPropagation();

      // overlay
      const modalOverlay = document.getElementById("deleteOverlay");
      modalOverlay.classList.toggle("hidden");

      // modal
      const deleteSection = document.getElementById("deleteSection");
      deleteSection.classList.toggle("hidden");

      // Delete text
      const textDisplay = document.getElementById("deleteText");
      const deleteText =
        e.target.parentNode.previousElementSibling.firstChild.innerText;
      textDisplay.innerText = deleteText;
      const indexDisplay =
        e.target.parentNode.previousElementSibling.getAttribute("data-index");
      textDisplay.setAttribute("data-index", indexDisplay);
      const sectionDisplay =
        e.target.parentNode.previousElementSibling.getAttribute("section");
      textDisplay.setAttribute("section", sectionDisplay);
    });
  };

  // func to update ui
  const updateUi = (data = _appLogic_todoLogic__WEBPACK_IMPORTED_MODULE_1__["default"].getData()) => {
    //
    const parent = document.getElementById("todoGrid");

    // remove every todo
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    // build all from DB
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in data) {
      const project = data[key];
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const section in project) {
        buildSection(section);
        const array = project[section];
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (const task in array) {
          const flexSection = document.getElementById(`${section}Parent`);
          const { title } = array[task];
          let { date } = array[task];
          if (date) {
            // format date
            const inputDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date);
            date = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(inputDate, "MMMM do");
          }
          let { priority } = array[task];
          // check if it's all false
          const onlyFalsePrior = Object.values(priority).every(
            (value) => value === false
          );
          if (onlyFalsePrior) {
            priority = null;
          }
          // index
          const index = task;
          const Attsection = `${section}`;
          todoComplete(flexSection, title, date, priority, index, Attsection);
        }
      }
    }
  };

  return { build };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_container_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/container/container */ "./src/components/container/container.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _components_todo_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todo/todo */ "./src/components/todo/todo.js");




(0,_components_container_container__WEBPACK_IMPORTED_MODULE_0__["default"])();
_components_header_header__WEBPACK_IMPORTED_MODULE_1__["default"].build();
_components_todo_todo__WEBPACK_IMPORTED_MODULE_2__["default"].build();


/***/ }),

/***/ "./src/components/container/assets/svg/background.svg":
/*!************************************************************!*\
  !*** ./src/components/container/assets/svg/background.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a51966c432de3157b699.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHFFQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFFQUFlO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxRUFBZTtBQUM3QixnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ253Qm9DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQjtBQUNBO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMvRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sMERBQTBELE1BQU07QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDL0U3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjJDO0FBQ21CO0FBQ1E7QUFDbEI7QUFDcEQ7QUFDZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUI7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDJDO0FBQ1M7QUFDVTtBQUMvQztBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVFQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjJDO0FBQ2E7QUFDUTtBQUNaO0FBQ3BEO0FBQ2U7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQixhQUFhLG9FQUFjLDRCQUE0Qix3RUFBa0I7O0FBRXpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkMkM7QUFDUztBQUNJO0FBQ1Y7QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0EsdUJBQXVCLDJFQUFpQjtBQUN4Qyw4QkFBOEIsK0RBQVM7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9FQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYztBQUN0QztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBLHlJQUF5STtBQUN6SSxJQUFJO0FBQ0oscUlBQXFJO0FBQ3JJLElBQUk7QUFDSiwrSUFBK0k7QUFDL0ksSUFBSTtBQUNKLGlKQUFpSjtBQUNqSjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSjJDO0FBQ1M7QUFDckM7QUFDZixFQUFFLGtFQUFZO0FBQ2Q7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOEQ7QUFDQTtBQUNWO0FBQ3JDO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1gyQztBQUNTO0FBQ047QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLHFCQUFxQiwrREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCd0Q7QUFDSjtBQUNJO0FBQ1Y7QUFDaUI7QUFDaEQ7QUFDZjtBQUNBLEVBQUUsa0VBQVk7QUFDZCx1QkFBdUIsMkVBQWlCO0FBQ3hDLDhCQUE4QiwrREFBUztBQUN2QyxhQUFhLG9FQUFjO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1EO0FBQ1g7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFFBQVE7QUFDbkIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxrQkFBa0IsNERBQU07QUFDeEIsZUFBZSxtRUFBUztBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0TG1DO0FBQ2dCO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUNXO0FBQ1QsQ0FBQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSx3QkFBd0IsNENBQTRDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsV0FBVztBQUNYLENBQUM7O0FBRUQsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMURBOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZIOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0Y7QUFDd0I7QUFDSzs7QUFFakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHNFQUFvQixHQUFHLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzRUFBb0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9FQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9FQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsMkJBQTJCLG1FQUFpQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVE7QUFDakUsa0JBQWtCLFFBQVE7QUFDMUIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLDhCQUE4QixvREFBUTtBQUN0QyxtQkFBbUIsb0RBQU07QUFDekI7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsUUFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM3NCcUM7QUFDVDtBQUNOOztBQUUxQywyRUFBUztBQUNULHVFQUFZO0FBQ1osbUVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOSztBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ0o7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3RvZG8vdG9kby5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuY3NzPzZlNzQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3M/ZjdmYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90b2RvL3RvZG8uY3NzPzhmOGIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ub3JtYWxpemUuY3NzPzY4NTYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwTG9naWMvdG9kb0xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BhZ2VMb2FkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2Y5O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC8qIENTUyBydWxlcyBmb3IgbW9iaWxlIGRldmljZXMgKi9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY29udGFpbmVyL2NvbnRhaW5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlEQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qix5QkFBeUI7O0VBRXpCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluQ29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL3N2Zy9iYWNrZ3JvdW5kLnN2Z1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmN2Y5O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC8qIENTUyBydWxlcyBmb3IgbW9iaWxlIGRldmljZXMgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ29EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcbiAgICAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNThmZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlNDBhZjtcXG59XFxuXFxuLnN2Z0hlYWRlciB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkI7c0NBQ29DO0FBQ3RDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsa0JBQWtCOztFQUVsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmxvZ29EaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG5cXG4ucHJvamVjdERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTJweDtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLFxcbiAgICAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnByb2plY3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNThmZjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlNDBhZjtcXG59XFxuXFxuLnN2Z0hlYWRlciB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZG9HcmlkIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzUwcHggMzUwcHg7XFxuICBnYXA6IDJyZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRvZG9UYWIsXFxuLm1vZGFsU2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksXFxuICAgIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RvSDQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbi50b2RvRmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43NXJlbTtcXG59XFxuXFxuLnRvZG9Cb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4udG9kb0VsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4udG9kb0VsIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uZGl2RGF0ZVByaW9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ubmV3RGF0ZSB7XFxuICBjb2xvcjogIzhhOGE4YTtcXG59XFxuXFxuLnRvZG9PcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG9PcHRpb24gc3ZnIHtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb09wdGlvbiBzdmc6aG92ZXIge1xcbiAgY29sb3I6ICMwMjU4ZmY7XFxufVxcblxcbi50b2RvT3B0aW9uIHN2ZyBwYXRoIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubmV3VG9kbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICNiMWIxYjE7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC41cmVtO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGV4dE5ld1RvZG8ge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBNb2RhbCAqL1xcblxcbi5tb2RhbFNlY3Rpb24ge1xcbiAgd2lkdGg6IDQ1MHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5tb2RhbERpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogI2IxYjFiMTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2RiZGJkYjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsT3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybURpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kb0Zvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcmlvclNldCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJpb3JGbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMjVyZW07XFxufVxcblxcbi5zdWJtaXRGb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjU4ZmY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWJtaXRGb3JtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjRmZTk7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC8qIENTUyBydWxlcyBmb3IgbW9iaWxlIGRldmljZXMgKi9cXG4gIC50b2RvR3JpZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJSAxMDAlO1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgfVxcblxcbiAgLm1vZGFsU2VjdGlvbiB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy90b2RvL3RvZG8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsY0FBYzs7RUFFZCxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCO3NDQUNvQztFQUNwQyxtQkFBbUI7O0VBRW5CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTs7RUFFZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBLFVBQVU7O0FBRVY7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakM7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IsU0FBUztJQUNULGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9kb0dyaWQge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNTBweCAzNTBweDtcXG4gIGdhcDogMnJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kb1RhYixcXG4ubW9kYWxTZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMS41cmVtIDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcXG4gICAgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZG9INCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxuLnRvZG9GbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG4udG9kb0JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYmRiZGI7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi50b2RvRWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbi50b2RvRWwgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5kaXZEYXRlUHJpb3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5uZXdEYXRlIHtcXG4gIGNvbG9yOiAjOGE4YThhO1xcbn1cXG5cXG4udG9kb09wdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kb09wdGlvbiBzdmcge1xcbiAgY29sb3I6ICM4YThhOGE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvT3B0aW9uIHN2Zzpob3ZlciB7XFxuICBjb2xvcjogIzAyNThmZjtcXG59XFxuXFxuLnRvZG9PcHRpb24gc3ZnIHBhdGgge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5uZXdUb2RvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogI2IxYjFiMTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkYmRiZGI7XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50ZXh0TmV3VG9kbyB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qIE1vZGFsICovXFxuXFxuLm1vZGFsU2VjdGlvbiB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLm1vZGFsRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2VEaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjYjFiMWIxO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZGJkYmRiO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgcGFkZGluZzogMC4xcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWxPdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtRGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLnByaW9yU2V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5wcmlvckZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLnN1Ym1pdEZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNThmZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdEZvcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNGZlOTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLyogQ1NTIHJ1bGVzIGZvciBtb2JpbGUgZGV2aWNlcyAqL1xcbiAgLnRvZG9HcmlkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDEwMCU7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICB9XFxuXFxuICAubW9kYWxTZWN0aW9uIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtDQUFrQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAgICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gICAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAgICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICAgKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gICAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAgICogYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAgICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gICAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gICAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gICAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gICAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gICAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gICAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gICAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTtpRkFDaUY7O0FBRWpGOztJQUVJOztBQUVKO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztJQUVJOztBQUVKOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0lBR0k7O0FBRUo7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7O0lBR0k7O0FBRUo7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBOzs7SUFHSTs7QUFFSjs7RUFFRSxNQUFNO0VBQ04sb0JBQW9CO0FBQ3RCOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7SUFFSTs7QUFFSjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7SUFLSTs7QUFFSjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0lBRUk7O0FBRUo7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICAgKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gICAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICAgKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gICAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICAgKiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICAgKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAgICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAgICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gICAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAgICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICAgKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAgICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAgICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gICAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkhvdXIsIG1pbGxpc2Vjb25kc0luTWludXRlIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHBhcnNlSVNPXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFBhcnNlIElTTyBzdHJpbmdcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFBhcnNlIHRoZSBnaXZlbiBzdHJpbmcgaW4gSVNPIDg2MDEgZm9ybWF0IGFuZCByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBGdW5jdGlvbiBhY2NlcHRzIGNvbXBsZXRlIElTTyA4NjAxIGZvcm1hdHMgYXMgd2VsbCBhcyBwYXJ0aWFsIGltcGxlbWVudGF0aW9ucy5cbiAqIElTTyA4NjAxOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzbid0IGEgc3RyaW5nLCB0aGUgZnVuY3Rpb24gY2Fubm90IHBhcnNlIHRoZSBzdHJpbmcgb3JcbiAqIHRoZSB2YWx1ZXMgYXJlIGludmFsaWQsIGl0IHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7MHwxfDJ9IFtvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHM9Ml0gLSB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHNgIG11c3QgYmUgMCwgMSBvciAyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcyMDE0LTAyLTExVDExOjMwOjMwJyB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJyswMjAxNDEwMScgdG8gZGF0ZSxcbiAqIC8vIGlmIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0IGlzIDE6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnKzAyMDE0MTAxJywgeyBhZGRpdGlvbmFsRGlnaXRzOiAxIH0pXG4gKiAvLz0+IEZyaSBBcHIgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgb3B0aW9ucykge1xuICB2YXIgX29wdGlvbnMkYWRkaXRpb25hbERpO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpO1xuICAgIC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZztcblxuICAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsO1xuXG4gIC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufVxuXG4vLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhaW5lci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhaW5lci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gdG9kbyBvYmplY3QgdG8gY3JlYXRlIC8gdXBkYXRlIHRvZG8gbGlzdFxuY29uc3QgdG9kb0xvZ2ljID0gKCgpID0+IHtcbiAgLy9cbiAgY29uc3Qgc2F2ZVRvZG8gPSB7XG4gICAgcHJvamVjdHM6IHtcbiAgICAgIHRvZG86IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIllvdXIgZmlyc3QgdGFzayFcIixcbiAgICAgICAgICBkYXRlOiBcIjIwMjMtMDUtMjBcIixcbiAgICAgICAgICBwcmlvcml0eToge1xuICAgICAgICAgICAgaGlnaDogZmFsc2UsXG4gICAgICAgICAgICBtZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbG93OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZG9uZTogW10sXG4gICAgfSxcbiAgfTtcblxuICAvLyBjcmVhdGUgYW5kIGFkZCB0b2RvIHRvIERCXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoZGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyBMb2dpYy4uLlwiKTtcbiAgICAgIHNhdmVUb2RvLnByb2plY3RzLnRvZG8ucHVzaChkYXRhKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhzYXZlVG9kby5wcm9qZWN0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgYXJndW1lbnQuIFBsZWFzZSBwcm92aWRlIGFuIG9iamVjdC5cIik7XG4gICAgfVxuICB9O1xuXG4gIC8vIG1vdmUgVG9kb1xuICBjb25zdCBtb3ZlVG9kbyA9IChwcm9qZWN0LCBmcm9tLCBpbmRleCwgdG8pID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKFwibW92aW5nIHRvZG8gdG8gYSBkaWZmZXJlbnRlIGNhdGVnb3J5XCIpO1xuICAgIGNvbnN0IHRvZG9Nb3ZpbmcgPSBzYXZlVG9kb1twcm9qZWN0XVtmcm9tXS5zcGxpY2UoaW5kZXgsIDEpWzBdO1xuICAgIHNhdmVUb2RvW3Byb2plY3RdW3RvXS5wdXNoKHRvZG9Nb3ZpbmcpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2coc2F2ZVRvZG8pO1xuICB9O1xuXG4gIC8vIGRlbGV0ZSB0YXNrIGZyb20gREJcbiAgY29uc3QgZGVsZXRlVG9kbyA9IChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKFwiZGVsZXRpbmcgZW50cnkgZnJvbSBEQi4uLlwiKTtcbiAgICBzYXZlVG9kby5wcm9qZWN0c1tjYXRlZ29yeV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHNhdmVUb2RvLnByb2plY3RzKTtcbiAgfTtcblxuICBjb25zdCBnZXREYXRhID0gKCkgPT4gc2F2ZVRvZG87XG5cbiAgcmV0dXJuIHsgY3JlYXRlVG9kbywgbW92ZVRvZG8sIGRlbGV0ZVRvZG8sIGdldERhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9Mb2dpYztcbiIsImltcG9ydCBcIi4vY29udGFpbmVyLmNzc1wiO1xuXG4vLyBhcHBlbmQgbWFpbiBjb250YWluZXIgd2l0aCBjc3MgZ3JpZCBmb3IgbGF5b3V0XG5jb25zdCBjb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiY29udGFpbmVyIE9OTElORVwiKTtcblxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xuXG4gIC8vIG1haW4gY29udGFpbmVyXG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGFpbmVyXCIpO1xuICBtYWluQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkNvbnRhaW5lclwiKTtcbiAgcm9vdC5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWluZXI7XG4iLCJpbXBvcnQgXCIuL2hlYWRlci5jc3NcIjtcblxuLy8gYnVpbGQgaGVhZGVyXG5cbmNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyIE9OTElORVwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcblxuICAgIC8vIC0gRklSU1QgSEFMRiAtXG4gICAgLy8gbG9nbyBzZWN0aW9uXG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKFwibG9nb0RpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGxvZ29EaXYpO1xuXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGxvZ28gZWxlbWVudFxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjBcIik7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI1MFwiKTtcbiAgICBsb2dvLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjUwXCIpO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKFwieG1sOnNwYWNlXCIsIFwicHJlc2VydmVcIik7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCAxMDBcIik7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgcGF0aCBlbGVtZW50IGFuZCBzZXQgaXRzIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBsb2dvUGF0aDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgbG9nb1BhdGgxLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjMDI1OEZGXCIpO1xuICAgIGxvZ29QYXRoMS5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTMwIDU4Ljg0MWgzMi4yNDZjMTEuNjQ4IDAgMjEuMDg3LTkuNDM4IDIxLjA4Ny0yMS4wODQgMC0xMS42NDUtOS40NC0yMS4wOS0yMS4wODctMjEuMDlIMzBWMTBoMzIuMjQ2Qzc3LjU3NSAxMCA5MCAyMi40MyA5MCAzNy43NTdjMCAxNS4zMjYtMTIuNDI1IDI3Ljc1MS0yNy43NTQgMjcuNzUxSDMwdi02LjY2N3pcIlxuICAgICk7XG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgcGF0aCBlbGVtZW50IGFuZCBzZXQgaXRzIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBsb2dvUGF0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgbG9nb1BhdGgyLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjMjYzMjM4XCIpO1xuICAgIGxvZ29QYXRoMi5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTcwIDgzLjMzM1Y5MEgzNy43NTRDMjIuNDI1IDkwIDEwIDc3LjU3IDEwIDYyLjI0M2MwLTE1LjMyNiAxMi40MjUtMjcuNzUxIDI3Ljc1NC0yNy43NTFINzB2Ni42NjdIMzcuNzU0Yy0xMS42NDggMC0yMS4wODcgOS40MzgtMjEuMDg3IDIxLjA4NCAwIDExLjY0NCA5LjQ0IDIxLjA5IDIxLjA4NyAyMS4wOUg3MHpcIlxuICAgICk7XG5cbiAgICAvLyBBcHBlbmQgdGhlIHBhdGggZWxlbWVudHMgdG8gdGhlIGxvZ28gZWxlbWVudFxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1BhdGgxKTtcbiAgICBsb2dvLmFwcGVuZENoaWxkKGxvZ29QYXRoMik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGxvZ28gZWxlbWVudCB0byB0aGUgZGl2IGVsZW1lbnRcbiAgICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gICAgLy8gLSBTRUNPTkQgSEFMRiAtXG4gICAgLy8gaGVhZGVyIGh0bWxcbiAgICBjb25zdCBodG1sSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBodG1sSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZChodG1sSGVhZGVyKTtcblxuICAgIC8vIGRpdiBmb3IgcHJvamVjdCBzZWxlY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGl2XCIpO1xuICAgIGh0bWxIZWFkZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG4gICAgLy8gcHJvamVjdFxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdCk7XG5cbiAgICAvLyBwcm9qZWN0IHRpdGxlXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFRpdGxlXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgcHJvamVjdC5hcHBlbmQocHJvamVjdFRpdGxlKTtcblxuICAgIC8vIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJ1dHRvblwiKTtcblxuICAgIHByb2plY3QuYXBwZW5kKHByb2plY3RCdXR0b24pO1xuXG4gICAgLy8gc3ZnIGZvciBidXR0b25cbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICBzdmcuY2xhc3NMaXN0LmFkZChcInN2Z0hlYWRlclwiKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjJcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTE5IDlsLTcgNy03LTdcIik7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgcHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChzdmcpO1xuICB9O1xuXG4gIHJldHVybiB7IGJ1aWxkIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXI7XG4iLCJpbXBvcnQgXCIuL3RvZG8uY3NzXCI7XG5pbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgdG9kb0xvZ2ljIGZyb20gXCIuLi8uLi9hcHBMb2dpYy90b2RvTG9naWNcIjtcblxuLy8gYnVpbGQgdGhlIHRvIGRvIHNlY3Rpb25cblxuY29uc3QgdG9kbyA9ICgoKSA9PiB7XG4gIC8vXG4gIC8vIGZ1bmMgdG8gYnVpbGQgaHRtbFxuICBjb25zdCBidWlsZEh0bWwgPSAoY2xhc3NOYW1lLCBlbGVtZW50LCBwYXJlbnQsIHRleHQpID0+IHtcbiAgICBjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgbmV3RWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICBuZXdFbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcGFyZW50LmFwcGVuZChuZXdFbCk7XG4gICAgcmV0dXJuIG5ld0VsO1xuICB9O1xuXG4gIC8vIG1haW4gYnVpbGQgZnVuY1xuICBjb25zdCBidWlsZCA9ICgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKFwidG9kbyBPTkxJTkVcIik7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuXG4gICAgLy8gYnVpbGQgZ3JpZCBmb3IgdG9kbyBiYXJzXG4gICAgY29uc3QgdG9kb0dyaWQgPSBidWlsZEh0bWwoXCJ0b2RvR3JpZFwiLCBcImRpdlwiLCBjb250YWluZXIpO1xuICAgIHRvZG9HcmlkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb0dyaWRcIik7XG5cbiAgICAvLyBidWlsZCBkb25lIHRhYlxuICAgIGNvbnN0IGRvbmVUYWIgPSBidWlsZEh0bWwoXCJ0b2RvVGFiXCIsIFwiZGl2XCIsIHRvZG9HcmlkKTtcblxuICAgIC8vIGJ1aWxkIGgzIGZvciBkb25lIHRhYlxuICAgIGNvbnN0IGRvbmVINCA9IGJ1aWxkSHRtbChcInRvZG9INFwiLCBcImg0XCIsIGRvbmVUYWIpO1xuICAgIGRvbmVINC50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuXG4gICAgLy8gYnVpbGQgZmxleCBmb3IgZG9uZSBjYXJkc1xuICAgIGNvbnN0IGRvbmVGbGV4ID0gYnVpbGRIdG1sKFwidG9kb0ZsZXhcIiwgXCJkaXZcIiwgZG9uZVRhYik7XG4gICAgZG9uZUZsZXguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkb25lUGFyZW50XCIpO1xuXG4gICAgLy8gYnVpbGQgZG9uZSBjb250YWluZXJcbiAgICBjb25zdCBkb25lQm94ID0gYnVpbGRIdG1sKFwidG9kb0JveFwiLCBcImRpdlwiLCBkb25lRmxleCk7XG5cbiAgICAvLyBidWlsZCBmaXJzdCBkb25lXG4gICAgY29uc3QgZG9uZUVsID0gYnVpbGRIdG1sKFwidG9kb0VsXCIsIFwiZGl2XCIsIGRvbmVCb3gpO1xuICAgIGRvbmVFbC50ZXh0Q29udGVudCA9IFwiVGhpcyB0YXNrIGlzIGRvbmUhXCI7XG5cbiAgICAvLyAqKiBFWFRSQSBCVUlMRCAqKiAvL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIGJ1aWxkTW9kYWwoKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBkZWxldGVNb2RhbCgpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgdXBkYXRlVWkoKTtcbiAgfTtcblxuICAvLyBmdW5jIHRvIGJ1aWxkIHRoZSBhZGQgbmV3IG1vZGFsXG4gIGNvbnN0IGJ1aWxkTW9kYWwgPSAoKSA9PiB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhcIm1vZGFsIE9OTElORVwiKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcblxuICAgIC8vIGJ1aWxkIHNlY3Rpb24gZm9yIG1vZGFsXG4gICAgY29uc3QgbW9kYWxTZWN0aW9uID0gYnVpbGRIdG1sKFwibW9kYWxTZWN0aW9uXCIsIFwic2VjdGlvblwiLCBjb250YWluZXIpO1xuICAgIG1vZGFsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1vZGFsU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsU2VjdGlvblwiKTtcblxuICAgIC8vIGJ1aWxkIGRpdihvdmVybGF5KSBmb3IgbW9kYWxcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBidWlsZEh0bWwoXCJtb2RhbE92ZXJsYXlcIiwgXCJkaXZcIiwgY29udGFpbmVyKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbE92ZXJsYXlcIik7XG5cbiAgICAvLyBidWlsZCBkaXYvZmxleCBmb3IgbW9kYWxcbiAgICBjb25zdCBtb2RhbERpdiA9IGJ1aWxkSHRtbChcIm1vZGFsRGl2XCIsIFwiZGl2XCIsIG1vZGFsU2VjdGlvbik7XG5cbiAgICAvLyBidWlsZCBoM1xuICAgIGNvbnN0IG1vZGFsSDMgPSBidWlsZEh0bWwoXCJ0b2RvSDRcIiwgXCJoNFwiLCBtb2RhbERpdik7XG4gICAgbW9kYWxIMy50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICAgIC8vIGJ1aWxkIGNsb3NlIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlRGl2ID0gYnVpbGRIdG1sKFwiY2xvc2VEaXZcIiwgXCJidXR0b25cIiwgbW9kYWxEaXYpO1xuXG4gICAgLy8gYnVpbGQgc3ZnIGZvciBjbG9zZSBidXR0b25cbiAgICBjb25zdCBzdmdDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwic3ZnXCJcbiAgICApO1xuICAgIHN2Z0Nsb3NlLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICBzdmdDbG9zZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgIHN2Z0Nsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnQ2xvc2VcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMFwiKTsgLy8gc2V0IHdpZHRoIHRvIDIwcHhcbiAgICBzdmdDbG9zZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMFwiKTsgLy8gc2V0IGhlaWdodCB0byAyMHB4XG5cbiAgICBjb25zdCBjbG9zZVBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgY2xvc2VQYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgY2xvc2VQYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xuICAgIGNsb3NlUGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTYgMThMMTggNk02IDZsMTIgMTJcIik7XG5cbiAgICBzdmdDbG9zZS5hcHBlbmRDaGlsZChjbG9zZVBhdGgpO1xuICAgIGNsb3NlRGl2LmFwcGVuZChzdmdDbG9zZSk7XG5cbiAgICAvLyBidWlsZCBmb3JtXG4gICAgY29uc3QgdG9kb0Zvcm0gPSBidWlsZEh0bWwoXCJ0b2RvRm9ybVwiLCBcImZvcm1cIiwgbW9kYWxTZWN0aW9uKTtcbiAgICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9Gb3JtXCIpO1xuXG4gICAgLy8gYnVpbGQgZGl2IGZvciB0aXRsZVxuICAgIGNvbnN0IHRpdGxlRGl2ID0gYnVpbGRIdG1sKFwiZm9ybURpdlwiLCBcImRpdlwiLCB0b2RvRm9ybSk7XG5cbiAgICAvLyBidWlsZCBsYWJlbCBhbmQgaW5wdXQgZm9yIHRpdGxlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGJ1aWxkSHRtbChcInRpdGxlTGFiZWxcIiwgXCJsYWJlbFwiLCB0aXRsZURpdiwgXCJUaXRsZVwiKTtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBidWlsZEh0bWwoXCJ0aXRsZUlucHV0XCIsIFwiaW5wdXRcIiwgdGl0bGVEaXYpO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRpdGxlSW5wdXQuaWQgPSBcInRpdGxlXCI7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgLy8gYnVpbGQgZGl2IGZvciBkdWVEYXRlXG4gICAgY29uc3QgZGF0ZURpdiA9IGJ1aWxkSHRtbChcImZvcm1EaXZcIiwgXCJkaXZcIiwgdG9kb0Zvcm0pO1xuXG4gICAgLy8gYnVpbGQgbGFiZWwgYW5kIGlucHV0IGZvciBkdWVEYXRlXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gYnVpbGRIdG1sKFwiZGF0ZUxhYmVsXCIsIFwibGFiZWxcIiwgZGF0ZURpdiwgXCJEdWUgRGF0ZVwiKTtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZVwiKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBidWlsZEh0bWwoXCJkYXRlSW5wdXRcIiwgXCJpbnB1dFwiLCBkYXRlRGl2KTtcbiAgICBkYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICAgIGRhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG5cbiAgICAvLyBidWlsZCBkaXYgZm9yIHByaW9yaXR5XG4gICAgY29uc3QgcHJpb3JEaXYgPSBidWlsZEh0bWwoXCJmb3JtRGl2XCIsIFwiZGl2XCIsIHRvZG9Gb3JtKTtcblxuICAgIC8vIGJ1aWxkIGxhYmVsIGFuZCBpbnB1dCBmb3IgcHJpb3JpdHlcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBwcmlvckxhYmVsID0gYnVpbGRIdG1sKFwicHJpb3JMYWJlbFwiLCBcImxhYmVsXCIsIHByaW9yRGl2LCBcIlByaW9yaXR5XCIpO1xuICAgIGNvbnN0IHByaW9yU2V0ID0gYnVpbGRIdG1sKFwicHJpb3JTZXRcIiwgXCJkaXZcIiwgcHJpb3JEaXYpO1xuXG4gICAgLy8gYnVpbGQgZGl2IGZvciBoaWdoIGxhYmVsIGFuZCBpbnB1dFxuICAgIGNvbnN0IGhpZ2hQcmlvckRpdiA9IGJ1aWxkSHRtbChcInByaW9yRmxleFwiLCBcImRpdlwiLCBwcmlvclNldCk7XG5cbiAgICAvLyBjcmVhdGUgYSByYWRpbyBidXR0b24gZWxlbWVudCBmb3IgdGhlIFwiSGlnaFwiIHByaW9yaXR5IGxldmVsXG4gICAgY29uc3QgaGlnaFByaW9yID0gYnVpbGRIdG1sKG51bGwsIFwiaW5wdXRcIiwgaGlnaFByaW9yRGl2KTtcbiAgICBoaWdoUHJpb3IudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBoaWdoUHJpb3IuaWQgPSBcImhpZ2hcIjtcbiAgICBoaWdoUHJpb3IubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBoaWdoUHJpb3IudmFsdWUgPSBcImhpZ2hcIjtcblxuICAgIC8vIGNyZWF0ZSBhIGxhYmVsIGVsZW1lbnQgZm9yIHRoZSBcIkhpZ2hcIiBwcmlvcml0eSBsZXZlbCByYWRpbyBidXR0b25cbiAgICBjb25zdCBoaWdoUHJpb3JMYWJlbCA9IGJ1aWxkSHRtbChudWxsLCBcImxhYmVsXCIsIGhpZ2hQcmlvckRpdik7XG4gICAgaGlnaFByaW9yTGFiZWwudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICBoaWdoUHJpb3JMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJoaWdoXCIpO1xuXG4gICAgLy8gYnVpbGQgZGl2IGZvciBtZWRpdW0gbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbWVkUHJpb3JEaXYgPSBidWlsZEh0bWwoXCJwcmlvckZsZXhcIiwgXCJkaXZcIiwgcHJpb3JTZXQpO1xuXG4gICAgLy8gY3JlYXRlIGEgcmFkaW8gYnV0dG9uIGVsZW1lbnQgZm9yIHRoZSBcIk1lZGl1bVwiIHByaW9yaXR5IGxldmVsXG4gICAgY29uc3QgbWVkUHJpb3IgPSBidWlsZEh0bWwobnVsbCwgXCJpbnB1dFwiLCBtZWRQcmlvckRpdik7XG4gICAgbWVkUHJpb3IudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBtZWRQcmlvci5pZCA9IFwibWVkaXVtXCI7XG4gICAgbWVkUHJpb3IubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBtZWRQcmlvci52YWx1ZSA9IFwibWVkaXVtXCI7XG5cbiAgICAvLyBjcmVhdGUgYSBsYWJlbCBlbGVtZW50IGZvciB0aGUgXCJNZWRpdW1cIiBwcmlvcml0eSBsZXZlbCByYWRpbyBidXR0b25cbiAgICBjb25zdCBtZWRQcmlvckxhYmVsID0gYnVpbGRIdG1sKG51bGwsIFwibGFiZWxcIiwgbWVkUHJpb3JEaXYpO1xuICAgIG1lZFByaW9yTGFiZWwudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIG1lZFByaW9yTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibWVkaXVtXCIpO1xuXG4gICAgLy8gYnVpbGQgZGl2IGZvciBsb3cgbGFiZWwgYW5kIGlucHV0XG4gICAgY29uc3QgbG93UHJpb3JEaXYgPSBidWlsZEh0bWwoXCJwcmlvckZsZXhcIiwgXCJkaXZcIiwgcHJpb3JTZXQpO1xuXG4gICAgLy8gY3JlYXRlIGEgcmFkaW8gYnV0dG9uIGVsZW1lbnQgZm9yIHRoZSBcIkxvd1wiIHByaW9yaXR5IGxldmVsXG4gICAgY29uc3QgbG93UHJpb3IgPSBidWlsZEh0bWwobnVsbCwgXCJpbnB1dFwiLCBsb3dQcmlvckRpdik7XG4gICAgbG93UHJpb3IudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBsb3dQcmlvci5pZCA9IFwibG93XCI7XG4gICAgbG93UHJpb3IubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgICBsb3dQcmlvci52YWx1ZSA9IFwibG93XCI7XG5cbiAgICAvLyBjcmVhdGUgYSBsYWJlbCBlbGVtZW50IGZvciB0aGUgXCJMb3dcIiBwcmlvcml0eSBsZXZlbCByYWRpbyBidXR0b25cbiAgICBjb25zdCBsb3dQcmlvckxhYmVsID0gYnVpbGRIdG1sKG51bGwsIFwibGFiZWxcIiwgbG93UHJpb3JEaXYpO1xuICAgIGxvd1ByaW9yTGFiZWwudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIGxvd1ByaW9yTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibG93XCIpO1xuXG4gICAgLy8gY3JlYXRlIHN1Ym1pdCBidXR0b25cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBjb25zdCBzdWJtaXRGb3JtID0gYnVpbGRIdG1sKFwic3VibWl0Rm9ybVwiLCBcImJ1dHRvblwiLCB0b2RvRm9ybSwgXCJTdWJtaXRcIik7XG4gICAgc3VibWl0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJmb3JtXCIsIFwidG9kb0Zvcm1cIik7XG4gICAgc3VibWl0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXG4gICAgLy8gKioqKiBFdmVudCBMaXN0ZW5lcnMgKioqKiAvL1xuXG4gICAgLy8gdG9nZ2xlIG1vZGFsIG9uIG92ZXJsYXlcbiAgICBtb2RhbE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvLyBjYW5jZWwgYmFja2dyb3VuZCB0b3VjaFxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG1vZGFsU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIH0pO1xuXG4gICAgLy8gdG9nZ2xlIG1vZGFsIG9uIGNsb3NlIGJ1dHRvblxuICAgIGNsb3NlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgLy8gY2FuY2VsIGJhY2tncm91bmQgdG91Y2hcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICB9KTtcblxuICAgIC8vIHN1Ym1pdCBmb3JtXG4gICAgdG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBjYW5jZWwgYmFja2dyb3VuZCB0b3VjaFxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXCJzZW5kaW5nIHRvIGxvZ2ljLi4uXCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0ge1xuICAgICAgICBoaWdoOiBoaWdoUHJpb3IuY2hlY2tlZCxcbiAgICAgICAgbWVkOiBtZWRQcmlvci5jaGVja2VkLFxuICAgICAgICBsb3c6IGxvd1ByaW9yLmNoZWNrZWQsXG4gICAgICB9O1xuXG4gICAgICAvLyBhY3Rpb25zIGFmdGVyIHN1Ym1pdGluZ1xuICAgICAgdG9kb0xvZ2ljLmNyZWF0ZVRvZG8oeyB0aXRsZSwgZGF0ZSwgcHJpb3JpdHkgfSk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgIHVwZGF0ZVVpKCk7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgdG9kb0Zvcm0ucmVzZXQoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBmdW5jIHRvIGJ1aWxkIHRoZSBkZWxldGUgbW9kYWxcbiAgY29uc3QgZGVsZXRlTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuXG4gICAgLy8gYnVpbGQgc2VjdGlvbiBmb3IgbW9kYWxcbiAgICBjb25zdCBtb2RhbFNlY3Rpb24gPSBidWlsZEh0bWwoXCJtb2RhbFNlY3Rpb25cIiwgXCJzZWN0aW9uXCIsIGNvbnRhaW5lcik7XG4gICAgbW9kYWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbW9kYWxTZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlU2VjdGlvblwiKTtcblxuICAgIC8vIGJ1aWxkIGRpdihvdmVybGF5KSBmb3IgbW9kYWxcbiAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBidWlsZEh0bWwoXCJtb2RhbE92ZXJsYXlcIiwgXCJkaXZcIiwgY29udGFpbmVyKTtcbiAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBtb2RhbE92ZXJsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVPdmVybGF5XCIpO1xuXG4gICAgLy8gYnVpbGQgZGl2L2ZsZXggZm9yIG1vZGFsXG4gICAgY29uc3QgbW9kYWxEaXYgPSBidWlsZEh0bWwoXCJtb2RhbERpdlwiLCBcImRpdlwiLCBtb2RhbFNlY3Rpb24pO1xuXG4gICAgLy8gYnVpbGQgaDNcbiAgICBjb25zdCBtb2RhbEgzID0gYnVpbGRIdG1sKFwidG9kb0g0XCIsIFwiaDRcIiwgbW9kYWxEaXYpO1xuICAgIG1vZGFsSDMudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBUaGUgVGFzaz9cIjtcblxuICAgIC8vIGJ1aWxkIGNsb3NlIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlRGl2ID0gYnVpbGRIdG1sKFwiY2xvc2VEaXZcIiwgXCJidXR0b25cIiwgbW9kYWxEaXYpO1xuXG4gICAgLy8gYnVpbGQgc3ZnIGZvciBjbG9zZSBidXR0b25cbiAgICBjb25zdCBzdmdDbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwic3ZnXCJcbiAgICApO1xuICAgIHN2Z0Nsb3NlLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICBzdmdDbG9zZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgIHN2Z0Nsb3NlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnQ2xvc2VcIik7XG4gICAgc3ZnQ2xvc2Uuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMFwiKTsgLy8gc2V0IHdpZHRoIHRvIDIwcHhcbiAgICBzdmdDbG9zZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIyMFwiKTsgLy8gc2V0IGhlaWdodCB0byAyMHB4XG5cbiAgICBjb25zdCBjbG9zZVBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgY2xvc2VQYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgY2xvc2VQYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xuICAgIGNsb3NlUGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTYgMThMMTggNk02IDZsMTIgMTJcIik7XG5cbiAgICBzdmdDbG9zZS5hcHBlbmRDaGlsZChjbG9zZVBhdGgpO1xuICAgIGNsb3NlRGl2LmFwcGVuZChzdmdDbG9zZSk7XG5cbiAgICAvLyBDcmVhdGUgdGV4dCBmcm9tIHRhc2tcbiAgICBjb25zdCB0b2RvVGV4dCA9IGJ1aWxkSHRtbChcImRlbGV0ZVRleHRcIiwgXCJkaXZcIiwgbW9kYWxTZWN0aW9uKTtcbiAgICB0b2RvVGV4dC50ZXh0Q29udGVudCA9IFwidGV4dCBoZXJlXCI7XG4gICAgdG9kb1RleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVUZXh0XCIpO1xuXG4gICAgLy8gY3JlYXRlIHN1Ym1pdCBidXR0b25cbiAgICBjb25zdCBjb25maXJtRGVsZXRlID0gYnVpbGRIdG1sKFxuICAgICAgXCJzdWJtaXRGb3JtXCIsXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgbW9kYWxTZWN0aW9uLFxuICAgICAgXCJDb25maXJtXCJcbiAgICApO1xuXG4gICAgLy8gKioqIGV2ZW50IGxpc3RlbmVycyAqKipcblxuICAgIC8vIHRvZ2dsZSBtb2RhbCBvbiBvdmVybGF5XG4gICAgbW9kYWxPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gdG9nZ2xlIG1vZGFsIG9uIGNsb3NlIGJ1dHRvblxuICAgIGNsb3NlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gZGVsZXRlIG1ldGhvZFxuICAgIGNvbmZpcm1EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhcInNlbmRpbmcgZGVsZXRlIGluZGV4IHRvIGRiLi4uXCIpO1xuICAgICAgY29uc3QgdGFza1RvRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVUZXh0XCIpO1xuICAgICAgY29uc3QgaW5kZXggPSB0YXNrVG9EZWxldGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgICAgIGNvbnN0IHNlY3Rpb24gPSB0YXNrVG9EZWxldGUuZ2V0QXR0cmlidXRlKFwic2VjdGlvblwiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmxvZyhzZWN0aW9uKTtcbiAgICAgIHRvZG9Mb2dpYy5kZWxldGVUb2RvKHNlY3Rpb24sIGluZGV4KTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgdXBkYXRlVWkoKTtcbiAgICAgIG1vZGFsU2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gZnVuYyB0byBidWlsZCBzZWN0aW9ucyAobmFtZSBvZiB0aGUgY2F0ZWdvcnk6IHRvZG8sIGRvbmUsIGV0Yy4uKVxuICBjb25zdCBidWlsZFNlY3Rpb24gPSAoaDQpID0+IHtcbiAgICBjb25zdCB0b2RvR3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb0dyaWRcIik7XG5cbiAgICAvLyBidWlsZCB0b2RvIHRhYlxuICAgIGNvbnN0IHRvZG9UYWIgPSBidWlsZEh0bWwoXCJ0b2RvVGFiXCIsIFwiZGl2XCIsIHRvZG9HcmlkKTtcblxuICAgIC8vIGJ1aWxkIGgzIGZvciB0b2RvIHRhYlxuICAgIGNvbnN0IHRvZG9INCA9IGJ1aWxkSHRtbChcInRvZG9INFwiLCBcImg0XCIsIHRvZG9UYWIpO1xuICAgIHRvZG9INC50ZXh0Q29udGVudCA9IGg0O1xuXG4gICAgLy8gYnVpbGQgZmxleCBmb3IgdG9kbyBjYXJkc1xuICAgIGNvbnN0IHRvZG9GbGV4ID0gYnVpbGRIdG1sKFwidG9kb0ZsZXhcIiwgXCJkaXZcIiwgdG9kb1RhYik7XG4gICAgdG9kb0ZsZXguc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7aDR9UGFyZW50YCk7XG5cbiAgICBpZiAoaDQgIT09IFwiZG9uZVwiKSB7XG4gICAgICAvLyBidWlsZCBuZXdUb2RvIGJ1dHRvblxuICAgICAgY29uc3QgbmV3VG9kbyA9IGJ1aWxkSHRtbChcIm5ld1RvZG9cIiwgXCJidXR0b25cIiwgdG9kb1RhYik7XG5cbiAgICAgIC8vIGJ1aWxkIHN2ZyBpY29uIG9uIHRoZSBidXR0b25cbiAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgICBzdmcuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ZnTmV3VG9kb1wiKTtcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjIwXCIpOyAvLyBzZXQgd2lkdGggdG8gMjBweFxuICAgICAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwXCIpOyAvLyBzZXQgaGVpZ2h0IHRvIDIwcHhcblxuICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICBcInBhdGhcIlxuICAgICAgKTtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIik7XG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTIgNC41djE1bTcuNS03LjVoLTE1XCIpO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgICBuZXdUb2RvLnByZXBlbmQoc3ZnKTtcblxuICAgICAgLy8gYnVpbGQgdGV4dCBmb3IgYnV0dG9uXG4gICAgICBjb25zdCB0ZXh0TmV3VG9kbyA9IGJ1aWxkSHRtbChcInRleHROZXdUb2RvXCIsIFwicFwiLCBuZXdUb2RvKTtcbiAgICAgIHRleHROZXdUb2RvLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgICAvLyBzZWxlY3QgZG9tIG5vZGVzXG4gICAgICBjb25zdCBtb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsU2VjdGlvblwiKTtcbiAgICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxPdmVybGF5XCIpO1xuICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIik7XG4gICAgICAvLyBOZXcgY29kZSBoZXJlXG4gICAgICBuZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBtb2RhbFNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyBmdW5jIHRvIGJ1aWxkIGJveCAodGV4dCArIGJ1dHRvbnMpXG4gIGNvbnN0IHRvZG9Db21wbGV0ZSA9IChmbGV4U2VjdGlvbiwgdGV4dCwgZGF0ZSwgcHJpb3JpdHksIGluZGV4LCBzZWN0aW9uKSA9PiB7XG4gICAgLy9cbiAgICAvLyBidWlsZCBkaXYgZm9yIHRhc2sgKyBidXR0b25zXG4gICAgY29uc3QgbmV3Qm94ID0gYnVpbGRIdG1sKFwidG9kb0JveFwiLCBcImRpdlwiLCBmbGV4U2VjdGlvbik7XG5cbiAgICAvLyBidWlsZCBkaXYgZm9yIHRleHQgYW5kIGRhdGVcbiAgICBjb25zdCBuZXdFbCA9IGJ1aWxkSHRtbChcInRvZG9FbFwiLCBcImRpdlwiLCBuZXdCb3gpO1xuICAgIG5ld0VsLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpO1xuICAgIG5ld0VsLnNldEF0dHJpYnV0ZShcInNlY3Rpb25cIiwgc2VjdGlvbik7XG5cbiAgICAvLyBidWlsZCBwIGZvciB0YXNrXG4gICAgY29uc3QgbmV3VGFzayA9IGJ1aWxkSHRtbChcIm5ld1Rhc2tcIiwgXCJwXCIsIG5ld0VsKTtcbiAgICBuZXdUYXNrLmlubmVyVGV4dCA9IHRleHQ7XG5cbiAgICAvLyBpZiB0aGVyZSdzIGRhdGUgb3IgcHJpb3IgYnVpbGQgdGhlIG5vZGVzXG5cbiAgICBpZiAoc2VjdGlvbiAhPT0gXCJkb25lXCIpIHtcbiAgICAgIGlmIChkYXRlIHx8IHByaW9yaXR5KSB7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGJ1aWxkIGRpdiBmb3IgZGF0ZSB8fCBwcmlvclxuICAgICAgICBjb25zdCBkaXZEYXRlUHJpb3IgPSBidWlsZEh0bWwoXCJkaXZEYXRlUHJpb3JcIiwgXCJkaXZcIiwgbmV3RWwpO1xuXG4gICAgICAgIGlmIChwcmlvcml0eSkge1xuICAgICAgICAgIC8vXG4gICAgICAgICAgLy8gYnVpbGQgaWNvbnMgZm9yIHByaW9yaXR5XG4gICAgICAgICAgY29uc3QgbmV3UHJpb3IgPSAoY29sb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgICAgICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICAgICAgICAgIFwic3ZnXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcmlvclN2Zy5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgICAgICAgICAgcHJpb3JTdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICAgICAgICAgIHByaW9yU3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpO1xuICAgICAgICAgICAgcHJpb3JTdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIyMFwiKTtcbiAgICAgICAgICAgIHByaW9yU3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjIwXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvclBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICAgICAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgXCJwYXRoXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcmlvclBhdGguc2V0QXR0cmlidXRlKFwiZmlsbC1ydWxlXCIsIFwiZXZlbm9kZFwiKTtcbiAgICAgICAgICAgIHByaW9yUGF0aC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgICAgICBcIk0yLjI1IDEyYzAtNS4zODUgNC4zNjUtOS43NSA5Ljc1LTkuNzVzOS43NSA0LjM2NSA5Ljc1IDkuNzUtNC4zNjUgOS43NS05Ljc1IDkuNzVTMi4yNSAxNy4zODUgMi4yNSAxMnpNMTIgOC4yNWEuNzUuNzUgMCAwMS43NS43NXYzLjc1YS43NS43NSAwIDAxLTEuNSAwVjlhLjc1Ljc1IDAgMDEuNzUtLjc1em0wIDguMjVhLjc1Ljc1IDAgMTAwLTEuNS43NS43NSAwIDAwMCAxLjV6XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwcmlvclBhdGguc2V0QXR0cmlidXRlKFwiY2xpcC1ydWxlXCIsIFwiZXZlbm9kZFwiKTtcblxuICAgICAgICAgICAgcHJpb3JTdmcuYXBwZW5kQ2hpbGQocHJpb3JQYXRoKTtcbiAgICAgICAgICAgIGRpdkRhdGVQcmlvci5hcHBlbmRDaGlsZChwcmlvclN2Zyk7XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgMyBwcmlvcml0eSBvcHRpb25zIGFuZCByZW5kZXIgdGhlIHN2Z1xuICAgICAgICAgIE9iamVjdC5rZXlzKHByaW9yaXR5KS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJpb3JpdHlbZV0pIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgICAgICAgIG5ld1ByaW9yKFwiI2VmNDQ0NFwiKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJtZWRcIjpcbiAgICAgICAgICAgICAgICAgIG5ld1ByaW9yKFwiI2VhYjMwOFwiKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgICAgICAgIG5ld1ByaW9yKFwiIzIyYzU1ZVwiKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFVuZXhwZWN0ZWQgZXJyb3Igb24gc3ZnIHJlbmRlcmApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgIC8vIGJ1aWxkIHAgZm9yIGRhdGVcbiAgICAgICAgICBjb25zdCBuZXdEYXRlID0gYnVpbGRIdG1sKFwibmV3RGF0ZVwiLCBcInBcIiwgZGl2RGF0ZVByaW9yKTtcbiAgICAgICAgICBuZXdEYXRlLmlubmVyVGV4dCA9IGRhdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBidWlsZCBkaXYgZm9yIGJ1dHRvbnNcbiAgICBjb25zdCBuZXdPcHRpb24gPSBidWlsZEh0bWwoXCJ0b2RvT3B0aW9uXCIsIFwiZGl2XCIsIG5ld0JveCk7XG5cbiAgICAvLyBTdmcgc2l6ZVxuICAgIGNvbnN0IHN2Z1NpemUgPSBcIjIwXCI7XG5cbiAgICAvLyBzdmcgY29tcGxldGVcbiAgICBjb25zdCBzdmdDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwic3ZnXCJcbiAgICApO1xuICAgIHN2Z0NvbXBsZXRlLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgc3ZnQ29tcGxldGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgc3ZnQ29tcGxldGUuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICBzdmdDb21wbGV0ZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgc3ZnQ29tcGxldGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpO1xuICAgIHN2Z0NvbXBsZXRlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHN2Z1NpemUpO1xuICAgIHN2Z0NvbXBsZXRlLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBzdmdTaXplKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlUGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwicGF0aFwiXG4gICAgKTtcbiAgICBjb21wbGV0ZVBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICBjb21wbGV0ZVBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIik7XG4gICAgY29tcGxldGVQYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNNC41IDEyLjc1bDYgNiA5LTEzLjVcIik7XG5cbiAgICBzdmdDb21wbGV0ZS5hcHBlbmRDaGlsZChjb21wbGV0ZVBhdGgpO1xuXG4gICAgLy8gKiogRG8gbm90IHJlbmRlciBvbiB0aGUgZG9uZSBzZWN0aW9uICoqXG4gICAgaWYgKHNlY3Rpb24gIT09IFwiZG9uZVwiKSB7XG4gICAgICBuZXdPcHRpb24uYXBwZW5kQ2hpbGQoc3ZnQ29tcGxldGUpO1xuICAgIH1cblxuICAgIC8vIHN2ZyB1bmRvXG4gICAgY29uc3QgdW5kb1N2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwic3ZnXCJcbiAgICApO1xuICAgIHVuZG9Tdmcuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICB1bmRvU3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIHVuZG9Tdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICB1bmRvU3ZnLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICB1bmRvU3ZnLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICB1bmRvU3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHN2Z1NpemUpO1xuICAgIHVuZG9Tdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHN2Z1NpemUpO1xuXG4gICAgY29uc3QgdW5kb1BhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgdW5kb1BhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICB1bmRvUGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICB1bmRvUGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTkgMTVMMyA5bTAgMGw2LTZNMyA5aDEyYTYgNiAwIDAxMCAxMmgtM1wiKTtcblxuICAgIHVuZG9TdmcuYXBwZW5kQ2hpbGQodW5kb1BhdGgpO1xuXG4gICAgLy8gKiogcmVuZGVyIG9ubHkgb24gdGhlIGRvbmUgc2VjdGlvblxuICAgIGlmIChzZWN0aW9uID09PSBcImRvbmVcIikge1xuICAgICAgbmV3T3B0aW9uLmFwcGVuZENoaWxkKHVuZG9TdmcpO1xuICAgIH1cblxuICAgIC8vIHN2ZyBlZGl0XG4gICAgY29uc3Qgc3ZnRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwic3ZnXCJcbiAgICApO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICBzdmdFZGl0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIHN2Z1NpemUpO1xuICAgIHN2Z0VkaXQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIHN2Z1NpemUpO1xuXG4gICAgY29uc3QgZWRpdFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcInBhdGhcIlxuICAgICk7XG4gICAgZWRpdFBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICBlZGl0UGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICBlZGl0UGF0aC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRcIixcbiAgICAgIFwiTTE2Ljg2MiA0LjQ4N2wxLjY4Ny0xLjY4OGExLjg3NSAxLjg3NSAwIDExMi42NTIgMi42NTJMMTAuNTgyIDE2LjA3YTQuNSA0LjUgMCAwMS0xLjg5NyAxLjEzTDYgMThsLjgtMi42ODVhNC41IDQuNSAwIDAxMS4xMy0xLjg5N2w4LjkzMi04LjkzMXptMCAwTDE5LjUgNy4xMjVNMTggMTR2NC43NUEyLjI1IDIuMjUgMCAwMTE1Ljc1IDIxSDUuMjVBMi4yNSAyLjI1IDAgMDEzIDE4Ljc1VjguMjVBMi4yNSAyLjI1IDAgMDE1LjI1IDZIMTBcIlxuICAgICk7XG5cbiAgICBzdmdFZGl0LmFwcGVuZENoaWxkKGVkaXRQYXRoKTtcbiAgICBuZXdPcHRpb24uYXBwZW5kQ2hpbGQoc3ZnRWRpdCk7XG5cbiAgICAvLyBzdmcgZGVsZXRlXG4gICAgY29uc3Qgc3ZnRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJzdmdcIlxuICAgICk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuICAgIHN2Z0RlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgc3ZnU2l6ZSk7XG4gICAgc3ZnRGVsZXRlLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBzdmdTaXplKTtcbiAgICBzdmdEZWxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdmdEZWxldGVcIik7XG5cbiAgICBjb25zdCBkZWxldGVQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgXCJwYXRoXCJcbiAgICApO1xuICAgIGRlbGV0ZVBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICBkZWxldGVQYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lam9pblwiLCBcInJvdW5kXCIpO1xuICAgIGRlbGV0ZVBhdGguc2V0QXR0cmlidXRlKFxuICAgICAgXCJkXCIsXG4gICAgICBcIk0xNC43NCA5bC0uMzQ2IDltLTQuNzg4IDBMOS4yNiA5bTkuOTY4LTMuMjFjLjM0Mi4wNTIuNjgyLjEwNyAxLjAyMi4xNjZtLTEuMDIyLS4xNjVMMTguMTYgMTkuNjczYTIuMjUgMi4yNSAwIDAxLTIuMjQ0IDIuMDc3SDguMDg0YTIuMjUgMi4yNSAwIDAxLTIuMjQ0LTIuMDc3TDQuNzcyIDUuNzltMTQuNDU2IDBhNDguMTA4IDQ4LjEwOCAwIDAwLTMuNDc4LS4zOTdtLTEyIC41NjJjLjM0LS4wNTkuNjgtLjExNCAxLjAyMi0uMTY1bTAgMGE0OC4xMSA0OC4xMSAwIDAxMy40NzgtLjM5N203LjUgMHYtLjkxNmMwLTEuMTgtLjkxLTIuMTY0LTIuMDktMi4yMDFhNTEuOTY0IDUxLjk2NCAwIDAwLTMuMzIgMGMtMS4xOC4wMzctMi4wOSAxLjAyMi0yLjA5IDIuMjAxdi45MTZtNy41IDBhNDguNjY3IDQ4LjY2NyAwIDAwLTcuNSAwXCJcbiAgICApO1xuXG4gICAgc3ZnRGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZVBhdGgpO1xuICAgIG5ld09wdGlvbi5hcHBlbmQoc3ZnRGVsZXRlKTtcblxuICAgIC8vICoqKiBldmVudCBsaXN0ZW5lcnMgKioqXG5cbiAgICAvLyB0YXNrIGRvbmUgaWNvblxuICAgIHN2Z0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUubG9nKFwidGFzayBkb25lLi4uIHNlbmRpbmcgdG8gZGJcIik7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFRpdGxlXCIpXG4gICAgICAgIC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY29uc3QgZnJvbSA9IFwidG9kb1wiO1xuICAgICAgY29uc3QgbW92ZUluZGV4ID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgICAgIGNvbnN0IHRvID0gXCJkb25lXCI7XG4gICAgICB0b2RvTG9naWMubW92ZVRvZG8ocHJvamVjdCwgZnJvbSwgbW92ZUluZGV4LCB0byk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHdob2xlIHVpXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgIHVwZGF0ZVVpKCk7XG4gICAgfSk7XG5cbiAgICAvLyB1bmRvIHRhc2sgaWNvblxuICAgIHVuZG9TdmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXCJyZXZlcnRpbmcgdGFzayB0byB0b2RvLi4uXCIpO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChcInByb2plY3RUaXRsZVwiKVxuICAgICAgICAudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNvbnN0IGZyb20gPSBcImRvbmVcIjtcbiAgICAgIGNvbnN0IG1vdmVJbmRleCA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG4gICAgICBjb25zdCB0byA9IFwidG9kb1wiO1xuICAgICAgdG9kb0xvZ2ljLm1vdmVUb2RvKHByb2plY3QsIGZyb20sIG1vdmVJbmRleCwgdG8pO1xuICAgICAgLy8gdXBkYXRlIHRoZSB3aG9sZSB1aVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICB1cGRhdGVVaSgpO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kaWZ5IHRvZG8gaWNvblxuICAgIHN2Z0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgYWxlcnQoXCJVbmRlciBtYWludGVuYW5jZS4gU29ycnkgZm9yIHRoZSBpbmNvbnZlbmllbmNlLlwiKTtcbiAgICB9KTtcblxuICAgIC8vIGRlbGV0ZS90aHJhc2ggaWNvblxuICAgIHN2Z0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIC8vXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5sb2coXCJEZWxldGUgZWxlbWVudCBjbGlja2VkIVwiKTtcblxuICAgICAgLy8gY2FuY2VsIGJhY2tncm91bmQgdG91Y2hcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgIC8vIG92ZXJsYXlcbiAgICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlT3ZlcmxheVwiKTtcbiAgICAgIG1vZGFsT3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuXG4gICAgICAvLyBtb2RhbFxuICAgICAgY29uc3QgZGVsZXRlU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVsZXRlU2VjdGlvblwiKTtcbiAgICAgIGRlbGV0ZVNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcblxuICAgICAgLy8gRGVsZXRlIHRleHRcbiAgICAgIGNvbnN0IHRleHREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWxldGVUZXh0XCIpO1xuICAgICAgY29uc3QgZGVsZXRlVGV4dCA9XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgIHRleHREaXNwbGF5LmlubmVyVGV4dCA9IGRlbGV0ZVRleHQ7XG4gICAgICBjb25zdCBpbmRleERpc3BsYXkgPVxuICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKTtcbiAgICAgIHRleHREaXNwbGF5LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXhEaXNwbGF5KTtcbiAgICAgIGNvbnN0IHNlY3Rpb25EaXNwbGF5ID1cbiAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZShcInNlY3Rpb25cIik7XG4gICAgICB0ZXh0RGlzcGxheS5zZXRBdHRyaWJ1dGUoXCJzZWN0aW9uXCIsIHNlY3Rpb25EaXNwbGF5KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBmdW5jIHRvIHVwZGF0ZSB1aVxuICBjb25zdCB1cGRhdGVVaSA9IChkYXRhID0gdG9kb0xvZ2ljLmdldERhdGEoKSkgPT4ge1xuICAgIC8vXG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvR3JpZFwiKTtcblxuICAgIC8vIHJlbW92ZSBldmVyeSB0b2RvXG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIGFsbCBmcm9tIERCXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gZGF0YVtrZXldO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBpbiBwcm9qZWN0KSB7XG4gICAgICAgIGJ1aWxkU2VjdGlvbihzZWN0aW9uKTtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBwcm9qZWN0W3NlY3Rpb25dO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIGd1YXJkLWZvci1pblxuICAgICAgICBmb3IgKGNvbnN0IHRhc2sgaW4gYXJyYXkpIHtcbiAgICAgICAgICBjb25zdCBmbGV4U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3NlY3Rpb259UGFyZW50YCk7XG4gICAgICAgICAgY29uc3QgeyB0aXRsZSB9ID0gYXJyYXlbdGFza107XG4gICAgICAgICAgbGV0IHsgZGF0ZSB9ID0gYXJyYXlbdGFza107XG4gICAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIC8vIGZvcm1hdCBkYXRlXG4gICAgICAgICAgICBjb25zdCBpbnB1dERhdGUgPSBwYXJzZUlTTyhkYXRlKTtcbiAgICAgICAgICAgIGRhdGUgPSBmb3JtYXQoaW5wdXREYXRlLCBcIk1NTU0gZG9cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxldCB7IHByaW9yaXR5IH0gPSBhcnJheVt0YXNrXTtcbiAgICAgICAgICAvLyBjaGVjayBpZiBpdCdzIGFsbCBmYWxzZVxuICAgICAgICAgIGNvbnN0IG9ubHlGYWxzZVByaW9yID0gT2JqZWN0LnZhbHVlcyhwcmlvcml0eSkuZXZlcnkoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlID09PSBmYWxzZVxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKG9ubHlGYWxzZVByaW9yKSB7XG4gICAgICAgICAgICBwcmlvcml0eSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGluZGV4XG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0YXNrO1xuICAgICAgICAgIGNvbnN0IEF0dHNlY3Rpb24gPSBgJHtzZWN0aW9ufWA7XG4gICAgICAgICAgdG9kb0NvbXBsZXRlKGZsZXhTZWN0aW9uLCB0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIGluZGV4LCBBdHRzZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBidWlsZCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kbztcbiIsImltcG9ydCBjb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWluZXIvY29udGFpbmVyXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IHRvZG8gZnJvbSBcIi4vY29tcG9uZW50cy90b2RvL3RvZG9cIjtcblxuY29udGFpbmVyKCk7XG5oZWFkZXIuYnVpbGQoKTtcbnRvZG8uYnVpbGQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgXCIuL3BhZ2VMb2FkXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=