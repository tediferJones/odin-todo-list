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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n    margin: 0;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidebar {\n    background-color: purple;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n}\n\n.projectsContainer {\n    font-size: 24px;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    gap: 24px; \n}\n\n.projectLink {\n    cursor: pointer;\n}\n\n.newProject {\n    height: 48px;\n    border-radius: 24px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: rgb(81, 90, 107);\n    color: white;\n    font-weight: bold;\n} \n\n.newProjectContainer {\n    width: 80%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.mainContent {\n    background-color: rgb(81, 90, 107);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n}\n\n.inputForm {\n    height: 240px;\n    width: 360px;\n\n    background-color: whitesmoke;\n    border-radius: 12px;\n    border-style: solid;\n    border-width: 4px;\n\n    position: fixed;\n    top: calc(50vh - 120px);\n    left: calc(50vw - 180px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.formContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.createNewTask {\n    height: 32px;\n    outline: none;\n    border: none;\n    background-color: purple;\n    color: white;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.formError {\n    color: red;\n    font-weight: bolder;\n    display: flex;\n    justify-content: center;\n}\n\n.addTask {\n    height: 64px;\n    width: 256px;\n    margin: 48px;\n\n    color: white;\n    font-size: 24px;\n    font-weight: bold;\n    background-color: purple;\n    border-radius: 32px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.toDoItems {\n    width: 80%;\n}\n\n.mainAttrs {\n    height: 64px;\n    margin: 24px;\n    padding: 0px 24px;\n    background-color: whitesmoke;\n    border-radius: 8px;\n    font-size: 24px;\n    font-weight: bold;\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n}\n\n.priority {\n    margin-left: -24px;\n    height: 64px;\n    width: 64px;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.details {\n    background-color: rgb(201, 201, 201);\n    margin: -24px 24px 0px;\n\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    \n}\n\n.toggleCorners {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n.priorityCorner {\n    border-bottom-left-radius: 0px;\n}\n\n.shown {\n    display: flex;\n    justify-content: space-between;\n}\n\n.deleteIcon {\n    padding-right: 30px;\n}\n\n.description {\n    padding: 12px;\n}\n\n.extendIcon { \n    cursor: pointer; \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,SAAS;IACT,sEAAsE;AAC1E;;AAEA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,UAAU;;IAEV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kCAAkC;;IAElC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,4BAA4B;IAC5B,mBAAmB;IACnB,mBAAmB;IACnB,iBAAiB;;IAEjB,eAAe;IACf,uBAAuB;IACvB,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;;IAEZ,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,wBAAwB;IACxB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,4BAA4B;IAC5B,kBAAkB;IAClB,eAAe;IACf,iBAAiB;;IAEjB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,2BAA2B;IAC3B,8BAA8B;;IAE9B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oCAAoC;IACpC,sBAAsB;;IAEtB,8BAA8B;IAC9B,+BAA+B;;AAEnC;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;AACnC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["html,\nbody {\n    margin: 0;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n#content {\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\n.hidden {\n    display: none;\n}\n\n.sidebar {\n    background-color: purple;\n    color: white;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 24px;\n}\n\n.projectsContainer {\n    font-size: 24px;\n    font-weight: bold;\n    display: flex;\n    flex-direction: column;\n    gap: 24px; \n}\n\n.projectLink {\n    cursor: pointer;\n}\n\n.newProject {\n    height: 48px;\n    border-radius: 24px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    background-color: rgb(81, 90, 107);\n    color: white;\n    font-weight: bold;\n} \n\n.newProjectContainer {\n    width: 80%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.mainContent {\n    background-color: rgb(81, 90, 107);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n}\n\n.inputForm {\n    height: 240px;\n    width: 360px;\n\n    background-color: whitesmoke;\n    border-radius: 12px;\n    border-style: solid;\n    border-width: 4px;\n\n    position: fixed;\n    top: calc(50vh - 120px);\n    left: calc(50vw - 180px);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.formContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\n.createNewTask {\n    height: 32px;\n    outline: none;\n    border: none;\n    background-color: purple;\n    color: white;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n.formError {\n    color: red;\n    font-weight: bolder;\n    display: flex;\n    justify-content: center;\n}\n\n.addTask {\n    height: 64px;\n    width: 256px;\n    margin: 48px;\n\n    color: white;\n    font-size: 24px;\n    font-weight: bold;\n    background-color: purple;\n    border-radius: 32px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n}\n\n.toDoItems {\n    width: 80%;\n}\n\n.mainAttrs {\n    height: 64px;\n    margin: 24px;\n    padding: 0px 24px;\n    background-color: whitesmoke;\n    border-radius: 8px;\n    font-size: 24px;\n    font-weight: bold;\n    \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 24px;\n}\n\n.priority {\n    margin-left: -24px;\n    height: 64px;\n    width: 64px;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.details {\n    background-color: rgb(201, 201, 201);\n    margin: -24px 24px 0px;\n\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n    \n}\n\n.toggleCorners {\n    border-bottom-left-radius: 0px;\n    border-bottom-right-radius: 0px;\n}\n\n.priorityCorner {\n    border-bottom-left-radius: 0px;\n}\n\n.shown {\n    display: flex;\n    justify-content: space-between;\n}\n\n.deleteIcon {\n    padding-right: 30px;\n}\n\n.description {\n    padding: 12px;\n}\n\n.extendIcon { \n    cursor: pointer; \n}"],"sourceRoot":""}]);
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
                projectLink.textContent = key
                projectLink.addEventListener('click', () => {
                    ;(0,_DOMDisplayToDoItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(allProjects[key], allProjects)
                })
                document.querySelector('.projectsContainer').appendChild(projectLink)
            }

            document.querySelector('.newProjectContainer').remove()
        })
        newProjectContainer.appendChild(createProject)

        document.querySelector('.sidebar').appendChild(newProjectContainer)
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
            let projectRemoveSelection = document.createElement('option')
            projectRemoveSelection.setAttribute('value', key)
            projectRemoveSelection.textContent = key
            removeInput.appendChild(projectRemoveSelection)
        }
        removeForm.appendChild(removeInput)
        removeFormContainer.appendChild(removeForm)

        const removeProjectBtn = document.createElement('button')
        removeProjectBtn.classList.add('removeProjectBtn')
        removeProjectBtn.textContent = 'Remove Project'
        removeProjectBtn.addEventListener('click', () => {
            console.log('REMOVE THE THING')
            console.log(document.querySelector('.removeForm').removeProject.value)
            delete allProjects[document.querySelector('.removeForm').removeProject.value]
        })
        removeFormContainer.appendChild(removeProjectBtn)

        document.querySelector('.sidebar').appendChild(removeFormContainer)
    }
})
document.querySelector('.sidebar').appendChild(removeProject)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsNkRBQWE7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvREFBb0QsOERBQWM7QUFDbEU7QUFDQTtBQUNBLG9CQUFvQixvRUFBbUI7QUFDdkM7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9FQUFtQjtBQUN2QyxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvRE9NQ3JlYXRlRm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ET01DcmVhdGVTaWRlYmFyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RPTURpc3BsYXlUb0RvSXRlbXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY3JlYXRlVG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjRweDtcXG59XFxuXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyNHB4OyBcXG59XFxuXFxuLnByb2plY3RMaW5rIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGhlaWdodDogNDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgOTAsIDEwNyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufSBcXG5cXG4ubmV3UHJvamVjdENvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA4MCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5tYWluQ29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgOTAsIDEwNyk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbn1cXG5cXG4uaW5wdXRGb3JtIHtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgd2lkdGg6IDM2MHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDRweDtcXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IGNhbGMoNTB2aCAtIDEyMHB4KTtcXG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gMTgwcHgpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZvcm1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG4uY3JlYXRlTmV3VGFzayB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm1FcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkVGFzayB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDI1NnB4O1xcbiAgICBtYXJnaW46IDQ4cHg7XFxuXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvRG9JdGVtcyB7XFxuICAgIHdpZHRoOiA4MCU7XFxufVxcblxcbi5tYWluQXR0cnMge1xcbiAgICBoZWlnaHQ6IDY0cHg7XFxuICAgIG1hcmdpbjogMjRweDtcXG4gICAgcGFkZGluZzogMHB4IDI0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBtYXJnaW4tbGVmdDogLTI0cHg7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgd2lkdGg6IDY0cHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAxLCAyMDEsIDIwMSk7XFxuICAgIG1hcmdpbjogLTI0cHggMjRweCAwcHg7XFxuXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgXFxufVxcblxcbi50b2dnbGVDb3JuZXJzIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHlDb3JuZXIge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi5zaG93biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRlbGV0ZUljb24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4uZXh0ZW5kSWNvbiB7IFxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFNBQVM7SUFDVCxzRUFBc0U7QUFDMUU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTs7SUFFWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVOztJQUVWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQ0FBa0M7O0lBRWxDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7O0lBRVosNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsaUJBQWlCOztJQUVqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7SUFFeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOztJQUVaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsOEJBQThCOztJQUU5QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7O0lBRXRCLDhCQUE4QjtJQUM5QiwrQkFBK0I7O0FBRW5DOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdBcmlhbCBOYXJyb3cgQm9sZCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4ucHJvamVjdHNDb250YWluZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI0cHg7IFxcbn1cXG5cXG4ucHJvamVjdExpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiA0OHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCA5MCwgMTA3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59IFxcblxcbi5uZXdQcm9qZWN0Q29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDgwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTJweDtcXG59XFxuXFxuLm1haW5Db250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCA5MCwgMTA3KTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxufVxcblxcbi5pbnB1dEZvcm0ge1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICB3aWR0aDogMzYwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogNHB4O1xcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogY2FsYyg1MHZoIC0gMTIwcHgpO1xcbiAgICBsZWZ0OiBjYWxjKDUwdncgLSAxODBweCk7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uZm9ybUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5jcmVhdGVOZXdUYXNrIHtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybUVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB3aWR0aDogMjU2cHg7XFxuICAgIG1hcmdpbjogNDhweDtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9Eb0l0ZW1zIHtcXG4gICAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLm1haW5BdHRycyB7XFxuICAgIGhlaWdodDogNjRweDtcXG4gICAgbWFyZ2luOiAyNHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI0cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjRweDtcXG4gICAgaGVpZ2h0OiA2NHB4O1xcbiAgICB3aWR0aDogNjRweDtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDEsIDIwMSwgMjAxKTtcXG4gICAgbWFyZ2luOiAtMjRweCAyNHB4IDBweDtcXG5cXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICBcXG59XFxuXFxuLnRvZ2dsZUNvcm5lcnMge1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi5wcmlvcml0eUNvcm5lciB7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcXG59XFxuXFxuLnNob3duIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZGVsZXRlSWNvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5leHRlbmRJY29uIHsgXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgRE9NQ3JlYXRlRm9ybSA9ICgoYWxsUHJvamVjdHMpID0+IHtcbiAgICBjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGlucHV0Rm9ybS5jbGFzc0xpc3QuYWRkKCdpbnB1dEZvcm0nKVxuXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtQ29udGFpbmVyJylcblxuICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICB0aXRsZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Q29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpXG4gICAgICAgICAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonXG5cbiAgICAgICAgICAgIHRpdGxlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJylcbiAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpXG4gICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1JlcXVpcmVkJylcblxuICAgICAgICAgICAgdGl0bGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dENvbnRhaW5lcilcblxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0Q29udGFpbmVyJylcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonXG5cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJylcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpXG5cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dClcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJylcbiAgICAgICAgICAgICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlIERhdGU6J1xuXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZXRpbWUtbG9jYWwnKVxuICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZURhdGUnKVxuICAgICAgICAgICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlRGF0ZScpXG5cbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXRDb250YWluZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dENvbnRhaW5lcicpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xuXG4gICAgICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5JylcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsICc4JylcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgJzEnKVxuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICcxIC0gOCcpXG5cbiAgICAgICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dClcblxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpXG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdFByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBzZWxlY3RQcm9qZWN0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXRDb250YWluZXInKVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0UHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICAgICAgICAgIHNlbGVjdFByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3RQcm9qZWN0JylcbiAgICAgICAgICAgICAgICBzZWxlY3RQcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnRm9yIHdoaWNoIHByb2plY3Q/J1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgc2VsZWN0UHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdFByb2plY3RMYWJlbClcblxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICAgICAgICAgIHNlbGVjdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdFByb2plY3QnKVxuICAgICAgICAgICAgICAgIHNlbGVjdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VsZWN0UHJvamVjdCcpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywga2V5KVxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0U2VsZWN0aW9uLnRleHRDb250ZW50ID0ga2V5XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdFByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHNlbGVjdFByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0SW5wdXQpXG5cbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3RQcm9qZWN0SW5wdXRDb250YWluZXIpXG5cbiAgICBpbnB1dEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcilcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKS5hcHBlbmRDaGlsZChpbnB1dEZvcm0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCBET01DcmVhdGVGb3JtOyIsImltcG9ydCBET01EaXNwbGF5VG9Eb0l0ZW1zIGZyb20gJy4vRE9NRGlzcGxheVRvRG9JdGVtcy5qcyc7XG5cbmNvbnN0IERPTUNyZWF0ZVNpZGViYXIgPSAoKGFsbFByb2plY3RzKSA9PiB7XG4gICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcblxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgd2VsY29tZS50ZXh0Q29udGVudCA9ICdXZWxjb21lISdcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHdlbGNvbWUpXG5cbiAgICBjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNDb250YWluZXInKVxuXG4gICAgZm9yIChsZXQga2V5IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RMaW5rLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMaW5rJylcbiAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBrZXlcbiAgICAgICAgcHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBET01EaXNwbGF5VG9Eb0l0ZW1zKGFsbFByb2plY3RzW2tleV0sIGFsbFByb2plY3RzKVxuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGluaylcbiAgICB9XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKVxuXG4gICAgY29uc3QgbmV3UHJvamVjdFN1cGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdQcm9qZWN0U3VwZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdFN1cGVyQ29udGFpbmVyJylcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdCcpXG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9ICdBZGQgTmV3IFByb2plY3QnXG4gICAgbmV3UHJvamVjdFN1cGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RTdXBlckNvbnRhaW5lcilcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykucHJlcGVuZChzaWRlYmFyKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRE9NQ3JlYXRlU2lkZWJhcjsiLCJpbXBvcnQgZXh0ZW5kZXIwMDEgZnJvbSAnLi9leHRlbmRJY29uLnBuZyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuL2RlbGV0ZUljb24ucG5nJztcbiBcbmNvbnN0IERPTURpc3BsYXlUb0RvSXRlbXMgPSAoKHRvRG9BcnJheSwgYWxsUHJvamVjdHMpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9JdGVtcycpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvSXRlbXMnKSlcbiAgICB9XG4gICAgY29uc3QgdG9Eb0l0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b0RvSXRlbXMuY2xhc3NMaXN0LmFkZCgndG9Eb0l0ZW1zJylcbiAgICBmb3IgKGxldCBpIGluIHRvRG9BcnJheSkge1xuICAgICAgICBsZXQgdG9Eb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b0RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b0RvSXRlbScpXG5cbiAgICAgICAgbGV0IG1haW5BdHRycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haW5BdHRycy5jbGFzc0xpc3QuYWRkKCdtYWluQXR0cnMnKVxuXG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJylcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRvRG9BcnJheVtpXSkge1xuICAgICAgICAgICAgbGV0IGl0ZW1BdHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGl0ZW1BdHRyLmNsYXNzTGlzdC5hZGQoYCR7a2V5fWApXG4gICAgICAgICAgICBpdGVtQXR0ci50ZXh0Q29udGVudCA9IHRvRG9BcnJheVtpXVtrZXldXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByaW9yaXR5Q29sb3JzID0gWydyZWQnLCdvcmFuZ2VyZWQnLCdnb2xkZW5yb2QnLCdvcmFuZ2UnLCdnb2xkJywnbGlnaHRzZWFncmVlbicsJ3llbGxvd2dyZWVuJywnbGlnaHRncmVlbiddXG4gICAgICAgICAgICAgICAgaXRlbUF0dHIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJpb3JpdHlDb2xvcnNbdG9Eb0FycmF5W2ldW2tleV0gLSAxXVxuICAgICAgICAgICAgICAgIG1haW5BdHRycy5wcmVwZW5kKGl0ZW1BdHRyKVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdkZXNjcmlwdGlvbicpIHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChpdGVtQXR0cilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnZHVlRGF0ZScpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGltZVRpbGxEdWUgPSBEYXRlLnBhcnNlKHRvRG9BcnJheVtpXVsnZHVlRGF0ZSddKSAtIERhdGUubm93KClcbiAgICAgICAgICAgICAgICBpdGVtQXR0ci50ZXh0Q29udGVudCA9IHJlYWRhYmxlVGltZSh0aW1lVGlsbER1ZSlcbiAgICAgICAgICAgICAgICBtYWluQXR0cnMuYXBwZW5kQ2hpbGQoaXRlbUF0dHIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haW5BdHRycy5hcHBlbmRDaGlsZChpdGVtQXR0cilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGV4dGVuZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgZXh0ZW5kSWNvbi5zcmMgPSBleHRlbmRlcjAwMVxuICAgICAgICBleHRlbmRJY29uLmNsYXNzTGlzdC5hZGQoJ2V4dGVuZEljb24nKVxuICAgICAgICBleHRlbmRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYWluQXR0cnMucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykuY2xhc3NMaXN0LnRvZ2dsZSgncHJpb3JpdHlDb3JuZXInKSlcbiAgICAgICAgICAgIG1haW5BdHRycy5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVDb3JuZXJzJylcbiAgICAgICAgfSlcbiAgICAgICAgbWFpbkF0dHJzLmFwcGVuZENoaWxkKGV4dGVuZEljb24pXG5cbiAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKVxuICAgICAgICBkZWxldGVJY29uLnNyYyA9IERlbGV0ZUljb25cbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVJY29uJylcbiAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRvRG9BcnJheS5zcGxpY2UodG9Eb0FycmF5LmluZGV4T2YodG9Eb0FycmF5W2ldKSwgMSlcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUb0RvcycsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSlcbiAgICAgICAgICAgIERPTURpc3BsYXlUb0RvSXRlbXModG9Eb0FycmF5LCBhbGxQcm9qZWN0cylcbiAgICAgICAgfSlcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZWxldGVJY29uKVxuXG4gICAgICAgIHRvRG9JdGVtLmFwcGVuZENoaWxkKG1haW5BdHRycylcbiAgICAgICAgdG9Eb0l0ZW0uYXBwZW5kQ2hpbGQoZGV0YWlscylcblxuICAgICAgICB0b0RvSXRlbXMuYXBwZW5kQ2hpbGQodG9Eb0l0ZW0pXG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLmFwcGVuZENoaWxkKHRvRG9JdGVtcylcbn0pXG5cbmZ1bmN0aW9uIHJlYWRhYmxlVGltZShtaWxsaVNlYykge1xuICAgIGxldCB0aW1lU3RyID0gJydcbiAgICBpZiAobWlsbGlTZWMvODY0MDAwMDAgPiAzNjUpIHtcbiAgICAgICAgcmV0dXJuICdPdmVyIGEgeWVhcidcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkgPiAwKSB7XG4gICAgICAgICAgICB0aW1lU3RyICs9IGAke01hdGguZmxvb3IobWlsbGlTZWMvODY0MDAwMDApfUQgfCBgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguZmxvb3IoKG1pbGxpU2VjLzg2NDAwMDAwIC0gTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkpICogMjQpID4gMCkge1xuICAgICAgICAgICAgdGltZVN0ciArPSBgJHtNYXRoLmZsb29yKChtaWxsaVNlYy84NjQwMDAwMCAtIE1hdGguZmxvb3IobWlsbGlTZWMvODY0MDAwMDApKSAqIDI0KX1IIHwgYFxuICAgICAgICB9XG4gICAgICAgIGlmIChNYXRoLmZsb29yKCgoKG1pbGxpU2VjLzg2NDAwMDAwIC0gTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkpICogMjQpIC0gTWF0aC5mbG9vcigobWlsbGlTZWMvODY0MDAwMDAgLSBNYXRoLmZsb29yKG1pbGxpU2VjLzg2NDAwMDAwKSkgKiAyNCkpICogNjApID4gMSkge1xuICAgICAgICAgICAgdGltZVN0ciArPSBgJHtNYXRoLmZsb29yKCgoKG1pbGxpU2VjLzg2NDAwMDAwIC0gTWF0aC5mbG9vcihtaWxsaVNlYy84NjQwMDAwMCkpICogMjQpIC0gTWF0aC5mbG9vcigobWlsbGlTZWMvODY0MDAwMDAgLSBNYXRoLmZsb29yKG1pbGxpU2VjLzg2NDAwMDAwKSkgKiAyNCkpICogNjApfU1gXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbWVTdHJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERPTURpc3BsYXlUb0RvSXRlbXMiLCJjb25zdCBjcmVhdGVUb0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvRG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgQ3JlYXRlVG9Eb0l0ZW0gZnJvbSAnLi9jcmVhdGVUb0RvSXRlbS5qcyc7XG5pbXBvcnQgRE9NRGlzcGxheVRvRG9JdGVtcyBmcm9tICcuL0RPTURpc3BsYXlUb0RvSXRlbXMuanMnO1xuaW1wb3J0IERPTUNyZWF0ZUZvcm0gZnJvbSAnLi9ET01DcmVhdGVGb3JtLmpzJztcbmltcG9ydCBET01DcmVhdGVTaWRlYmFyIGZyb20gJy4vRE9NQ3JlYXRlU2lkZWJhci5qcyc7XG5cbmxldCBhbGxQcm9qZWN0cyA9IHtcbiAgICBteVRvRG9zOiBbXVxufVxuXG5pZiAobG9jYWxTdG9yYWdlLmFsbFRvRG9zKSB7XG4gICAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUb0Rvcylcbn1cblxuLy8gaW5pdGFsIERPTSBTZXR1cFxuRE9NQ3JlYXRlU2lkZWJhcihhbGxQcm9qZWN0cylcbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbm1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW5Db250ZW50JylcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpXG5cbkRPTURpc3BsYXlUb0RvSXRlbXMoYWxsUHJvamVjdHNbJ215VG9Eb3MnXSwgYWxsUHJvamVjdHMpXG5cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuYWRkVGFzay5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrJylcbmFkZFRhc2sudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Rm9ybScpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgRE9NQ3JlYXRlRm9ybShhbGxQcm9qZWN0cylcblxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZU5ld1Rhc2snKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgY3JlYXRlTmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgICAgICBjcmVhdGVOZXdUYXNrLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZU5ld1Rhc2snKVxuICAgICAgICAgICAgY3JlYXRlTmV3VGFzay50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3IFRhc2snXG4gICAgICAgICAgICBjcmVhdGVOZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJykudGl0bGUudmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpLmRlc2NyaXB0aW9uLnZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpLmR1ZURhdGUudmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSBNYXRoLmZsb29yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtQ29udGFpbmVyJykucHJpb3JpdHkudmFsdWUpXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUNvbnRhaW5lcicpLnNlbGVjdFByb2plY3QudmFsdWVcbiAgICAgICAgICAgICAgICBkdWVEYXRlID0gKG5ldyBEYXRlKGR1ZURhdGUpKS50b0xvY2FsZVN0cmluZygpXG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUucmVwbGFjZSgvIC9nLCAnJykubGVuZ3RoID4gMCAmJiBwcmlvcml0eSA+PSAxICYmIHByaW9yaXR5IDwgOSkge1xuICAgICAgICAgICAgICAgICAgICBhbGxQcm9qZWN0c1tzZWxlY3RQcm9qZWN0XS5wdXNoKENyZWF0ZVRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpKVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVG9Eb3MnLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpXG4gXG4gICAgICAgICAgICAgICAgICAgIERPTURpc3BsYXlUb0RvSXRlbXMoYWxsUHJvamVjdHNbc2VsZWN0UHJvamVjdF0sIGFsbFByb2plY3RzKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykucmVzZXQoKVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykucmVtb3ZlKClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybUVycm9yJykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUVycm9yLmNsYXNzTGlzdC5hZGQoJ2Zvcm1FcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSAnQSBuYW1lIGFuZCBwcm9wZXIgcHJpb3JpdHkgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRGb3JtJykuYXBwZW5kQ2hpbGQoZm9ybUVycm9yKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dEZvcm0nKS5hcHBlbmRDaGlsZChjcmVhdGVOZXdUYXNrKVxuICAgICAgICB9XG4gICAgfVxufSlcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLnByZXBlbmQoYWRkVGFzaylcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RDb250YWluZXInKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdENvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdENvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgncHJvamVjdEZvcm0nKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSdcbiAgICAgICAgcHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3RJbnB1dCcpXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCkgXG5cbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0SW5wdXQnKVxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Byb2plY3RJbnB1dCcpXG4gICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dClcblxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RGb3JtKSBcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY3JlYXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCdcbiAgICAgICAgY3JlYXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpLnByb2plY3RJbnB1dC52YWx1ZV0gPSBbXVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRvRG9zJywgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNDb250YWluZXInKS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGluaycpXG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmsudGV4dENvbnRlbnQgPSBrZXlcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRE9NRGlzcGxheVRvRG9JdGVtcyhhbGxQcm9qZWN0c1trZXldLCBhbGxQcm9qZWN0cylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0c0NvbnRhaW5lcicpLmFwcGVuZENoaWxkKHByb2plY3RMaW5rKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdENvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdClcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpXG4gICAgfVxufSlcblxuLy8gUkVNT1ZFIEJUTiBURVNUXG5cbmNvbnN0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxucmVtb3ZlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQcm9qZWN0JylcbnJlbW92ZVByb2plY3QudGV4dENvbnRlbnQgPSAnUmVtb3ZlIGEgUHJvamVjdCdcbnJlbW92ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JlbW92ZSB0aGUgcHJvamVjdCcpXG5cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZUZvcm1Db250YWluZXInKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlRm9ybUNvbnRhaW5lcicpLnJlbW92ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJlbW92ZUZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlRm9ybUNvbnRhaW5lcicpXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICByZW1vdmVGb3JtLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZUZvcm0nKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICByZW1vdmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVMYWJlbCcpXG4gICAgICAgIHJlbW92ZUxhYmVsLnRleHRDb250ZW50ID0gJ1JlbW92ZSB3aGljaCBwcm9qZWN0PydcbiAgICAgICAgcmVtb3ZlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncmVtb3ZlUHJvamVjdCcpXG4gICAgICAgIHJlbW92ZUZvcm0uYXBwZW5kQ2hpbGQocmVtb3ZlTGFiZWwpXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JlbW92ZVByb2plY3QnKVxuICAgICAgICByZW1vdmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncmVtb3ZlUHJvamVjdCcpXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhbGxQcm9qZWN0cykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RSZW1vdmVTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgcHJvamVjdFJlbW92ZVNlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywga2V5KVxuICAgICAgICAgICAgcHJvamVjdFJlbW92ZVNlbGVjdGlvbi50ZXh0Q29udGVudCA9IGtleVxuICAgICAgICAgICAgcmVtb3ZlSW5wdXQuYXBwZW5kQ2hpbGQocHJvamVjdFJlbW92ZVNlbGVjdGlvbilcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVGb3JtLmFwcGVuZENoaWxkKHJlbW92ZUlucHV0KVxuICAgICAgICByZW1vdmVGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUZvcm0pXG5cbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ0bicpXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlIFByb2plY3QnXG4gICAgICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUkVNT1ZFIFRIRSBUSElORycpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlRm9ybScpLnJlbW92ZVByb2plY3QudmFsdWUpXG4gICAgICAgICAgICBkZWxldGUgYWxsUHJvamVjdHNbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbW92ZUZvcm0nKS5yZW1vdmVQcm9qZWN0LnZhbHVlXVxuICAgICAgICB9KVxuICAgICAgICByZW1vdmVGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKS5hcHBlbmRDaGlsZChyZW1vdmVGb3JtQ29udGFpbmVyKVxuICAgIH1cbn0pXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3QpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=