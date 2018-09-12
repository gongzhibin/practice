window.onload = function onload() {
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const tab3 = document.getElementById("tab3");
    const tabShow = document.getElementById("tab-show");

    class EventBus {
        constructor() {
            // 订阅事件列表
            this.events = {};
        }

        /**
         * @description 订阅事件
         * @date 2018-09-12
         * @param {String} type 订阅事件类型
         * @param {Function} callback 处理函数
         * @param {Object} scope 订阅事件的DOM元素
         * @memberof EventBus
         * @returns {undefined} 无
         */
        subscribe(type, callback, scope) {
            // 输入检查 TBD

            if (this.events[type]) {
                this.events[type].push({
                    scope,
                    callback
                });
            } else {
                this.events[type] = [
                    {
                        scope,
                        callback
                    }
                ];
            }
        }

        /**
         * @description
         * @date 2018-09-12
         * @param {String} type 取消订阅事件类型
         * @param {Function} callback 取消订阅事件的处理函数
         * @param {Object} scope 取消订阅事件的DOM元素
         * @memberof EventBus
         * @returns {undefined} 无
         */
        unSubscribe(type, callback, scope) {
            // 输入检查 TBD

            if (this.events[type]) {
                // 不止一个订阅
                if (this.events[type].length > 1) {
                    const firstIndex = this.events[type].findIndex((cv) => cv.scope === scope && cv.callback === callback);

                    if (firstIndex === -1) {
                        console.log("this type of event do not have this callback");
                    } else {
                        this.events[type].splice(firstIndex, 1);
                    }
                } else {
                    Reflect.deleteProperty(this.events, type);
                }
            } else {
                console.log("This type of event does not exist");
            }
        }

        /**
         * @description 发布事件
         * @date 2018-09-12
         * @param {String} type 自定义事件类型
         * @param {Object} target 发布事件的DOM元素
         * @returns {undefined} 无
         * @memberof EventBus
         */
        publish(type, target) {
            console.log(`${target.id} publish ${type} event`);
            this.emit(type, target);

            return;
        }

        /**
         * @description 该事件的DOM触发函数
         * @date 2018-09-12
         * @param {String} type 自定义事件类型
         * @param {Object} target 发布事件的DOM元素
         * @memberof EventBus
         * @returns {undefined} 无
         */
        emit(type, target) {
            // 输入检查 TBD

            if (this.events[type]) {
                this.events[type].map((event) => {
                    if (event && event.callback) {
                        Reflect.apply(event.callback, event.scope, [type, target]);
                    }
                });
            } else {
                console.log("No elements subscribed to this event");
            }
        }
    }

    const eventBus = new EventBus();

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
