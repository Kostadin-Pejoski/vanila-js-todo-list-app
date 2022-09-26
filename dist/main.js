/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/file.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/file.css ***!
  \************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* importing font */\r\n\r\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n/* RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n*,*::before,*::after{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n  }\r\n\r\nbody{\r\n    max-width: 100vw;\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;\r\n    font-family: 'Kdam Thmor Pro', sans-serif;\r\n    grid-template-rows: 1fr 5fr;\r\n    \r\n}\r\n\r\n.header{\r\n    grid-column: 1/3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-row:1/2;\r\n    background-color: #1d3557;\r\n    color:#f1faee;\r\n}\r\n\r\n.header  h1{\r\n    font-size: 1.65em;\r\n    font-weight: 1000;\r\n\r\n}\r\n\r\n#wraper{\r\n    display: flex;\r\n    flex-direction:column;\r\n    gap:1em;\r\n}\r\n\r\n.sidebar{\r\n    background-color:#e63946;\r\n    color:#f1faee;\r\n\r\n}\r\n\r\n.creationEl, .projects{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap:1em;\r\n    border-bottom:1px solid white;\r\n    max-height: 20vh;\r\n    padding: 2em 0;\r\n}\r\n\r\n.projects{\r\n    border: none;\r\n    gap:1.25em;\r\n    font-size:1.4em;\r\n    font-weight: 700;\r\n    min-height: 80vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.project{\r\n    display: flex;\r\n    gap:1em;\r\n    flex-direction: row;\r\n}\r\n\r\n.projects > *{\r\n    cursor: pointer;\r\n}\r\n\r\n.creationEl > *{\r\n    cursor: pointer;\r\n}\r\n\r\n.main{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.grid{\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    gap:1em;\r\n    padding:2.2em;\r\n}\r\n\r\n.red{\r\n    background-color: #C60F0F;\r\n    color:white;\r\n}\r\n\r\n.green{\r\n    background-color: #63D471;\r\n}\r\n\r\n.yellow{\r\n    background-color: #eee708;\r\n}\r\n\r\n.todo{\r\n    border:4px solid black;\r\n    padding:1.1em;\r\n    border-radius: 1em;\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    grid-template-rows: 1fr,3fr,1fr;\r\n    background-color: #ACC8E5;\r\n    color:#112A46;\r\n    position: relative;\r\n    min-height: 70%;\r\n    justify-items: end;\r\n    min-width: fit-content;\r\n}\r\n\r\n.todoTitle{\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n    font-size:1.4em;\r\n    font-weight:bold;\r\n    justify-self: center;\r\n}\r\n\r\n.todoText{\r\n    grid-column: 1/4;\r\n    grid-row: 2/3;\r\n    margin-bottom: 1em;\r\n    justify-self: start;\r\n}\r\n\r\n.todoPriorty{\r\n    display: flex;\r\n    border:1px solid black;\r\n    grid-column:3/4;\r\n    grid-row:3/4;\r\n    flex-direction: row;\r\n}\r\n\r\n.closeBtn{\r\n    background-color:red;\r\n    padding:0.2em;\r\n    border:2px solid black;\r\n    color:white;\r\n    grid-column: 3/4;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    height: 1.5em;\r\n    width: 1.5em;\r\n    /* position: absolute; */\r\n    /* bottom:1em; */\r\n    /* left: 3em; */\r\n    margin-left:2em;\r\n    margin-bottom:1em;\r\n}\r\n\r\n.priortyEl{\r\n    padding:0.25em;\r\n    color:black;\r\n    border-right: 1px solid black;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.currentProjectTitle{\r\n    grid-column: 2/3;\r\n    grid-row:1/2;\r\n    font-size:2em;\r\n    margin-top:0.75em;\r\n    margin-bottom:0.75em;\r\n}\r\n\r\n.form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap:0.4em;\r\n    margin:1em;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/file.css"],"names":[],"mappings":"AAAA,mBAAmB;;AAGnB;;;CAGC;AACD,UAAU;AACV;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA;IACI,UAAU;IACV,QAAQ;IACR,sBAAsB;AAC1B;;AAEA;IACI,aAAa,EAAE,kCAAkC;EACnD;;AAEF;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,8BAA8B;IAC9B,yCAAyC;IACzC,2BAA2B;;AAE/B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;;AAErB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,OAAO;AACX;;AAEA;IACI,wBAAwB;IACxB,aAAa;;AAEjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,OAAO;IACP,6BAA6B;IAC7B,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,OAAO;IACP,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,oCAAoC;IACpC,+BAA+B;IAC/B,yBAAyB;IACzB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,wBAAwB;IACxB,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,6BAA6B;IAC7B,eAAe;;AAEnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,UAAU;AACd","sourcesContent":["/* importing font */\r\n@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');\r\n\r\n/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n/* RESET */\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n*,*::before,*::after{\r\n    padding: 0;\r\n    margin:0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n  }\r\n\r\nbody{\r\n    max-width: 100vw;\r\n    min-height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;\r\n    font-family: 'Kdam Thmor Pro', sans-serif;\r\n    grid-template-rows: 1fr 5fr;\r\n    \r\n}\r\n\r\n.header{\r\n    grid-column: 1/3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    grid-row:1/2;\r\n    background-color: #1d3557;\r\n    color:#f1faee;\r\n}\r\n\r\n.header  h1{\r\n    font-size: 1.65em;\r\n    font-weight: 1000;\r\n\r\n}\r\n\r\n#wraper{\r\n    display: flex;\r\n    flex-direction:column;\r\n    gap:1em;\r\n}\r\n\r\n.sidebar{\r\n    background-color:#e63946;\r\n    color:#f1faee;\r\n\r\n}\r\n\r\n.creationEl, .projects{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap:1em;\r\n    border-bottom:1px solid white;\r\n    max-height: 20vh;\r\n    padding: 2em 0;\r\n}\r\n\r\n.projects{\r\n    border: none;\r\n    gap:1.25em;\r\n    font-size:1.4em;\r\n    font-weight: 700;\r\n    min-height: 80vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.project{\r\n    display: flex;\r\n    gap:1em;\r\n    flex-direction: row;\r\n}\r\n\r\n.projects > *{\r\n    cursor: pointer;\r\n}\r\n\r\n.creationEl > *{\r\n    cursor: pointer;\r\n}\r\n\r\n.main{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.grid{\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    gap:1em;\r\n    padding:2.2em;\r\n}\r\n\r\n.red{\r\n    background-color: #C60F0F;\r\n    color:white;\r\n}\r\n\r\n.green{\r\n    background-color: #63D471;\r\n}\r\n\r\n.yellow{\r\n    background-color: #eee708;\r\n}\r\n\r\n.todo{\r\n    border:4px solid black;\r\n    padding:1.1em;\r\n    border-radius: 1em;\r\n    display: grid;\r\n    grid-template-columns: repeat(3,1fr);\r\n    grid-template-rows: 1fr,3fr,1fr;\r\n    background-color: #ACC8E5;\r\n    color:#112A46;\r\n    position: relative;\r\n    min-height: 70%;\r\n    justify-items: end;\r\n    min-width: fit-content;\r\n}\r\n\r\n.todoTitle{\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n    font-size:1.4em;\r\n    font-weight:bold;\r\n    justify-self: center;\r\n}\r\n\r\n.todoText{\r\n    grid-column: 1/4;\r\n    grid-row: 2/3;\r\n    margin-bottom: 1em;\r\n    justify-self: start;\r\n}\r\n\r\n.todoPriorty{\r\n    display: flex;\r\n    border:1px solid black;\r\n    grid-column:3/4;\r\n    grid-row:3/4;\r\n    flex-direction: row;\r\n}\r\n\r\n.closeBtn{\r\n    background-color:red;\r\n    padding:0.2em;\r\n    border:2px solid black;\r\n    color:white;\r\n    grid-column: 3/4;\r\n    grid-row: 1/2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    border-radius: 50%;\r\n    height: 1.5em;\r\n    width: 1.5em;\r\n    /* position: absolute; */\r\n    /* bottom:1em; */\r\n    /* left: 3em; */\r\n    margin-left:2em;\r\n    margin-bottom:1em;\r\n}\r\n\r\n.priortyEl{\r\n    padding:0.25em;\r\n    color:black;\r\n    border-right: 1px solid black;\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\n.currentProjectTitle{\r\n    grid-column: 2/3;\r\n    grid-row:1/2;\r\n    font-size:2em;\r\n    margin-top:0.75em;\r\n    margin-bottom:0.75em;\r\n}\r\n\r\n.form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap:0.4em;\r\n    margin:1em;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/file.css":
/*!**********************!*\
  !*** ./src/file.css ***!
  \**********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./file.css */ "./node_modules/css-loader/dist/cjs.js!./src/file.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_file_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/Logic.js":
/*!**********************!*\
  !*** ./src/Logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "closeBtnFnc": () => (/* binding */ closeBtnFnc),
/* harmony export */   "default": () => (/* binding */ clearElement),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");


function clearElement (element) {
  element.innerHTML = ''
}

class toDo {
  constructor (title, dueDate, priorty, text) {
    this.title = title
    this.dueDate = dueDate
    this.priorty = priorty
    this.actualElement = ''
    this.text = text
    this.parentArr = []
  }

  deleteYourself () {
    console.log(this.parentArr)
    for (let i = 0; i < this.parentArr.length; i++) {
      if (this.parentArr[i] === this) {
        this.parentArr.splice(i, 1)
      }
    }
  }

  changePriorty (newPriorty) {
    this.priorty = newPriorty
  }

  load () {
    console.log(this)
    const todo = document.createElement('div')
    todo.classList.add('todo')
    const placeholdeText = document.createElement('p')
    placeholdeText.classList.add('todoText')
    placeholdeText.textContent = this.text
    const placeholderTitle = document.createElement('p')
    placeholderTitle.classList.add('todoTitle')
    placeholderTitle.textContent = this.title
    const placeholderPriorty = document.createElement('div')
    placeholderPriorty.classList.add('todoPriorty')

    for (let i = 0; i < 3; i++) {
      let text = ''
      let className = ''
      const el = document.createElement('p')
      if (i === 0) {
        el.id = '0'
        text = 'low'
        className = 'green'
      } else if (i === 1) {
        el.id = '1'
        text = 'medium'
        className = 'yellow'
      } else {
        el.id = '2'
        text = 'high'
        // eslint-disable-next-line no-unused-vars
        className = 'red'
      }

      if (this.priorty === text) {
        switch (this.priorty) {
          case 'low':{
            el.classList.add('green')
            break
          }
          case 'medium':{
            el.classList.add('yellow')
            break
          }
          case 'high':{
            el.classList.add('red')
            break
          }
        }
      }

      el.classList.add('priortyEl')
      el.textContent = text
      placeholderPriorty.append(el)
    }

    const closeBtn = document.createElement('p')
    closeBtn.textContent = 'X'
    closeBtn.classList.add('closeBtn')
    closeBtn.addEventListener('click', () => {
      this.deleteYourself()
      ;(0,___WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
    })
    closeBtn.addEventListener('click', closeBtnFnc)

    todo.append(placeholderTitle, closeBtn, placeholdeText, placeholderPriorty)

    ___WEBPACK_IMPORTED_MODULE_0__.grid.append(todo)

    const priortyEls = document.querySelectorAll('.priortyEl')
    for (let i = 0; i < priortyEls.length; i++) {
      priortyEls[i].addEventListener('click', swtichClasses)
      priortyEls[i].addEventListener('click', () => {
        if (priortyEls[i].id === '0') {
          this.changePriorty('low')
          ;(0,___WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
        } else if (priortyEls[i].id === '1') {
          this.changePriorty('medium')
          ;(0,___WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
        } else if (priortyEls[i].id === '2') {
          this.changePriorty('high')
          ;(0,___WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)()
        }
      })
    }
  }
}

class Project {
  constructor (title) {
    this.title = title
    this.todos = []
    this.isLoaded = false
  }

  loadTodos () {
    clearElement(___WEBPACK_IMPORTED_MODULE_0__.grid)
    if (this.isLoaded) {
      this.todos.forEach(todo => {
        todo.load()
      })
    }
  }
}

function closeBtnFnc () {
  this.parentElement.remove()
}

function swtichClasses () {
  if (this.classList.contains('red') || this.classList.contains('yellow') || this.classList.contains('green')) {
    // eslint-disable-next-line no-useless-return
    return
  } else if (this.id === '0') {
    this.classList.add('green')
    const second = this.nextElementSibling
    second.classList.remove('yellow')

    const third = second.nextElementSibling
    third.classList.remove('red')
  } else if (this.id === '1') {
    this.classList.add('yellow')
    const first = this.previousElementSibling
    first.classList.remove('green')
    const third = this.nextElementSibling
    third.classList.remove('red')
  } else {
    this.classList.add('red')
    const second = this.previousElementSibling
    second.classList.remove('yellow')
    const first = second.previousElementSibling
    first.classList.remove('green')
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "grid": () => (/* binding */ grid),
/* harmony export */   "main": () => (/* binding */ main),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage)
/* harmony export */ });
/* harmony import */ var _file_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.css */ "./src/file.css");
/* harmony import */ var _Logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logic */ "./src/Logic.js");
/* eslint-disable new-cap */
// imports



console.clear()

// main setup
// creating all the elements
// creating the header

let projects = JSON.parse(localStorage.getItem('storageProjects')) || []

projects = projects.map(project => {
  const propperProject = new _Logic__WEBPACK_IMPORTED_MODULE_1__.Project(project.title)
  for (let i = 0; i < project.todos.length; i++) {
    const propperToDo = new _Logic__WEBPACK_IMPORTED_MODULE_1__.toDo(project.todos[i].title, '09/09/2003', project.todos[i].priorty, project.todos[i].text)
    propperProject.todos.push(propperToDo)
    propperToDo.parentArr = propperProject.todos
  }
  propperProject.isLoaded = project.isLoaded
  console.log(propperProject.todos[0] instanceof _Logic__WEBPACK_IMPORTED_MODULE_1__.toDo)
  return propperProject
})

console.log(projects)

const header = document.createElement('div')
const sidebar = document.createElement('div')
const main = document.createElement('div')
const headerh1 = document.createElement('h1')
const wrapper = document.createElement('div')
wrapper.id = 'wraper'
const madeBy = document.createElement('p')
madeBy.textContent = 'Made by Kosta'
headerh1.textContent = 'Todo List App'
wrapper.append(headerh1)
wrapper.append(madeBy)

header.append(wrapper)
header.classList.add('header')
// creating the sidebar
const creationEl = document.createElement('div')
creationEl.classList.add('creationEl')
const grid = document.createElement('div')
grid.classList.add('grid')
const projectsList = document.createElement('div')
projectsList.classList.add('projects')
const currentProjectTitle = document.createElement('h1')
currentProjectTitle.classList.add('currentProjectTitle')
main.append(currentProjectTitle, grid)
sidebar.append(creationEl, projectsList)

sidebar.classList.add('sidebar')
main.classList.add('main')

document.body.append(header, sidebar, main)

const closeBtns = document.querySelectorAll('.closeBtn')
closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', _Logic__WEBPACK_IMPORTED_MODULE_1__.closeBtnFnc))
closeBtns.forEach(closeBtn => closeBtn.addEventListener('click', updateLocalStorage))

function generateTodoForm () {
  if (projects.length === 0) {
    alert("you can't make todos without parent projects")
    generateOptions()
    return
  }
  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])(creationEl)
  const form = document.createElement('div')
  form.classList.add('form')
  const todoTitleInput = document.createElement('input')
  todoTitleInput.name = 'todoTitle'
  todoTitleInput.placeholder = 'The title of your todo'
  const todoTextInput = document.createElement('input')
  todoTextInput.placeholder = 'Insert what you have to do'
  todoTextInput.name = 'todoText'
  const select = document.createElement('select')
  select.id = 'select'
  select.textContent = 'Select the priorty of the todo'
  select.name = 'todoPriorty'
  const labelForSelect = document.createElement('label')
  labelForSelect.for = 'select'
  labelForSelect.textContent = 'Priority:'
  const low = document.createElement('option')
  low.textContent = 'low'
  low.value = 'low'
  const medium = document.createElement('option')
  medium.value = 'medium'
  medium.textContent = 'medium'
  const high = document.createElement('option')
  high.value = 'high'
  high.textContent = 'high'
  const createBtn = document.createElement('button')
  createBtn.textContent = 'create new Todo'
  createBtn.addEventListener('click', () => {
    if (todoTitleInput.value === '' || todoTextInput.value === '') {
      alert('make sure to fill all the fields')
      generateOptions()
      return
    }
    const todo = new _Logic__WEBPACK_IMPORTED_MODULE_1__.toDo(todoTitleInput.value, '09/09/2003', select.value, todoTextInput.value)
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].isLoaded) {
        todo.parentArr = projects[i].todos
        projects[i].todos.push(todo)
      }
    }

    todo.load()
    generateOptions()
    updateLocalStorage()
  })

  select.append(low, medium, high)

  form.append(todoTitleInput, todoTextInput, labelForSelect, select, createBtn)

  creationEl.append(form)
}

function loadProjectForm () {
  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])(creationEl)
  const form = document.createElement('div')
  form.classList.add('form')
  const projectTitleInput = document.createElement('input')
  projectTitleInput.placeholder = "Enter the project's name"
  const projectBtn = document.createElement('button')
  projectBtn.textContent = 'Create new Project'

  form.append(projectTitleInput, projectBtn)
  creationEl.append(form)
  projectBtn.addEventListener('click', () => {
    if (projectTitleInput.value === '') {
      alert("you can't have empty title")
      generateOptions()
      return
    }
    currentProjectTitle.textContent = projectTitleInput.value
    const newProject = new _Logic__WEBPACK_IMPORTED_MODULE_1__.Project(projectTitleInput.value)
    projects.forEach(project => {
      if (project.isLoaded) {
        project.isLoaded = false
      }
    })
    newProject.isLoaded = true
    const project = document.createElement('div')
    const p = document.createElement('p')
    const deleteProject = document.createElement('p')
    deleteProject.textContent = 'X'
    // deleting from Dom
    deleteProject.addEventListener('click', deleteThisProject)
    console.log(newProject instanceof _Logic__WEBPACK_IMPORTED_MODULE_1__.Project)
    projects.push(newProject)
    // deleting from array
    deleteProject.addEventListener('click', () => {
      for (let i = 0; i < projects.length; i++) {
        if (currentProjectTitle.textContent === newProject.title) {
          currentProjectTitle.textContent = ''
          ;(0,_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])(grid)
        }
        if (projects[i] === newProject) {
          projects.splice(i, 1)
        }
      }
    })
    project.classList.add('project')
    project.append(p, deleteProject)
    p.textContent = newProject.title
    p.addEventListener('click', () => {
      const currentTitle = p.textContent
      currentProjectTitle.textContent = currentTitle
      for (let i = 0; i < projects.length; i++) {
        console.log(projects)
        if (projects[i].title !== currentTitle && projects[i].isLoaded) {
          projects[i].isLoaded = false
        } else if (projects[i].title === currentTitle) {
          projects[i].isLoaded = true
          projects[i].loadTodos()
        }
      }
    })
    projectsList.append(project)
    console.log(deleteProject, p)
    newProject.deleteButton = deleteProject.innerHTML
    newProject.domParagraph = p.innerHTML
    console.log(newProject.deleteButton)
    console.log(newProject.domParagraph)
    newProject.loadTodos()
    generateOptions()
    updateLocalStorage()
  })
}

function generateOptions () {
  (0,_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])(creationEl)
  const makeTodo = document.createElement('p')
  makeTodo.textContent = 'New Todo'
  makeTodo.addEventListener('click', generateTodoForm)
  const makeProject = document.createElement('p')
  makeProject.textContent = 'Make New Project'
  makeProject.addEventListener('click', loadProjectForm)
  creationEl.append(makeTodo, makeProject)
}

generateOptions()

function deleteThisProject () {
  this.parentElement.remove()
}

// eslint-disable-next-line no-unused-vars
const getCircularReplacer = () => {
  const seen = new WeakSet()
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}

function loadSideBar () {
  if (projects.length === 0) {
    return
  }
  for (let i = 0; i < projects.length; i++) {
    console.log(projects[0] instanceof _Logic__WEBPACK_IMPORTED_MODULE_1__.Project)
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    const projectTitle = document.createElement('p')
    projectTitle.textContent = projects[i].title
    const closeBtn = document.createElement('p')
    closeBtn.textContent = 'X'
    projectTitle.addEventListener('click', () => {
      for (let j = 0; j < projects.length; j++) {
        if (projects[j].title !== projectTitle.textContent && projects[i].isLoaded) {
          projects[j].isLoaded = false
          continue
        } else if (projects[i].title === projectTitle.textContent) {
          projects[j].isLoaded = true
          currentProjectTitle.textContent = projectTitle.textContent
          ;(0,_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])(grid)
          projects[j].loadTodos()
        }
      }
    })
    closeBtn.addEventListener('click', deleteThisProject)
    closeBtn.addEventListener('click', () => {
      currentProjectTitle.textContent = ''
      ;(0,_Logic__WEBPACK_IMPORTED_MODULE_1__["default"])(grid)
      for (let j = 0; j < projects.length; j++) {
        if (projects[j].title === projectTitle.textContent) {
          projects.splice(j, 1)
          updateLocalStorage()
        }
      }
    })

    projectDiv.append(projectTitle, closeBtn)
    projectsList.append(projectDiv)
  }
}

loadSideBar()

function updateLocalStorage () {
  localStorage.setItem('storageProjects', JSON.stringify(projects, getCircularReplacer()))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3QvLi9zcmMvZmlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3QvLi9zcmMvZmlsZS5jc3M/OTZkZiIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC0xMS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC0xMS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC0xMS10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0Ly4vc3JjL0xvZ2ljLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdC0xMS10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QtMTEtdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC1wcm9qZWN0LTExLXRvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUtkYW0rVGhtb3IrUHJvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGltcG9ydGluZyBmb250ICovXFxyXFxuXFxyXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcbi8qIFJFU0VUICovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosKjo6YmVmb3JlLCo6OmFmdGVye1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcclxcbiAgfVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1yb3c6MS8yO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzNTU3O1xcclxcbiAgICBjb2xvcjojZjFmYWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyICBoMXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jd3JhcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGdhcDoxZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNjM5NDY7XFxyXFxuICAgIGNvbG9yOiNmMWZhZWU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbkVsLCAucHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6MWVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXHJcXG4gICAgcGFkZGluZzogMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c3tcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBnYXA6MS4yNWVtO1xcclxcbiAgICBmb250LXNpemU6MS40ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDoxZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyA+ICp7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uRWwgPiAqe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWlue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXHJcXG4gICAgZ2FwOjFlbTtcXHJcXG4gICAgcGFkZGluZzoyLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MEYwRjtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ncmVlbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzRDQ3MTtcXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvd3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTcwODtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG97XFxyXFxuICAgIGJvcmRlcjo0cHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6MS4xZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwzZnIsMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNDOEU1O1xcclxcbiAgICBjb2xvcjojMTEyQTQ2O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcclxcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1RpdGxle1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICBmb250LXNpemU6MS40ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1RleHR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIGdyaWQtcm93OiAyLzM7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9QcmlvcnR5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBncmlkLWNvbHVtbjozLzQ7XFxyXFxuICAgIGdyaWQtcm93OjMvNDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcXHJcXG4gICAgcGFkZGluZzowLjJlbTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXHJcXG4gICAgd2lkdGg6IDEuNWVtO1xcclxcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAgIC8qIGJvdHRvbToxZW07ICovXFxyXFxuICAgIC8qIGxlZnQ6IDNlbTsgKi9cXHJcXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9ydHlFbHtcXHJcXG4gICAgcGFkZGluZzowLjI1ZW07XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRQcm9qZWN0VGl0bGV7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIGdyaWQtcm93OjEvMjtcXHJcXG4gICAgZm9udC1zaXplOjJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjc1ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDowLjRlbTtcXHJcXG4gICAgbWFyZ2luOjFlbTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZpbGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjs7QUFHbkI7OztDQUdDO0FBQ0QsVUFBVTtBQUNWOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYSxFQUFFLGtDQUFrQztFQUNuRDs7QUFFRjtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsMkJBQTJCOztBQUUvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsT0FBTztBQUNYOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixPQUFPO0lBQ1AsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLE9BQU87SUFDUCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGltcG9ydGluZyBmb250ICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2RhbStUaG1vcitQcm8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcbi8qIFJFU0VUICovXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosKjo6YmVmb3JlLCo6OmFmdGVye1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xcclxcbiAgfVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnS2RhbSBUaG1vciBQcm8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVye1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1yb3c6MS8yO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzNTU3O1xcclxcbiAgICBjb2xvcjojZjFmYWVlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyICBoMXtcXHJcXG4gICAgZm9udC1zaXplOiAxLjY1ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jd3JhcGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGdhcDoxZW07XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlNjM5NDY7XFxyXFxuICAgIGNvbG9yOiNmMWZhZWU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jcmVhdGlvbkVsLCAucHJvamVjdHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6MWVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgbWF4LWhlaWdodDogMjB2aDtcXHJcXG4gICAgcGFkZGluZzogMmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c3tcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBnYXA6MS4yNWVtO1xcclxcbiAgICBmb250LXNpemU6MS40ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDoxZW07XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyA+ICp7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNyZWF0aW9uRWwgPiAqe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWlue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWR7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsMWZyKTtcXHJcXG4gICAgZ2FwOjFlbTtcXHJcXG4gICAgcGFkZGluZzoyLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MEYwRjtcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5ncmVlbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzRDQ3MTtcXHJcXG59XFxyXFxuXFxyXFxuLnllbGxvd3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTcwODtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG97XFxyXFxuICAgIGJvcmRlcjo0cHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6MS4xZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywxZnIpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciwzZnIsMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUNDOEU1O1xcclxcbiAgICBjb2xvcjojMTEyQTQ2O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcclxcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1RpdGxle1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgICBmb250LXNpemU6MS40ZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb1RleHR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxyXFxuICAgIGdyaWQtcm93OiAyLzM7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9QcmlvcnR5e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBncmlkLWNvbHVtbjozLzQ7XFxyXFxuICAgIGdyaWQtcm93OjMvNDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuLmNsb3NlQnRue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcXHJcXG4gICAgcGFkZGluZzowLjJlbTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY29sb3I6d2hpdGU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXHJcXG4gICAgd2lkdGg6IDEuNWVtO1xcclxcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXFxyXFxuICAgIC8qIGJvdHRvbToxZW07ICovXFxyXFxuICAgIC8qIGxlZnQ6IDNlbTsgKi9cXHJcXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9ydHlFbHtcXHJcXG4gICAgcGFkZGluZzowLjI1ZW07XFxyXFxuICAgIGNvbG9yOmJsYWNrO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRQcm9qZWN0VGl0bGV7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIGdyaWQtcm93OjEvMjtcXHJcXG4gICAgZm9udC1zaXplOjJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDowLjc1ZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206MC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybXtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDowLjRlbTtcXHJcXG4gICAgbWFyZ2luOjFlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9maWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZmlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ3JpZCwgdXBkYXRlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudCAoZWxlbWVudCkge1xyXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gJydcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIHRvRG8ge1xyXG4gIGNvbnN0cnVjdG9yICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3J0eSwgdGV4dCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXHJcbiAgICB0aGlzLnByaW9ydHkgPSBwcmlvcnR5XHJcbiAgICB0aGlzLmFjdHVhbEVsZW1lbnQgPSAnJ1xyXG4gICAgdGhpcy50ZXh0ID0gdGV4dFxyXG4gICAgdGhpcy5wYXJlbnRBcnIgPSBbXVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlWW91cnNlbGYgKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5wYXJlbnRBcnIpXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyZW50QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudEFycltpXSA9PT0gdGhpcykge1xyXG4gICAgICAgIHRoaXMucGFyZW50QXJyLnNwbGljZShpLCAxKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQcmlvcnR5IChuZXdQcmlvcnR5KSB7XHJcbiAgICB0aGlzLnByaW9ydHkgPSBuZXdQcmlvcnR5XHJcbiAgfVxyXG5cclxuICBsb2FkICgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpXHJcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpXHJcbiAgICBjb25zdCBwbGFjZWhvbGRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGxhY2Vob2xkZVRleHQuY2xhc3NMaXN0LmFkZCgndG9kb1RleHQnKVxyXG4gICAgcGxhY2Vob2xkZVRleHQudGV4dENvbnRlbnQgPSB0aGlzLnRleHRcclxuICAgIGNvbnN0IHBsYWNlaG9sZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBsYWNlaG9sZGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kb1RpdGxlJylcclxuICAgIHBsYWNlaG9sZGVyVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlXHJcbiAgICBjb25zdCBwbGFjZWhvbGRlclByaW9ydHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcGxhY2Vob2xkZXJQcmlvcnR5LmNsYXNzTGlzdC5hZGQoJ3RvZG9QcmlvcnR5JylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICBsZXQgdGV4dCA9ICcnXHJcbiAgICAgIGxldCBjbGFzc05hbWUgPSAnJ1xyXG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgIGVsLmlkID0gJzAnXHJcbiAgICAgICAgdGV4dCA9ICdsb3cnXHJcbiAgICAgICAgY2xhc3NOYW1lID0gJ2dyZWVuJ1xyXG4gICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICBlbC5pZCA9ICcxJ1xyXG4gICAgICAgIHRleHQgPSAnbWVkaXVtJ1xyXG4gICAgICAgIGNsYXNzTmFtZSA9ICd5ZWxsb3cnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWwuaWQgPSAnMidcclxuICAgICAgICB0ZXh0ID0gJ2hpZ2gnXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICAgICAgY2xhc3NOYW1lID0gJ3JlZCdcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMucHJpb3J0eSA9PT0gdGV4dCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcmlvcnR5KSB7XHJcbiAgICAgICAgICBjYXNlICdsb3cnOntcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZ3JlZW4nKVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2FzZSAnbWVkaXVtJzp7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3llbGxvdycpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjYXNlICdoaWdoJzp7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3JlZCcpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcnR5RWwnKVxyXG4gICAgICBlbC50ZXh0Q29udGVudCA9IHRleHRcclxuICAgICAgcGxhY2Vob2xkZXJQcmlvcnR5LmFwcGVuZChlbClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnWCdcclxuICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlQnRuJylcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmRlbGV0ZVlvdXJzZWxmKClcclxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKClcclxuICAgIH0pXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQnRuRm5jKVxyXG5cclxuICAgIHRvZG8uYXBwZW5kKHBsYWNlaG9sZGVyVGl0bGUsIGNsb3NlQnRuLCBwbGFjZWhvbGRlVGV4dCwgcGxhY2Vob2xkZXJQcmlvcnR5KVxyXG5cclxuICAgIGdyaWQuYXBwZW5kKHRvZG8pXHJcblxyXG4gICAgY29uc3QgcHJpb3J0eUVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmlvcnR5RWwnKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcnR5RWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHByaW9ydHlFbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd3RpY2hDbGFzc2VzKVxyXG4gICAgICBwcmlvcnR5RWxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChwcmlvcnR5RWxzW2ldLmlkID09PSAnMCcpIHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlUHJpb3J0eSgnbG93JylcclxuICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcnR5RWxzW2ldLmlkID09PSAnMScpIHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlUHJpb3J0eSgnbWVkaXVtJylcclxuICAgICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmlvcnR5RWxzW2ldLmlkID09PSAnMicpIHtcclxuICAgICAgICAgIHRoaXMuY2hhbmdlUHJpb3J0eSgnaGlnaCcpXHJcbiAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvciAodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy50b2RvcyA9IFtdXHJcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2VcclxuICB9XHJcblxyXG4gIGxvYWRUb2RvcyAoKSB7XHJcbiAgICBjbGVhckVsZW1lbnQoZ3JpZClcclxuICAgIGlmICh0aGlzLmlzTG9hZGVkKSB7XHJcbiAgICAgIHRoaXMudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcclxuICAgICAgICB0b2RvLmxvYWQoKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQnRuRm5jICgpIHtcclxuICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxufVxyXG5cclxuZnVuY3Rpb24gc3d0aWNoQ2xhc3NlcyAoKSB7XHJcbiAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWQnKSB8fCB0aGlzLmNsYXNzTGlzdC5jb250YWlucygneWVsbG93JykgfHwgdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2dyZWVuJykpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLXJldHVyblxyXG4gICAgcmV0dXJuXHJcbiAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnMCcpIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZ3JlZW4nKVxyXG4gICAgY29uc3Qgc2Vjb25kID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIHNlY29uZC5jbGFzc0xpc3QucmVtb3ZlKCd5ZWxsb3cnKVxyXG5cclxuICAgIGNvbnN0IHRoaXJkID0gc2Vjb25kLm5leHRFbGVtZW50U2libGluZ1xyXG4gICAgdGhpcmQuY2xhc3NMaXN0LnJlbW92ZSgncmVkJylcclxuICB9IGVsc2UgaWYgKHRoaXMuaWQgPT09ICcxJykge1xyXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCd5ZWxsb3cnKVxyXG4gICAgY29uc3QgZmlyc3QgPSB0aGlzLnByZXZpb3VzRWxlbWVudFNpYmxpbmdcclxuICAgIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuJylcclxuICAgIGNvbnN0IHRoaXJkID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIHRoaXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncmVkJylcclxuICAgIGNvbnN0IHNlY29uZCA9IHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZ1xyXG4gICAgc2Vjb25kLmNsYXNzTGlzdC5yZW1vdmUoJ3llbGxvdycpXHJcbiAgICBjb25zdCBmaXJzdCA9IHNlY29uZC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXHJcbiAgICBmaXJzdC5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbicpXHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5ldy1jYXAgKi9cclxuLy8gaW1wb3J0c1xyXG5pbXBvcnQgJy4vZmlsZS5jc3MnXHJcbmltcG9ydCBjbGVhckVsZW1lbnQsIHsgUHJvamVjdCwgdG9EbywgY2xvc2VCdG5GbmMgfSBmcm9tICcuL0xvZ2ljJ1xyXG5cclxuY29uc29sZS5jbGVhcigpXHJcblxyXG4vLyBtYWluIHNldHVwXHJcbi8vIGNyZWF0aW5nIGFsbCB0aGUgZWxlbWVudHNcclxuLy8gY3JlYXRpbmcgdGhlIGhlYWRlclxyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycpKSB8fCBbXVxyXG5cclxucHJvamVjdHMgPSBwcm9qZWN0cy5tYXAocHJvamVjdCA9PiB7XHJcbiAgY29uc3QgcHJvcHBlclByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0LnRpdGxlKVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgcHJvcHBlclRvRG8gPSBuZXcgdG9Ebyhwcm9qZWN0LnRvZG9zW2ldLnRpdGxlLCAnMDkvMDkvMjAwMycsIHByb2plY3QudG9kb3NbaV0ucHJpb3J0eSwgcHJvamVjdC50b2Rvc1tpXS50ZXh0KVxyXG4gICAgcHJvcHBlclByb2plY3QudG9kb3MucHVzaChwcm9wcGVyVG9EbylcclxuICAgIHByb3BwZXJUb0RvLnBhcmVudEFyciA9IHByb3BwZXJQcm9qZWN0LnRvZG9zXHJcbiAgfVxyXG4gIHByb3BwZXJQcm9qZWN0LmlzTG9hZGVkID0gcHJvamVjdC5pc0xvYWRlZFxyXG4gIGNvbnNvbGUubG9nKHByb3BwZXJQcm9qZWN0LnRvZG9zWzBdIGluc3RhbmNlb2YgdG9EbylcclxuICByZXR1cm4gcHJvcHBlclByb2plY3RcclxufSlcclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3RzKVxyXG5cclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmV4cG9ydCBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuY29uc3QgaGVhZGVyaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG53cmFwcGVyLmlkID0gJ3dyYXBlcidcclxuY29uc3QgbWFkZUJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbm1hZGVCeS50ZXh0Q29udGVudCA9ICdNYWRlIGJ5IEtvc3RhJ1xyXG5oZWFkZXJoMS50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QgQXBwJ1xyXG53cmFwcGVyLmFwcGVuZChoZWFkZXJoMSlcclxud3JhcHBlci5hcHBlbmQobWFkZUJ5KVxyXG5cclxuaGVhZGVyLmFwcGVuZCh3cmFwcGVyKVxyXG5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcclxuLy8gY3JlYXRpbmcgdGhlIHNpZGViYXJcclxuY29uc3QgY3JlYXRpb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbmNyZWF0aW9uRWwuY2xhc3NMaXN0LmFkZCgnY3JlYXRpb25FbCcpXHJcbmV4cG9ydCBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJylcclxuY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxucHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzJylcclxuY29uc3QgY3VycmVudFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuY3VycmVudFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UHJvamVjdFRpdGxlJylcclxubWFpbi5hcHBlbmQoY3VycmVudFByb2plY3RUaXRsZSwgZ3JpZClcclxuc2lkZWJhci5hcHBlbmQoY3JlYXRpb25FbCwgcHJvamVjdHNMaXN0KVxyXG5cclxuc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJylcclxubWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgc2lkZWJhciwgbWFpbilcclxuXHJcbmNvbnN0IGNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZUJ0bicpXHJcbmNsb3NlQnRucy5mb3JFYWNoKGNsb3NlQnRuID0+IGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VCdG5GbmMpKVxyXG5jbG9zZUJ0bnMuZm9yRWFjaChjbG9zZUJ0biA9PiBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUxvY2FsU3RvcmFnZSkpXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVRvZG9Gb3JtICgpIHtcclxuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICBhbGVydChcInlvdSBjYW4ndCBtYWtlIHRvZG9zIHdpdGhvdXQgcGFyZW50IHByb2plY3RzXCIpXHJcbiAgICBnZW5lcmF0ZU9wdGlvbnMoKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNsZWFyRWxlbWVudChjcmVhdGlvbkVsKVxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpXHJcbiAgY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgdG9kb1RpdGxlSW5wdXQubmFtZSA9ICd0b2RvVGl0bGUnXHJcbiAgdG9kb1RpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSAnVGhlIHRpdGxlIG9mIHlvdXIgdG9kbydcclxuICBjb25zdCB0b2RvVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gIHRvZG9UZXh0SW5wdXQucGxhY2Vob2xkZXIgPSAnSW5zZXJ0IHdoYXQgeW91IGhhdmUgdG8gZG8nXHJcbiAgdG9kb1RleHRJbnB1dC5uYW1lID0gJ3RvZG9UZXh0J1xyXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXHJcbiAgc2VsZWN0LmlkID0gJ3NlbGVjdCdcclxuICBzZWxlY3QudGV4dENvbnRlbnQgPSAnU2VsZWN0IHRoZSBwcmlvcnR5IG9mIHRoZSB0b2RvJ1xyXG4gIHNlbGVjdC5uYW1lID0gJ3RvZG9QcmlvcnR5J1xyXG4gIGNvbnN0IGxhYmVsRm9yU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gIGxhYmVsRm9yU2VsZWN0LmZvciA9ICdzZWxlY3QnXHJcbiAgbGFiZWxGb3JTZWxlY3QudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6J1xyXG4gIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgbG93LnRleHRDb250ZW50ID0gJ2xvdydcclxuICBsb3cudmFsdWUgPSAnbG93J1xyXG4gIGNvbnN0IG1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgbWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcclxuICBtZWRpdW0udGV4dENvbnRlbnQgPSAnbWVkaXVtJ1xyXG4gIGNvbnN0IGhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gIGhpZ2gudmFsdWUgPSAnaGlnaCdcclxuICBoaWdoLnRleHRDb250ZW50ID0gJ2hpZ2gnXHJcbiAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBjcmVhdGVCdG4udGV4dENvbnRlbnQgPSAnY3JlYXRlIG5ldyBUb2RvJ1xyXG4gIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmICh0b2RvVGl0bGVJbnB1dC52YWx1ZSA9PT0gJycgfHwgdG9kb1RleHRJbnB1dC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ21ha2Ugc3VyZSB0byBmaWxsIGFsbCB0aGUgZmllbGRzJylcclxuICAgICAgZ2VuZXJhdGVPcHRpb25zKClcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2RvID0gbmV3IHRvRG8odG9kb1RpdGxlSW5wdXQudmFsdWUsICcwOS8wOS8yMDAzJywgc2VsZWN0LnZhbHVlLCB0b2RvVGV4dElucHV0LnZhbHVlKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAocHJvamVjdHNbaV0uaXNMb2FkZWQpIHtcclxuICAgICAgICB0b2RvLnBhcmVudEFyciA9IHByb2plY3RzW2ldLnRvZG9zXHJcbiAgICAgICAgcHJvamVjdHNbaV0udG9kb3MucHVzaCh0b2RvKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9kby5sb2FkKClcclxuICAgIGdlbmVyYXRlT3B0aW9ucygpXHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gIH0pXHJcblxyXG4gIHNlbGVjdC5hcHBlbmQobG93LCBtZWRpdW0sIGhpZ2gpXHJcblxyXG4gIGZvcm0uYXBwZW5kKHRvZG9UaXRsZUlucHV0LCB0b2RvVGV4dElucHV0LCBsYWJlbEZvclNlbGVjdCwgc2VsZWN0LCBjcmVhdGVCdG4pXHJcblxyXG4gIGNyZWF0aW9uRWwuYXBwZW5kKGZvcm0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9qZWN0Rm9ybSAoKSB7XHJcbiAgY2xlYXJFbGVtZW50KGNyZWF0aW9uRWwpXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJylcclxuICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICBwcm9qZWN0VGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGhlIHByb2plY3QncyBuYW1lXCJcclxuICBjb25zdCBwcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBuZXcgUHJvamVjdCdcclxuXHJcbiAgZm9ybS5hcHBlbmQocHJvamVjdFRpdGxlSW5wdXQsIHByb2plY3RCdG4pXHJcbiAgY3JlYXRpb25FbC5hcHBlbmQoZm9ybSlcclxuICBwcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3RUaXRsZUlucHV0LnZhbHVlID09PSAnJykge1xyXG4gICAgICBhbGVydChcInlvdSBjYW4ndCBoYXZlIGVtcHR5IHRpdGxlXCIpXHJcbiAgICAgIGdlbmVyYXRlT3B0aW9ucygpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY3VycmVudFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpXHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xyXG4gICAgICBpZiAocHJvamVjdC5pc0xvYWRlZCkge1xyXG4gICAgICAgIHByb2plY3QuaXNMb2FkZWQgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgbmV3UHJvamVjdC5pc0xvYWRlZCA9IHRydWVcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgZGVsZXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdYJ1xyXG4gICAgLy8gZGVsZXRpbmcgZnJvbSBEb21cclxuICAgIGRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUaGlzUHJvamVjdClcclxuICAgIGNvbnNvbGUubG9nKG5ld1Byb2plY3QgaW5zdGFuY2VvZiBQcm9qZWN0KVxyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KVxyXG4gICAgLy8gZGVsZXRpbmcgZnJvbSBhcnJheVxyXG4gICAgZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID09PSBuZXdQcm9qZWN0LnRpdGxlKSB7XHJcbiAgICAgICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJydcclxuICAgICAgICAgIGNsZWFyRWxlbWVudChncmlkKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvamVjdHNbaV0gPT09IG5ld1Byb2plY3QpIHtcclxuICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXHJcbiAgICBwcm9qZWN0LmFwcGVuZChwLCBkZWxldGVQcm9qZWN0KVxyXG4gICAgcC50ZXh0Q29udGVudCA9IG5ld1Byb2plY3QudGl0bGVcclxuICAgIHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUaXRsZSA9IHAudGV4dENvbnRlbnRcclxuICAgICAgY3VycmVudFByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRUaXRsZVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlICE9PSBjdXJyZW50VGl0bGUgJiYgcHJvamVjdHNbaV0uaXNMb2FkZWQpIHtcclxuICAgICAgICAgIHByb2plY3RzW2ldLmlzTG9hZGVkID0gZmFsc2VcclxuICAgICAgICB9IGVsc2UgaWYgKHByb2plY3RzW2ldLnRpdGxlID09PSBjdXJyZW50VGl0bGUpIHtcclxuICAgICAgICAgIHByb2plY3RzW2ldLmlzTG9hZGVkID0gdHJ1ZVxyXG4gICAgICAgICAgcHJvamVjdHNbaV0ubG9hZFRvZG9zKClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kKHByb2plY3QpXHJcbiAgICBjb25zb2xlLmxvZyhkZWxldGVQcm9qZWN0LCBwKVxyXG4gICAgbmV3UHJvamVjdC5kZWxldGVCdXR0b24gPSBkZWxldGVQcm9qZWN0LmlubmVySFRNTFxyXG4gICAgbmV3UHJvamVjdC5kb21QYXJhZ3JhcGggPSBwLmlubmVySFRNTFxyXG4gICAgY29uc29sZS5sb2cobmV3UHJvamVjdC5kZWxldGVCdXR0b24pXHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcm9qZWN0LmRvbVBhcmFncmFwaClcclxuICAgIG5ld1Byb2plY3QubG9hZFRvZG9zKClcclxuICAgIGdlbmVyYXRlT3B0aW9ucygpXHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlT3B0aW9ucyAoKSB7XHJcbiAgY2xlYXJFbGVtZW50KGNyZWF0aW9uRWwpXHJcbiAgY29uc3QgbWFrZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICBtYWtlVG9kby50ZXh0Q29udGVudCA9ICdOZXcgVG9kbydcclxuICBtYWtlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlVG9kb0Zvcm0pXHJcbiAgY29uc3QgbWFrZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICBtYWtlUHJvamVjdC50ZXh0Q29udGVudCA9ICdNYWtlIE5ldyBQcm9qZWN0J1xyXG4gIG1ha2VQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFByb2plY3RGb3JtKVxyXG4gIGNyZWF0aW9uRWwuYXBwZW5kKG1ha2VUb2RvLCBtYWtlUHJvamVjdClcclxufVxyXG5cclxuZ2VuZXJhdGVPcHRpb25zKClcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRoaXNQcm9qZWN0ICgpIHtcclxuICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKClcclxufVxyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmNvbnN0IGdldENpcmN1bGFyUmVwbGFjZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VlbiA9IG5ldyBXZWFrU2V0KClcclxuICByZXR1cm4gKGtleSwgdmFsdWUpID0+IHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIGlmIChzZWVuLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBzZWVuLmFkZCh2YWx1ZSlcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFNpZGVCYXIgKCkge1xyXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1swXSBpbnN0YW5jZW9mIFByb2plY3QpXHJcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RzW2ldLnRpdGxlXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY2xvc2VCdG4udGV4dENvbnRlbnQgPSAnWCdcclxuICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChwcm9qZWN0c1tqXS50aXRsZSAhPT0gcHJvamVjdFRpdGxlLnRleHRDb250ZW50ICYmIHByb2plY3RzW2ldLmlzTG9hZGVkKSB7XHJcbiAgICAgICAgICBwcm9qZWN0c1tqXS5pc0xvYWRlZCA9IGZhbHNlXHJcbiAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvamVjdHNbaV0udGl0bGUgPT09IHByb2plY3RUaXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgcHJvamVjdHNbal0uaXNMb2FkZWQgPSB0cnVlXHJcbiAgICAgICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRpdGxlLnRleHRDb250ZW50XHJcbiAgICAgICAgICBjbGVhckVsZW1lbnQoZ3JpZClcclxuICAgICAgICAgIHByb2plY3RzW2pdLmxvYWRUb2RvcygpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUaGlzUHJvamVjdClcclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBjdXJyZW50UHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJydcclxuICAgICAgY2xlYXJFbGVtZW50KGdyaWQpXHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBpZiAocHJvamVjdHNbal0udGl0bGUgPT09IHByb2plY3RUaXRsZS50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgcHJvamVjdHMuc3BsaWNlKGosIDEpXHJcbiAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0VGl0bGUsIGNsb3NlQnRuKVxyXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZChwcm9qZWN0RGl2KVxyXG4gIH1cclxufVxyXG5cclxubG9hZFNpZGVCYXIoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsU3RvcmFnZSAoKSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzLCBnZXRDaXJjdWxhclJlcGxhY2VyKCkpKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9