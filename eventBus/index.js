import eventBus from "./eventBus";

window.onload = function onload() {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab3 = document.getElementById("tab3");
    const tabShow = document.getElementById("tab-show");

    // 点击tab 发布事件
    tab1.addEventListener(
        "click",
        function handler() {
            eventBus.publish("clickTab1", this);
        },
        false
    );
    tab2.addEventListener(
        "click",
        function handler() {
            eventBus.publish("clickTab2", this);
            eventBus.unSubscribe("clickTab2", tabShow);
        },
        false
    );
    tab3.addEventListener(
        "click",
        function handler() {
            eventBus.publish("clickTab3", this);
        },
        false
    );

    // tab显示区域 订阅事件
    eventBus.subscribe(
        "clickTab1",
        () => {
            tabShow.innerText = "点击了按钮1";
        },
        tabShow
    );
    eventBus.subscribe(
        "clickTab2",
        () => {
            tabShow.innerText = "点击了按钮2";
        },
        tabShow
    );
    eventBus.subscribe(
        "clickTab3",
        () => {
            tabShow.innerText = "点击了按钮3";
        },
        tabShow
    );
};
