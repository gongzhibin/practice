import eventBus from "./eventBus";

window.onload = function onload() {
    const tab1 = document.getElementById("tab1");
    const tabShow = document.getElementById("tab-show");

    const tab1Show1 = function tab1Show1(data1, data2, callback) {
        tabShow.innerText = "点击了按钮1";
        console.log(data1);
        console.log(data2);
        callback();
    };
    const tab1Show2 = function tab1Show2(data1, data2, callback) {
        tabShow.innerText = "第二次点击了按钮1";
        console.log(data1);
        console.log(data2);
        callback();
    };

    // 点击tab 发布事件
    tab1.addEventListener(
        "click",
        () => {
            eventBus.emit("clickTab1", {"name": "zxlg"}, () => {
                console.log("emit callback");
            });
        },
        false
    );

    // tab显示区域 订阅事件
    eventBus.on("clickTab1", tab1Show1, {"name": "第一次订阅"});
    eventBus.on("clickTab1", tab1Show2, {"name": "第二次订阅"});
    const delay = 5000;

    setTimeout(() => {
        eventBus.off("clickTab1", tab1Show2);
    }, delay);
};
