import eventBus from "./eventBus";

window.onload = function onload() {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab3 = document.getElementById("tab3");
    const tabShow = document.getElementById("tab-show");

    const tab1Show1 = function tab1Show1() {
        tabShow.innerText = "点击了按钮1";
    };
    const tab1Show2 = function tab1Show2() {
        tabShow.innerText = "第二次点击了按钮1";
    };
    const tab2Show = function tab2Show() {
        tabShow.innerText = "点击了按钮2";
    };

    const tab3Show = function tab3Show() {
        tabShow.innerText = "点击了按钮3";
    };

    // 点击tab 发布事件
    tab1.addEventListener(
        "click",
        function handler() {
            eventBus.publish("clickTab1", this);
            eventBus.unSubscribe("clickTab1", tab1Show2(), tabShow);
            setTimeout(function publish() {
                eventBus.publish("clickTab1", this);
            }, 1000);
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
    eventBus.subscribe("clickTab1", tab1Show1, tabShow);
    eventBus.subscribe("clickTab1", tab1Show2, tabShow);
    eventBus.subscribe("clickTab2", tab2Show, tabShow);
    eventBus.subscribe("clickTab3", tab3Show, tabShow);
};
