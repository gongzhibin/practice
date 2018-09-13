/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./eventBus/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./eventBus/eventBus.js":
/*!******************************!*\
  !*** ./eventBus/eventBus.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.EventBus = void 0;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventBus =\n/*#__PURE__*/\nfunction () {\n  function EventBus() {\n    _classCallCheck(this, EventBus);\n\n    // 订阅事件列表\n    this.events = {};\n  }\n  /**\n   * @description 订阅事件\n   * @date 2018-09-12\n   * @param {String} type 订阅事件类型\n   * @param {Function} handler 处理函数\n   * @param {Object} scope 订阅事件的DOM元素\n   * @memberof EventBus\n   * @returns {undefined} 无\n   */\n\n\n  _createClass(EventBus, [{\n    key: \"subscribe\",\n    value: function subscribe(type, handler, scope) {\n      // 输入检查 TBD\n      if (this.events[type]) {\n        this.events[type].push({\n          scope: scope,\n          handler: handler\n        });\n      } else {\n        this.events[type] = [{\n          scope: scope,\n          handler: handler\n        }];\n      }\n    }\n    /**\n     * @description\n     * @date 2018-09-12\n     * @param {String} type 取消订阅事件类型\n     * @param {Function} handler 取消订阅事件的处理函数\n     * @param {Object} scope 取消订阅事件的DOM元素\n     * @memberof EventBus\n     * @returns {undefined} 无\n     */\n\n  }, {\n    key: \"unSubscribe\",\n    value: function unSubscribe(type, handler, scope) {\n      // 输入检查 TBD\n      if (this.events[type]) {\n        // 不止一个订阅\n        if (this.events[type].length > 1) {\n          var firstIndex = this.events[type].findIndex(function (cv) {\n            return cv.scope === scope && cv.handler === handler;\n          });\n\n          if (firstIndex === -1) {\n            console.log(\"this type of event do not have this callback\");\n          } else {\n            this.events[type].splice(firstIndex, 1);\n          }\n        } else {\n          Reflect.deleteProperty(this.events, type);\n        }\n      } else {\n        console.log(\"This type of event does not exist\");\n      }\n    }\n    /**\n     * @description 发布事件\n     * @date 2018-09-12\n     * @param {String} type 自定义事件类型\n     * @param {Object} target 发布事件的DOM元素\n     * @returns {undefined} 无\n     * @memberof EventBus\n     */\n\n  }, {\n    key: \"publish\",\n    value: function publish(type, target) {\n      console.log(\"\".concat(target.id, \" publish \").concat(type, \" event\"));\n      this.emit(type, target);\n      return;\n    }\n    /**\n     * @description 该事件的DOM触发函数\n     * @date 2018-09-12\n     * @param {String} type 自定义事件类型\n     * @param {Object} target 发布事件的DOM元素\n     * @memberof EventBus\n     * @returns {undefined} 无\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(type, target) {\n      // 输入检查 TBD\n      if (this.events[type]) {\n        this.events[type].map(function (event) {\n          if (event && event.handler) {\n            Reflect.apply(event.handler, event.scope, [type, target]);\n          }\n        });\n      } else {\n        console.log(\"No elements subscribed to this event\");\n      }\n    }\n  }]);\n\n  return EventBus;\n}();\n\nexports.EventBus = EventBus;\nvar eventBus = new EventBus();\nvar _default = eventBus;\nexports.default = _default;\n\n//# sourceURL=webpack:///./eventBus/eventBus.js?");

/***/ }),

/***/ "./eventBus/index.js":
/*!***************************!*\
  !*** ./eventBus/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _eventBus = _interopRequireDefault(__webpack_require__(/*! ./eventBus */ \"./eventBus/eventBus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function onload() {\n  var tab1 = document.getElementById(\"tab1\");\n  var tab2 = document.getElementById(\"tab2\");\n  var tab3 = document.getElementById(\"tab3\");\n  var tabShow = document.getElementById(\"tab-show\");\n\n  var tab1Show1 = function tab1Show1() {\n    tabShow.innerText = \"点击了按钮1\";\n  };\n\n  var tab1Show2 = function tab1Show2() {\n    tabShow.innerText = \"第二次点击了按钮1\";\n  };\n\n  var tab2Show = function tab2Show() {\n    tabShow.innerText = \"点击了按钮2\";\n  };\n\n  var tab3Show = function tab3Show() {\n    tabShow.innerText = \"点击了按钮3\";\n  }; // 点击tab 发布事件\n\n\n  tab1.addEventListener(\"click\", function handler() {\n    _eventBus.default.publish(\"clickTab1\", this);\n\n    _eventBus.default.unSubscribe(\"clickTab1\", tab1Show2(), tabShow);\n\n    setTimeout(function publish() {\n      _eventBus.default.publish(\"clickTab1\", this);\n    }, 1000);\n  }, false);\n  tab2.addEventListener(\"click\", function handler() {\n    _eventBus.default.publish(\"clickTab2\", this);\n\n    _eventBus.default.unSubscribe(\"clickTab2\", tabShow);\n  }, false);\n  tab3.addEventListener(\"click\", function handler() {\n    _eventBus.default.publish(\"clickTab3\", this);\n  }, false); // tab显示区域 订阅事件\n\n  _eventBus.default.subscribe(\"clickTab1\", tab1Show1, tabShow);\n\n  _eventBus.default.subscribe(\"clickTab1\", tab1Show2, tabShow);\n\n  _eventBus.default.subscribe(\"clickTab2\", tab2Show, tabShow);\n\n  _eventBus.default.subscribe(\"clickTab3\", tab3Show, tabShow);\n};\n\n//# sourceURL=webpack:///./eventBus/index.js?");

/***/ })

/******/ });