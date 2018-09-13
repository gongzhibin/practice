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
/******/ 	return __webpack_require__(__webpack_require__.s = "./eventBusNoScope/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./eventBusNoScope/eventBus.js":
/*!*************************************!*\
  !*** ./eventBusNoScope/eventBus.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = exports.EventBus = void 0;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar EventBus =\n/*#__PURE__*/\nfunction () {\n  function EventBus() {\n    _classCallCheck(this, EventBus);\n\n    this.events = {};\n  }\n  /**\n   * @description 监听事件\n   * @date 2018-09-13\n   * @param {String} type 事件名称\n   * @param {Function} handler 事件处理器\n   * @returns {Object} this\n   * @memberof EventBus\n   */\n\n\n  _createClass(EventBus, [{\n    key: \"on\",\n    value: function on(type, handler) {\n      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n      }\n\n      if (this.events[type]) {\n        this.events[type].push({\n          handler: handler,\n          args: args\n        });\n      } else {\n        this.events[type] = [{\n          handler: handler,\n          args: args\n        }];\n      } // if (isKeep) this.events[type].isKeep = true;\n\n\n      return this;\n    }\n  }, {\n    key: \"off\",\n    value: function off(type, handler) {\n      if (this.events[type]) {\n        if (handler) {\n          var firstIndex = this.events[type].findIndex(function (cv) {\n            return cv.handler === handler;\n          });\n\n          if (firstIndex === -1) {\n            console.log(\"\".concat(type, \"\\u4E8B\\u4EF6\\u4E0D\\u5B58\\u5728\").concat(handler, \"\\u5904\\u7406\\u5668\"));\n          } else if (this.events[type].length > 1) {\n            this.events[type].splice(firstIndex, 1);\n          } else {\n            Reflect.deleteProperty(this.events, type);\n          }\n        } else {\n          // handler不传入删除整个type下的所有处理器\n          Reflect.deleteProperty(this.events, type);\n        }\n      } else {\n        console.log(\"\\u4E0D\\u5B58\\u5728\".concat(type, \"\\u4E8B\\u4EF6\\u7C7B\\u578B\"));\n      }\n\n      return this;\n    }\n    /**\n     * @description 触发事件\n     * @date 2018-09-13\n     * @param {String} type 自定义事件类型\n     * @returns {Object} this\n     * @memberof EventBus\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(type) {\n      var _this = this;\n\n      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        args[_key2 - 1] = arguments[_key2];\n      }\n\n      if (this.events[type]) {\n        this.events[type].forEach(function (cv) {\n          return Reflect.apply(cv.handler, _this, _toConsumableArray(cv.args).concat(args));\n        }); // 触发事件后如何处理？\n      } else {\n        console.log(\"\\u4E0D\\u5B58\\u5728\".concat(type, \"\\u4E8B\\u4EF6\\u7C7B\\u578B\"));\n      }\n\n      return this;\n    }\n  }]);\n\n  return EventBus;\n}();\n\nexports.EventBus = EventBus;\nvar eventBus = new EventBus();\nvar _default = eventBus;\nexports.default = _default;\n\n//# sourceURL=webpack:///./eventBusNoScope/eventBus.js?");

/***/ }),

/***/ "./eventBusNoScope/index.js":
/*!**********************************!*\
  !*** ./eventBusNoScope/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _eventBus = _interopRequireDefault(__webpack_require__(/*! ./eventBus */ \"./eventBusNoScope/eventBus.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.onload = function onload() {\n  var tab1 = document.getElementById(\"tab1\");\n  var tabShow = document.getElementById(\"tab-show\");\n\n  var tab1Show1 = function tab1Show1(data1, data2, callback) {\n    tabShow.innerText = \"点击了按钮1\";\n    console.log(data1);\n    console.log(data2);\n    callback();\n  };\n\n  var tab1Show2 = function tab1Show2(data1, data2, callback) {\n    tabShow.innerText = \"第二次点击了按钮1\";\n    console.log(data1);\n    console.log(data2);\n    callback();\n  }; // 点击tab 发布事件\n\n\n  tab1.addEventListener(\"click\", function () {\n    _eventBus.default.emit(\"clickTab1\", {\n      \"name\": \"zxlg\"\n    }, function () {\n      console.log(\"emit callback\");\n    });\n  }, false); // tab显示区域 订阅事件\n\n  _eventBus.default.on(\"clickTab1\", tab1Show1, {\n    \"name\": \"第一次订阅\"\n  });\n\n  _eventBus.default.on(\"clickTab1\", tab1Show2, {\n    \"name\": \"第二次订阅\"\n  });\n\n  var delay = 5000;\n  setTimeout(function () {\n    _eventBus.default.off(\"clickTab1\", tab1Show2);\n  }, delay);\n};\n\n//# sourceURL=webpack:///./eventBusNoScope/index.js?");

/***/ })

/******/ });