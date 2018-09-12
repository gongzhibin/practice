"use strict";

var _eventBus = require("./eventBus");

var _eventBus2 = _interopRequireDefault(_eventBus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function onload() {
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var tabShow = document.getElementById("tab-show");

    // 点击tab 发布事件
    tab1.addEventListener("click", function handler() {
        _eventBus2.default.publish("clickTab1", this);
    }, false);
    tab2.addEventListener("click", function handler() {
        _eventBus2.default.publish("clickTab2", this);
        _eventBus2.default.unSubscribe("clickTab2", tabShow);
    }, false);
    tab3.addEventListener("click", function handler() {
        _eventBus2.default.publish("clickTab3", this);
    }, false);

    // tab显示区域 订阅事件
    _eventBus2.default.subscribe("clickTab1", function () {
        tabShow.innerText = "点击了按钮1";
    }, tabShow);
    _eventBus2.default.subscribe("clickTab2", function () {
        tabShow.innerText = "点击了按钮2";
    }, tabShow);
    _eventBus2.default.subscribe("clickTab3", function () {
        tabShow.innerText = "点击了按钮3";
    }, tabShow);
};
