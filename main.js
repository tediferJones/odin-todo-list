/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n    margin: 0;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidebar {\n    background-color: purple;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n}\n\n.projectsContainer {\n    font-size: 24px;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    gap: 24px; \n}\n\n.projectLink {\n    cursor: pointer;\n}\n\n.newProject {\n    height: 48px;\n    border-radius: 24px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: rgb(81, 90, 107);\n    color: white;\n    font-weight: bold;\n} \n\n.newProjectContainer {\n    width: 80%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.newProjectSuperContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n.mainContent {\n    background-color: rgb(81, 90, 107);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n}\n\n.inputForm {\n    height: 240px;\n    width: 360px;\n\n    background-color: whitesmoke;\n    border-radius: 12px;\n    border-style: solid;\n    border-width: 4px;\n\n    position: fixed;\n    top: calc(50vh - 120px);\n    left: calc(50vw - 180px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.formContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.createNewTask {\n    height: 32px;\n    outline: none;\n    border: none;\n    background-color: purple;\n    color: white;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.formError {\n    color: red;\n    font-weight: bolder;\n    display: flex;\n    justify-content: center;\n}\n\n.addTask {\n    height: 64px;\n    width: 256px;\n    margin: 48px;\n\n    color: white;\n    font-size: 24px;\n    font-weight: bold;\n    background-color: purple;\n    border-radius: 32px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.toDoItems {\n    width: 80%;\n}\n\n.mainAttrs {\n    height: 64px;\n    margin: 24px;\n    padding: 0px 24px;\n    background-color: whitesmoke;\n    border-radius: 8px;\n    font-size: 24px;\n    font-weight: bold;\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n}\n\n.priority {\n    margin-left: -24px;\n    height: 64px;\n    width: 64px;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.details {\n    background-color: rgb(201, 201, 201);\n    margin: -24px 24px 0px;\n\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    \n}\n\n.toggleCorners {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n.priorityCorner {\n    border-bottom-left-radius: 0px;\n}\n\n.shown {\n    display: flex;\n    justify-content: space-between;\n}\n\n.deleteIcon {\n    padding-right: 30px;\n}\n\n.description {\n    padding: 12px;\n}\n\n.extendIcon { \n    cursor: pointer; \n}\n\n.removeFormContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n.removeForm {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,sEAAsE;AAC1E;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,UAAU;;IAEV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kCAAkC;;IAElC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,4BAA4B;IAC5B,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;;IAEjB,eAAe;IACf,uBAAuB;IACvB,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;;IAEZ,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;IACf,iBAAiB;;IAEjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,8BAA8B;;IAE9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,sBAAsB;;IAEtB,8BAA8B;IAC9B,+BAA+B;;AAEnC;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb","sourcesContent":["html,\nbody {\n    margin: 0;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidebar {\n    background-color: purple;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n}\n\n.projectsContainer {\n    font-size: 24px;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    gap: 24px; \n}\n\n.projectLink {\n    cursor: pointer;\n}\n\n.newProject {\n    height: 48px;\n    border-radius: 24px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: rgb(81, 90, 107);\n    color: white;\n    font-weight: bold;\n} \n\n.newProjectContainer {\n    width: 80%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.newProjectSuperContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n.mainContent {\n    background-color: rgb(81, 90, 107);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n}\n\n.inputForm {\n    height: 240px;\n    width: 360px;\n\n    background-color: whitesmoke;\n    border-radius: 12px;\n    border-style: solid;\n    border-width: 4px;\n\n    position: fixed;\n    top: calc(50vh - 120px);\n    left: calc(50vw - 180px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.formContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.createNewTask {\n    height: 32px;\n    outline: none;\n    border: none;\n    background-color: purple;\n    color: white;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.formError {\n    color: red;\n    font-weight: bolder;\n    display: flex;\n    justify-content: center;\n}\n\n.addTask {\n    height: 64px;\n    width: 256px;\n    margin: 48px;\n\n    color: white;\n    font-size: 24px;\n    font-weight: bold;\n    background-color: purple;\n    border-radius: 32px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.toDoItems {\n    width: 80%;\n}\n\n.mainAttrs {\n    height: 64px;\n    margin: 24px;\n    padding: 0px 24px;\n    background-color: whitesmoke;\n    border-radius: 8px;\n    font-size: 24px;\n    font-weight: bold;\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n}\n\n.priority {\n    margin-left: -24px;\n    height: 64px;\n    width: 64px;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.details {\n    background-color: rgb(201, 201, 201);\n    margin: -24px 24px 0px;\n\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    \n}\n\n.toggleCorners {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n.priorityCorner {\n    border-bottom-left-radius: 0px;\n}\n\n.shown {\n    display: flex;\n    justify-content: space-between;\n}\n\n.deleteIcon {\n    padding-right: 30px;\n}\n\n.description {\n    padding: 12px;\n}\n\n.extendIcon { \n    cursor: pointer; \n}\n\n.removeFormContainer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}\n\n.removeForm {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOMCreateForm.js":
/*!******************************!*\
  !*** ./src/DOMCreateForm.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DOMCreateForm = ((allProjects) => {
    const inputForm = document.createElement('div')
    inputForm.classList.add('inputForm')

        const formContainer = document.createElement('form')
        formContainer.classList.add('formContainer')

            const titleInputContainer = document.createElement('div')
            titleInputContainer.classList.add('inputContainer')

                const titleLabel = document.createElement('label')
                titleLabel.setAttribute('for', 'title')
                titleLabel.textContent = 'Title:'

            titleInputContainer.appendChild(titleLabel)

                const titleInput = document.createElement('input')
                titleInput.setAttribute('type', 'text')
                titleInput.setAttribute('id', 'title')
                titleInput.setAttribute('name', 'title')
                titleInput.setAttribute('placeholder', 'Required')

            titleInputContainer.appendChild(titleInput)

        formContainer.appendChild(titleInputContainer)

            const descriptionInputContainer = document.createElement('div')
            descriptionInputContainer.classList.add('inputContainer')

                const descriptionLabel = document.createElement('label')
                descriptionLabel.setAttribute('for', 'description')
                descriptionLabel.textContent = 'Description:'

            descriptionInputContainer.appendChild(descriptionLabel)

                const descriptionInput = document.createElement('input')
                descriptionInput.setAttribute('type', 'text')
                descriptionInput.setAttribute('id', 'description')
                descriptionInput.setAttribute('name', 'description')

            descriptionInputContainer.appendChild(descriptionInput)

        formContainer.appendChild(descriptionInputContainer)

            const dueDateInputContainer = document.createElement('div')
            dueDateInputContainer.classList.add('inputContainer')

                const dueDateLabel = document.createElement('label')
                dueDateLabel.setAttribute('for', 'dueDate')
                dueDateLabel.textContent = 'Due Date:'

            dueDateInputContainer.appendChild(dueDateLabel)

                const dueDateInput = document.createElement('input')
                dueDateInput.setAttribute('type', 'datetime-local')
                dueDateInput.setAttribute('id', 'dueDate')
                dueDateInput.setAttribute('name', 'dueDate')

            dueDateInputContainer.appendChild(dueDateInput)

        formContainer.appendChild(dueDateInputContainer)

            const priorityInputContainer = document.createElement('div')
            priorityInputContainer.classList.add('inputContainer')

                const priorityLabel = document.createElement('label')
                priorityLabel.setAttribute('for', 'priority')
                priorityLabel.textContent = 'Priority:'

            priorityInputContainer.appendChild(priorityLabel)

                const priorityInput = document.createElement('input')
                priorityInput.setAttribute('type', 'number')
                priorityInput.setAttribute('id', 'priority')
                priorityInput.setAttribute('name', 'priority')
                priorityInput.setAttribute('max', '8')
                priorityInput.setAttribute('min', '1')
                priorityInput.setAttribute('placeholder', '1 - 8')

            priorityInputContainer.appendChild(priorityInput)

        formContainer.appendChild(priorityInputContainer)

            const selectProjectInputContainer = document.createElement('div')
            selectProjectInputContainer.classList.add('inputContainer')

                const selectProjectLabel = document.createElement('label')
                selectProjectLabel.setAttribute('for', 'selectProject')
                selectProjectLabel.textContent = 'For which project?'
                
            selectProjectInputContainer.appendChild(selectProjectLabel)

                let selectProjectInput = document.createElement('select')
                selectProjectInput.setAttribute('id', 'selectProject')
                selectProjectInput.setAttribute('name', 'selectProject')
                for (let key in allProjects) {
                    let projectSelection = document.createElement('option')
                    projectSelection.setAttribute('value', key)
                    projectSelection.textContent = key
                    selectProjectInput.appendChild(projectSelection)
                }
                
            selectProjectInputContainer.appendChild(selectProjectInput)

        formContainer.appendChild(selectProjectInputContainer)

    inputForm.appendChild(formContainer)
    document.querySelector('.mainContent').appendChild(inputForm)
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMCreateForm);

/***/ }),

/***/ "./src/DOMCreateSidebar.js":
/*!*********************************!*\
  !*** ./src/DOMCreateSidebar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMDisplayToDoItems.js */ "./src/DOMDisplayToDoItems.js");


const DOMCreateSidebar = ((allProjects) => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')

    const welcome = document.createElement('h1')
    welcome.textContent = 'Welcome!'
    sidebar.appendChild(welcome)

    const projectsContainer = document.createElement('div')
    projectsContainer.classList.add('projectsContainer')

    for (let key in allProjects) {
        let projectLink = document.createElement('div')
        projectLink.classList.add('projectLink')
        projectLink.classList.add(key.replace(/ /g, ''))
        projectLink.textContent = key
        projectLink.addEventListener('click', () => {
            ;(0,_DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_0__["default"])(allProjects[key], allProjects)
        })
        projectsContainer.appendChild(projectLink)
    }

    sidebar.appendChild(projectsContainer)

    const newProjectSuperContainer = document.createElement('div')
    newProjectSuperContainer.classList.add('newProjectSuperContainer')

    const newProject = document.createElement('button')
    newProject.classList.add('newProject')
    newProject.textContent = 'Add New Project'
    newProjectSuperContainer.appendChild(newProject)

    sidebar.appendChild(newProjectSuperContainer)

    document.querySelector('#content').prepend(sidebar)
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMCreateSidebar);

/***/ }),

/***/ "./src/DOMDisplayToDoItems.js":
/*!************************************!*\
  !*** ./src/DOMDisplayToDoItems.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _extendIcon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extendIcon.png */ "./src/extendIcon.png");
/* harmony import */ var _deleteIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteIcon.png */ "./src/deleteIcon.png");


 
const DOMDisplayToDoItems = ((toDoArray, allProjects) => {
    if (document.querySelector('.toDoItems')) {
        document.querySelector('.mainContent').removeChild(document.querySelector('.toDoItems'))
    }
    const toDoItems = document.createElement('div')
    toDoItems.classList.add('toDoItems')
    for (let i in toDoArray) {
        let toDoItem = document.createElement('div')
        toDoItem.classList.add('toDoItem')

        let mainAttrs = document.createElement('div')
        mainAttrs.classList.add('mainAttrs')

        let details = document.createElement('div')
        details.classList.add('details')
        for (let key in toDoArray[i]) {
            let itemAttr = document.createElement('div')
            itemAttr.classList.add(`${key}`)
            itemAttr.textContent = toDoArray[i][key]
            if (key === 'priority') {
                let priorityColors = ['red','orangered','goldenrod','orange','gold','lightseagreen','yellowgreen','lightgreen']
                itemAttr.style.backgroundColor = priorityColors[toDoArray[i][key] - 1]
                mainAttrs.prepend(itemAttr)
            } else if (key === 'description') {
                details.classList.add('hidden')
                details.appendChild(itemAttr)
            } else if (key === 'dueDate') {
                let timeTillDue = Date.parse(toDoArray[i]['dueDate']) - Date.now()
                itemAttr.textContent = readableTime(timeTillDue)
                mainAttrs.appendChild(itemAttr)
            } else {
                mainAttrs.appendChild(itemAttr)
            }
        }
        
        let extendIcon = new Image();
        extendIcon.src = _extendIcon_png__WEBPACK_IMPORTED_MODULE_0__
        extendIcon.classList.add('extendIcon')
        extendIcon.addEventListener('click', () => {
            details.classList.toggle('hidden')
            details.classList.toggle('shown')
            console.log(mainAttrs.querySelector('.priority').classList.toggle('priorityCorner'))
            mainAttrs.classList.toggle('toggleCorners')
        })
        mainAttrs.appendChild(extendIcon)

        let deleteIcon = new Image()
        deleteIcon.src = _deleteIcon_png__WEBPACK_IMPORTED_MODULE_1__
        deleteIcon.classList.add('deleteIcon')
        deleteIcon.addEventListener('click', () => {
            toDoArray.splice(toDoArray.indexOf(toDoArray[i]), 1)
            localStorage.setItem('allToDos', JSON.stringify(allProjects))
            DOMDisplayToDoItems(toDoArray, allProjects)
        })
        details.appendChild(deleteIcon)

        toDoItem.appendChild(mainAttrs)
        toDoItem.appendChild(details)

        toDoItems.appendChild(toDoItem)
    }
    document.querySelector('.mainContent').appendChild(toDoItems)
})

function readableTime(milliSec) {
    let timeStr = ''
    if (milliSec/86400000 > 365) {
        return 'Over a year'
    } else {
        if (Math.floor(milliSec/86400000) > 0) {
            timeStr += `${Math.floor(milliSec/86400000)}D | `
        }
        if (Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24) > 0) {
            timeStr += `${Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24)}H | `
        }
        if (Math.floor((((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24) - Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24)) * 60) > 1) {
            timeStr += `${Math.floor((((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24) - Math.floor((milliSec/86400000 - Math.floor(milliSec/86400000)) * 24)) * 60)}M`
        }
        return timeStr
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMDisplayToDoItems);

/***/ }),

/***/ "./src/createToDoItem.js":
/*!*******************************!*\
  !*** ./src/createToDoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createToDoItem = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority
    }
} 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToDoItem);

/***/ }),

/***/ "./src/deleteIcon.png":
/*!****************************!*\
  !*** ./src/deleteIcon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cbc383e9056bc419d2fb.png";

/***/ }),

/***/ "./src/extendIcon.png":
/*!****************************!*\
  !*** ./src/extendIcon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c2ffaa421b186788631.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createToDoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createToDoItem.js */ "./src/createToDoItem.js");
/* harmony import */ var _DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMDisplayToDoItems.js */ "./src/DOMDisplayToDoItems.js");
/* harmony import */ var _DOMCreateForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMCreateForm.js */ "./src/DOMCreateForm.js");
/* harmony import */ var _DOMCreateSidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMCreateSidebar.js */ "./src/DOMCreateSidebar.js");






let allProjects = {
    myToDos: []
}

if (localStorage.allToDos) {
    allProjects = JSON.parse(localStorage.allToDos)
}

// inital DOM Setup
(0,_DOMCreateSidebar_js__WEBPACK_IMPORTED_MODULE_4__["default"])(allProjects)
const mainContent = document.createElement('div')
mainContent.classList.add('mainContent')
document.querySelector('#content').appendChild(mainContent)

;(0,_DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allProjects['myToDos'], allProjects)

const addTask = document.createElement('button')
addTask.classList.add('addTask')
addTask.textContent = 'Add Task'
addTask.addEventListener('click', () => {
    if (document.querySelector('.inputForm')) {
        document.querySelector('.inputForm').remove()
    } else {
        (0,_DOMCreateForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(allProjects)

        if (document.querySelector('.createNewTask') === null) {
            const createNewTask = document.createElement('button')
            createNewTask.classList.add('createNewTask')
            createNewTask.textContent = 'Create New Task'
            createNewTask.addEventListener('click', () => {
                let title = document.querySelector('.formContainer').title.value
                let description = document.querySelector('.formContainer').description.value
                let dueDate = document.querySelector('.formContainer').dueDate.value
                let priority = Math.floor(document.querySelector('.formContainer').priority.value)
                let selectProject = document.querySelector('.formContainer').selectProject.value
                dueDate = (new Date(dueDate)).toLocaleString()

                if (title.replace(/ /g, '').length > 0 && priority >= 1 && priority < 9) {
                    allProjects[selectProject].push((0,_createToDoItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(title, description, dueDate, priority))
                    localStorage.setItem('allToDos', JSON.stringify(allProjects))
 
                    ;(0,_DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allProjects[selectProject], allProjects)
                    document.querySelector('form').reset()
                    document.querySelector('.inputForm').remove()
                } else {
                    if (!(document.querySelector('.formError'))) {
                        const formError = document.createElement('div')
                        formError.classList.add('formError')
                        formError.textContent = 'A name and proper priority is required'
                        document.querySelector('.inputForm').appendChild(formError)
                    }
                }
            })
            document.querySelector('.inputForm').appendChild(createNewTask)
        }
    }
})
document.querySelector('.mainContent').prepend(addTask)

document.querySelector('.newProject').addEventListener('click', () => {
    if (document.querySelector('.newProjectContainer')) {
        document.querySelector('.newProjectContainer').remove()
    } else {
        const newProjectContainer = document.createElement('div')
        newProjectContainer.classList.add('newProjectContainer')

        const projectForm = document.createElement('form')
        projectForm.classList.add('projectForm')

        const projectLabel = document.createElement('label')
        projectLabel.textContent = 'Project Name'
        projectLabel.setAttribute('for', 'projectInput')
        projectForm.appendChild(projectLabel) 

        const projectInput = document.createElement('input')
        projectInput.setAttribute('type', 'text')
        projectInput.setAttribute('id', 'projectInput')
        projectInput.setAttribute('name', 'projectInput')
        projectForm.appendChild(projectInput)

        newProjectContainer.appendChild(projectForm) 

        const createProject = document.createElement('button')
        createProject.textContent = 'Create Project'
        createProject.addEventListener('click', () => {
            allProjects[document.querySelector('.projectForm').projectInput.value] = []
            localStorage.setItem('allToDos', JSON.stringify(allProjects))

            document.querySelector('.projectsContainer').innerHTML = ''
            for (let key in allProjects) {
                let projectLink = document.createElement('div')
                projectLink.classList.add('projectLink')
                projectLink.classList.add(key.replace(/ /g, ''))
                projectLink.textContent = key
                projectLink.addEventListener('click', () => {
                    ;(0,_DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allProjects[key], allProjects)
                })
                document.querySelector('.projectsContainer').appendChild(projectLink)
            }

            document.querySelector('.newProjectContainer').remove()
        })
        newProjectContainer.appendChild(createProject)
        document.querySelector('.newProjectSuperContainer').appendChild(newProjectContainer)
    }
})

// REMOVE BTN TEST

const removeProject = document.createElement('button')
removeProject.classList.add('removeProject')
removeProject.textContent = 'Remove a Project'
removeProject.addEventListener('click', () => {
    console.log('remove the project')

    if (document.querySelector('.removeFormContainer')) {
        document.querySelector('.removeFormContainer').remove()
    } else {
        const removeFormContainer = document.createElement('div')
        removeFormContainer.classList.add('removeFormContainer')

        const removeForm = document.createElement('form')
        removeForm.classList.add('removeForm')

        const removeLabel = document.createElement('label')
        removeLabel.classList.add('removeLabel')
        removeLabel.textContent = 'Remove which project?'
        removeLabel.setAttribute('for', 'removeProject')
        removeForm.appendChild(removeLabel)

        const removeInput = document.createElement('select')
        removeInput.setAttribute('id', 'removeProject')
        removeInput.setAttribute('name', 'removeProject')
        for (let key in allProjects) {
            console.log(key)
            if (key != 'myToDos') {
            let projectRemoveSelection = document.createElement('option')
            projectRemoveSelection.setAttribute('value', key)
            projectRemoveSelection.textContent = key
            removeInput.appendChild(projectRemoveSelection)
            }
            
        }
        removeForm.appendChild(removeInput)
        removeFormContainer.appendChild(removeForm)

        const removeProjectBtn = document.createElement('button')
        removeProjectBtn.classList.add('removeProjectBtn')
        removeProjectBtn.textContent = 'Remove Project'
        removeProjectBtn.addEventListener('click', () => {
            console.log('REMOVE THE THING')
            let temp = document.querySelector('.removeForm').removeProject.value.replace(/ /g, '')
            console.log(temp)
            document.querySelector(`.${temp}`).remove()
            delete allProjects[document.querySelector('.removeForm').removeProject.value]
            localStorage.setItem('allToDos', JSON.stringify(allProjects))
            console.log(allProjects)
            ;(0,_DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allProjects['myToDos'], allProjects)
            document.querySelector('.removeFormContainer').remove()
        })
        removeFormContainer.appendChild(removeProjectBtn)

        document.querySelector('.sidebar').appendChild(removeFormContainer)
    }
})
document.querySelector('.sidebar').appendChild(removeProject)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGdCQUFnQiw2RUFBNkUsR0FBRyxjQUFjLG9CQUFvQixvQkFBb0IscUNBQXFDLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxjQUFjLCtCQUErQixtQkFBbUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsd0JBQXdCLHNCQUFzQix3QkFBd0Isb0JBQW9CLDZCQUE2QixpQkFBaUIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsaUJBQWlCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixzQkFBc0IseUNBQXlDLG1CQUFtQix3QkFBd0IsSUFBSSwwQkFBMEIsaUJBQWlCLHNCQUFzQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsR0FBRywrQkFBK0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsa0JBQWtCLHlDQUF5QyxzQkFBc0IsNkJBQTZCLDJCQUEyQixHQUFHLGdCQUFnQixvQkFBb0IsbUJBQW1CLHFDQUFxQywwQkFBMEIsMEJBQTBCLHdCQUF3Qix3QkFBd0IsOEJBQThCLCtCQUErQixzQkFBc0IsNkJBQTZCLG9DQUFvQyxHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLCtCQUErQixtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLGdCQUFnQixpQkFBaUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsR0FBRyxjQUFjLG1CQUFtQixtQkFBbUIsbUJBQW1CLHFCQUFxQixzQkFBc0Isd0JBQXdCLCtCQUErQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixzQkFBc0IsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsZ0JBQWdCLG1CQUFtQixtQkFBbUIsd0JBQXdCLG1DQUFtQyx5QkFBeUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIscUNBQXFDLDBCQUEwQixnQkFBZ0IsR0FBRyxlQUFlLHlCQUF5QixtQkFBbUIsa0JBQWtCLGtDQUFrQyxxQ0FBcUMsc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLDJDQUEyQyw2QkFBNkIsdUNBQXVDLHNDQUFzQyxTQUFTLG9CQUFvQixxQ0FBcUMsc0NBQXNDLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHLFlBQVksb0JBQW9CLHFDQUFxQyxHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLDBCQUEwQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsT0FBTyxpRkFBaUYsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsc0NBQXNDLGdCQUFnQiw2RUFBNkUsR0FBRyxjQUFjLG9CQUFvQixvQkFBb0IscUNBQXFDLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxjQUFjLCtCQUErQixtQkFBbUIsc0JBQXNCLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsd0JBQXdCLHNCQUFzQix3QkFBd0Isb0JBQW9CLDZCQUE2QixpQkFBaUIsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsaUJBQWlCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixzQkFBc0IseUNBQXlDLG1CQUFtQix3QkFBd0IsSUFBSSwwQkFBMEIsaUJBQWlCLHNCQUFzQiw2QkFBNkIsOEJBQThCLDBCQUEwQixnQkFBZ0IsR0FBRywrQkFBK0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsa0JBQWtCLHlDQUF5QyxzQkFBc0IsNkJBQTZCLDJCQUEyQixHQUFHLGdCQUFnQixvQkFBb0IsbUJBQW1CLHFDQUFxQywwQkFBMEIsMEJBQTBCLHdCQUF3Qix3QkFBd0IsOEJBQThCLCtCQUErQixzQkFBc0IsNkJBQTZCLG9DQUFvQyxHQUFHLG9CQUFvQixvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsZ0JBQWdCLEdBQUcsb0JBQW9CLG1CQUFtQixvQkFBb0IsbUJBQW1CLCtCQUErQixtQkFBbUIsc0JBQXNCLHdCQUF3QixHQUFHLGdCQUFnQixpQkFBaUIsMEJBQTBCLG9CQUFvQiw4QkFBOEIsR0FBRyxjQUFjLG1CQUFtQixtQkFBbUIsbUJBQW1CLHFCQUFxQixzQkFBc0Isd0JBQXdCLCtCQUErQiwwQkFBMEIsb0JBQW9CLG1CQUFtQixzQkFBc0IsR0FBRyxnQkFBZ0IsaUJBQWlCLEdBQUcsZ0JBQWdCLG1CQUFtQixtQkFBbUIsd0JBQXdCLG1DQUFtQyx5QkFBeUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIscUNBQXFDLDBCQUEwQixnQkFBZ0IsR0FBRyxlQUFlLHlCQUF5QixtQkFBbUIsa0JBQWtCLGtDQUFrQyxxQ0FBcUMsc0JBQXNCLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLDJDQUEyQyw2QkFBNkIsdUNBQXVDLHNDQUFzQyxTQUFTLG9CQUFvQixxQ0FBcUMsc0NBQXNDLEdBQUcscUJBQXFCLHFDQUFxQyxHQUFHLFlBQVksb0JBQW9CLHFDQUFxQyxHQUFHLGlCQUFpQiwwQkFBMEIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLHVCQUF1QixHQUFHLDBCQUEwQixvQkFBb0IsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxpQkFBaUIsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcsbUJBQW1CO0FBQ3B6UjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDOUcrQjs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0VBQW1CO0FBQy9CLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDWTtBQUNEO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsSUFBSTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNENBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EseUJBQXlCLDRDQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0EsMEJBQTBCLHFFQUFxRTtBQUMvRjtBQUNBO0FBQ0EsMEJBQTBCLHFKQUFxSjtBQUMvSztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNyRmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1Q3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUM0QjtBQUNVO0FBQ1o7QUFDTTs7QUFFckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdFQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsb0VBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sUUFBUSw2REFBYTs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRCw4REFBYztBQUNsRTtBQUNBO0FBQ0Esb0JBQW9CLG9FQUFtQjtBQUN2QztBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvRUFBbUI7QUFDdkMsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEtBQUs7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvRUFBbUI7QUFDL0I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RPTUNyZWF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvRE9NQ3JlYXRlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ET01EaXNwbGF5VG9Eb0l0ZW1zLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NyZWF0ZVRvRG9JdGVtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbi5wcm9qZWN0c0NvbnRhaW5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDsgXFxufVxcblxcbi5wcm9qZWN0TGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODEsIDkwLCAxMDcpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn0gXFxuXFxuLm5ld1Byb2plY3RDb250YWluZXIge1xcbiAgICB3aWR0aDogODAlO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ubmV3UHJvamVjdFN1cGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ubWFpbkNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODEsIDkwLCAxMDcpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG59XFxuXFxuLmlucHV0Rm9ybSB7XFxuICAgIGhlaWdodDogMjQwcHg7XFxuICAgIHdpZHRoOiAzNjBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiBjYWxjKDUwdmggLSAxMjBweCk7XFxuICAgIGxlZnQ6IGNhbGMoNTB2dyAtIDE4MHB4KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5mb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLmNyZWF0ZU5ld1Rhc2sge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtRXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHdpZHRoOiAyNTZweDtcXG4gICAgbWFyZ2luOiA0OHB4O1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b0RvSXRlbXMge1xcbiAgICB3aWR0aDogODAlO1xcbn1cXG5cXG4ubWFpbkF0dHJzIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICBtYXJnaW46IDI0cHg7XFxuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMSwgMjAxLCAyMDEpO1xcbiAgICBtYXJnaW46IC0yNHB4IDI0cHggMHB4O1xcblxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxuICAgIFxcbn1cXG5cXG4udG9nZ2xlQ29ybmVycyB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcXG59XFxuXFxuLnByaW9yaXR5Q29ybmVyIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZWxldGVJY29uIHtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLmV4dGVuZEljb24geyBcXG4gICAgY3Vyc29yOiBwb2ludGVyOyBcXG59XFxuXFxuLnJlbW92ZUZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5yZW1vdmVGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFNBQVM7SUFDVCxzRUFBc0U7QUFDMUU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVOztJQUVWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQ0FBa0M7O0lBRWxDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7O0lBRVosNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7SUFFeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOztJQUVaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsOEJBQThCOztJQUU5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7O0lBRXRCLDhCQUE4QjtJQUM5QiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7IFxcbn1cXG5cXG4ucHJvamVjdExpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCA5MCwgMTA3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblxcbi5uZXdQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLm5ld1Byb2plY3RTdXBlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCA5MCwgMTA3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxufVxcblxcbi5pbnB1dEZvcm0ge1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICB3aWR0aDogMzYwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogY2FsYyg1MHZoIC0gMTIwcHgpO1xcbiAgICBsZWZ0OiBjYWxjKDUwdncgLSAxODBweCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5jcmVhdGVOZXdUYXNrIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybUVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB3aWR0aDogMjU2cHg7XFxuICAgIG1hcmdpbjogNDhweDtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9Eb0l0ZW1zIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1haW5BdHRycyB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG4gICAgbWFyZ2luOiAtMjRweCAyNHB4IDBweDtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICBcXG59XFxuXFxuLnRvZ2dsZUNvcm5lcnMge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi5wcmlvcml0eUNvcm5lciB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG59XFxuXFxuLnNob3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGVsZXRlSWNvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5leHRlbmRJY29uIHsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxufVxcblxcbi5yZW1vdmVGb3JtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4ucmVtb3ZlRm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBET01DcmVhdGVGb3JtID0gKChhbGxQcm9qZWN0cykgPT4ge1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5wdXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2lucHV0Rm9ybScpXG5cbiAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Zvcm1Db250YWluZXInKVxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHRpdGxlSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJylcbiAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOidcblxuICAgICAgICAgICAgdGl0bGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKVxuICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUmVxdWlyZWQnKVxuXG4gICAgICAgICAgICB0aXRsZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0Q29udGFpbmVyKVxuXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOidcblxuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJylcblxuICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lcilcblxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dENvbnRhaW5lcicpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKVxuICAgICAgICAgICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonXG5cbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRldGltZS1sb2NhbCcpXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZHVlRGF0ZScpXG4gICAgICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkdWVEYXRlJylcblxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dClcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dENvbnRhaW5lcilcblxuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Q29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonXG5cbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHknKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5JylcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywgJzgnKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJzEgLSA4JylcblxuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KVxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcilcblxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJvamVjdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3RJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dENvbnRhaW5lcicpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3NlbGVjdFByb2plY3QnKVxuICAgICAgICAgICAgICAgIHNlbGVjdFByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9ICdGb3Igd2hpY2ggcHJvamVjdD8nXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0UHJvamVjdExhYmVsKVxuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0UHJvamVjdCcpXG4gICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzZWxlY3RQcm9qZWN0JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3RTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBrZXkpXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RTZWxlY3Rpb24udGV4dENvbnRlbnQgPSBrZXlcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0UHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3Rpb24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZWN0UHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RJbnB1dClcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RJbnB1dENvbnRhaW5lcilcblxuICAgIGlucHV0Rm9ybS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLmFwcGVuZENoaWxkKGlucHV0Rm9ybSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IERPTUNyZWF0ZUZvcm07IiwiaW1wb3J0IERPTURpc3BsYXlUb0RvSXRlbXMgZnJvbSAnLi9ET01EaXNwbGF5VG9Eb0l0ZW1zLmpzJztcblxuY29uc3QgRE9NQ3JlYXRlU2lkZWJhciA9ICgoYWxsUHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXInKVxuXG4gICAgY29uc3Qgd2VsY29tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB3ZWxjb21lLnRleHRDb250ZW50ID0gJ1dlbGNvbWUhJ1xuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2VsY29tZSlcblxuICAgIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0NvbnRhaW5lcicpXG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpbmsnKVxuICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKGtleS5yZXBsYWNlKC8gL2csICcnKSlcbiAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBrZXlcbiAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBET01EaXNwbGF5VG9Eb0l0ZW1zKGFsbFByb2plY3RzW2tleV0sIGFsbFByb2plY3RzKVxuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGluaylcbiAgICB9XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKVxuXG4gICAgY29uc3QgbmV3UHJvamVjdFN1cGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdQcm9qZWN0U3VwZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdFN1cGVyQ29udGFpbmVyJylcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdCcpXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnXG4gICAgbmV3UHJvamVjdFN1cGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RTdXBlckNvbnRhaW5lcilcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykucHJlcGVuZChzaWRlYmFyKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ3JlYXRlU2lkZWJhcjsiLCJpbXBvcnQgZXh0ZW5kZXIwMDEgZnJvbSAnLi9leHRlbmRJY29uLnBuZyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuL2RlbGV0ZUljb24ucG5nJztcbiBcbmNvbnN0IERPTURpc3BsYXlUb0RvSXRlbXMgPSAoKHRvRG9BcnJheSwgYWxsUHJvamVjdHMpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9JdGVtcycpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvSXRlbXMnKSlcbiAgICB9XG4gICAgY29uc3QgdG9Eb0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b0RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9Eb0l0ZW1zJylcbiAgICBmb3IgKGxldCBpIGluIHRvRG9BcnJheSkge1xuICAgICAgICBsZXQgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b0RvSXRlbScpXG5cbiAgICAgICAgbGV0IG1haW5BdHRycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haW5BdHRycy5jbGFzc0xpc3QuYWRkKCdtYWluQXR0cnMnKVxuXG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRvRG9BcnJheVtpXSkge1xuICAgICAgICAgICAgbGV0IGl0ZW1BdHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGl0ZW1BdHRyLmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApXG4gICAgICAgICAgICBpdGVtQXR0ci50ZXh0Q29udGVudCA9IHRvRG9BcnJheVtpXVtrZXldXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5Q29sb3JzID0gWydyZWQnLCdvcmFuZ2VyZWQnLCdnb2xkZW5yb2QnLCdvcmFuZ2UnLCdnb2xkJywnbGlnaHRzZWFncmVlbicsJ3llbGxvd2dyZWVuJywnbGlnaHRncmVlbiddXG4gICAgICAgICAgICAgICAgaXRlbUF0dHIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJpb3JpdHlDb2xvcnNbdG9Eb0FycmF5W2ldW2tleV0gLSAxXVxuICAgICAgICAgICAgICAgIG1haW5BdHRycy5wcmVwZW5kKGl0ZW1BdHRyKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChpdGVtQXR0cilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZHVlRGF0ZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGltZVRpbGxEdWUgPSBEYXRlLnBhcnNlKHRvRG9BcnJheVtpXVsnZHVlRGF0ZSddKSAtIERhdGUubm93KClcbiAgICAgICAgICAgICAgICBpdGVtQXR0ci50ZXh0Q29udGVudCA9IHJlYWRhYmxlVGltZSh0aW1lVGlsbER1ZSlcbiAgICAgICAgICAgICAgICBtYWluQXR0cnMuYXBwZW5kQ2hpbGQoaXRlbUF0dHIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haW5BdHRycy5hcHBlbmRDaGlsZChpdGVtQXR0cilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGV4dGVuZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZXh0ZW5kSWNvbi5zcmMgPSBleHRlbmRlcjAwMVxuICAgICAgICBleHRlbmRJY29uLmNsYXNzTGlzdC5hZGQoJ2V4dGVuZEljb24nKVxuICAgICAgICBleHRlbmRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluQXR0cnMucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHlDb3JuZXInKSlcbiAgICAgICAgICAgIG1haW5BdHRycy5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVDb3JuZXJzJylcbiAgICAgICAgfSlcbiAgICAgICAgbWFpbkF0dHJzLmFwcGVuZENoaWxkKGV4dGVuZEljb24pXG5cbiAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKVxuICAgICAgICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZUljb25cbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJY29uJylcbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5zcGxpY2UodG9Eb0FycmF5LmluZGV4T2YodG9Eb0FycmF5W2ldKSwgMSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUb0RvcycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSlcbiAgICAgICAgICAgIERPTURpc3BsYXlUb0RvSXRlbXModG9Eb0FycmF5LCBhbGxQcm9qZWN0cylcbiAgICAgICAgfSlcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZWxldGVJY29uKVxuXG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKG1haW5BdHRycylcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQoZGV0YWlscylcblxuICAgICAgICB0b0RvSXRlbXMuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pXG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLmFwcGVuZENoaWxkKHRvRG9JdGVtcylcbn0pXG5cbmZ1bmN0aW9uIHJlYWRhYmxlVGltZShtaWxsaVNlYykge1xuICAgIGxldCB0aW1lU3RyID0gJydcbiAgICBpZiAobWlsbGlTZWMvODY0MDAwMDAgPiAzNjUpIHtcbiAgICAgICAgcmV0dXJuICdPdmVyIGEgeWVhcidcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkgPiAwKSB7XG4gICAgICAgICAgICB0aW1lU3RyICs9IGAke01hdGguZmxvb3IobWlsbGlTZWMvODY0MDAwMDApfUQgfCBgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguZmxvb3IoKG1pbGxpU2VjLzg2NDAwMDAwIC0gTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkpICogMjQpID4gMCkge1xuICAgICAgICAgICAgdGltZVN0ciArPSBgJHtNYXRoLmZsb29yKChtaWxsaVNlYy84NjQwMDAwMCAtIE1hdGguZmxvb3IobWlsbGlTZWMvODY0MDAwMDApKSAqIDI0KX1IIHwgYFxuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmZsb29yKCgoKG1pbGxpU2VjLzg2NDAwMDAwIC0gTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkpICogMjQpIC0gTWF0aC5mbG9vcigobWlsbGlTZWMvODY0MDAwMDAgLSBNYXRoLmZsb29yKG1pbGxpU2VjLzg2NDAwMDAwKSkgKiAyNCkpICogNjApID4gMSkge1xuICAgICAgICAgICAgdGltZVN0ciArPSBgJHtNYXRoLmZsb29yKCgoKG1pbGxpU2VjLzg2NDAwMDAwIC0gTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkpICogMjQpIC0gTWF0aC5mbG9vcigobWlsbGlTZWMvODY0MDAwMDAgLSBNYXRoLmZsb29yKG1pbGxpU2VjLzg2NDAwMDAwKSkgKiAyNCkpICogNjApfU1gXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWVTdHJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTURpc3BsYXlUb0RvSXRlbXMiLCJjb25zdCBjcmVhdGVUb0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ3JlYXRlVG9Eb0l0ZW0gZnJvbSAnLi9jcmVhdGVUb0RvSXRlbS5qcyc7XG5pbXBvcnQgRE9NRGlzcGxheVRvRG9JdGVtcyBmcm9tICcuL0RPTURpc3BsYXlUb0RvSXRlbXMuanMnO1xuaW1wb3J0IERPTUNyZWF0ZUZvcm0gZnJvbSAnLi9ET01DcmVhdGVGb3JtLmpzJztcbmltcG9ydCBET01DcmVhdGVTaWRlYmFyIGZyb20gJy4vRE9NQ3JlYXRlU2lkZWJhci5qcyc7XG5cbmxldCBhbGxQcm9qZWN0cyA9IHtcbiAgICBteVRvRG9zOiBbXVxufVxuXG5pZiAobG9jYWxTdG9yYWdlLmFsbFRvRG9zKSB7XG4gICAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUb0Rvcylcbn1cblxuLy8gaW5pdGFsIERPTSBTZXR1cFxuRE9NQ3JlYXRlU2lkZWJhcihhbGxQcm9qZWN0cylcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50JylcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpXG5cbkRPTURpc3BsYXlUb0RvSXRlbXMoYWxsUHJvamVjdHNbJ215VG9Eb3MnXSwgYWxsUHJvamVjdHMpXG5cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJylcbmFkZFRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Rm9ybScpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgRE9NQ3JlYXRlRm9ybShhbGxQcm9qZWN0cylcblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2snKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBjcmVhdGVOZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZU5ld1Rhc2snKVxuICAgICAgICAgICAgY3JlYXRlTmV3VGFzay50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3IFRhc2snXG4gICAgICAgICAgICBjcmVhdGVOZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJykudGl0bGUudmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpLmRlc2NyaXB0aW9uLnZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpLmR1ZURhdGUudmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBNYXRoLmZsb29yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJykucHJpb3JpdHkudmFsdWUpXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpLnNlbGVjdFByb2plY3QudmFsdWVcbiAgICAgICAgICAgICAgICBkdWVEYXRlID0gKG5ldyBEYXRlKGR1ZURhdGUpKS50b0xvY2FsZVN0cmluZygpXG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUucmVwbGFjZSgvIC9nLCAnJykubGVuZ3RoID4gMCAmJiBwcmlvcml0eSA+PSAxICYmIHByaW9yaXR5IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1tzZWxlY3RQcm9qZWN0XS5wdXNoKENyZWF0ZVRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVG9Eb3MnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpXG4gXG4gICAgICAgICAgICAgICAgICAgIERPTURpc3BsYXlUb0RvSXRlbXMoYWxsUHJvamVjdHNbc2VsZWN0UHJvamVjdF0sIGFsbFByb2plY3RzKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUVycm9yJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Zvcm1FcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSAnQSBuYW1lIGFuZCBwcm9wZXIgcHJpb3JpdHkgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykuYXBwZW5kQ2hpbGQoZm9ybUVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dEZvcm0nKS5hcHBlbmRDaGlsZChjcmVhdGVOZXdUYXNrKVxuICAgICAgICB9XG4gICAgfVxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLnByZXBlbmQoYWRkVGFzaylcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RDb250YWluZXInKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdENvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdENvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSdcbiAgICAgICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3RJbnB1dCcpXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCkgXG5cbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RJbnB1dCcpXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dClcblxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKSBcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY3JlYXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCdcbiAgICAgICAgY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpLnByb2plY3RJbnB1dC52YWx1ZV0gPSBbXVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRvRG9zJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGluaycpXG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmsuY2xhc3NMaXN0LmFkZChrZXkucmVwbGFjZSgvIC9nLCAnJykpXG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBrZXlcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NRGlzcGxheVRvRG9JdGVtcyhhbGxQcm9qZWN0c1trZXldLCBhbGxQcm9qZWN0cylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdENvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RTdXBlckNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpXG4gICAgfVxufSlcblxuLy8gUkVNT1ZFIEJUTiBURVNUXG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxucmVtb3ZlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQcm9qZWN0JylcbnJlbW92ZVByb2plY3QudGV4dENvbnRlbnQgPSAnUmVtb3ZlIGEgUHJvamVjdCdcbnJlbW92ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlbW92ZSB0aGUgcHJvamVjdCcpXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZUZvcm1Db250YWluZXInKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlRm9ybUNvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJlbW92ZUZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlRm9ybUNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICByZW1vdmVGb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUZvcm0nKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICByZW1vdmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVMYWJlbCcpXG4gICAgICAgIHJlbW92ZUxhYmVsLnRleHRDb250ZW50ID0gJ1JlbW92ZSB3aGljaCBwcm9qZWN0PydcbiAgICAgICAgcmVtb3ZlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncmVtb3ZlUHJvamVjdCcpXG4gICAgICAgIHJlbW92ZUZvcm0uYXBwZW5kQ2hpbGQocmVtb3ZlTGFiZWwpXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbW92ZVByb2plY3QnKVxuICAgICAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmVtb3ZlUHJvamVjdCcpXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICAgICAgaWYgKGtleSAhPSAnbXlUb0RvcycpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0UmVtb3ZlU2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHByb2plY3RSZW1vdmVTZWxlY3Rpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGtleSlcbiAgICAgICAgICAgIHByb2plY3RSZW1vdmVTZWxlY3Rpb24udGV4dENvbnRlbnQgPSBrZXlcbiAgICAgICAgICAgIHJlbW92ZUlucHV0LmFwcGVuZENoaWxkKHByb2plY3RSZW1vdmVTZWxlY3Rpb24pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVGb3JtLmFwcGVuZENoaWxkKHJlbW92ZUlucHV0KVxuICAgICAgICByZW1vdmVGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUZvcm0pXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ0bicpXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlIFByb2plY3QnXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVNT1ZFIFRIRSBUSElORycpXG4gICAgICAgICAgICBsZXQgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmVGb3JtJykucmVtb3ZlUHJvamVjdC52YWx1ZS5yZXBsYWNlKC8gL2csICcnKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGVtcClcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RlbXB9YCkucmVtb3ZlKClcbiAgICAgICAgICAgIGRlbGV0ZSBhbGxQcm9qZWN0c1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlRm9ybScpLnJlbW92ZVByb2plY3QudmFsdWVdXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVG9Eb3MnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cylcbiAgICAgICAgICAgIERPTURpc3BsYXlUb0RvSXRlbXMoYWxsUHJvamVjdHNbJ215VG9Eb3MnXSwgYWxsUHJvamVjdHMpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlRm9ybUNvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIHJlbW92ZUZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bilcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLmFwcGVuZENoaWxkKHJlbW92ZUZvcm1Db250YWluZXIpXG4gICAgfVxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==