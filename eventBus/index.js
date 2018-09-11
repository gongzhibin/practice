window.onload = function() {
    let tab1 = document.getElementById('tab1');
    let tab2 = document.getElementById('tab2');
    let tab3 = document.getElementById('tab3');
    let tabShow = document.getElementById('tab-show');
    // tab2.addEventListener(
    //     'click',
    //     function() {
    //         tabShow.innerText = '点击按钮2显示的内容';
    //     },
    //     false,
    // );
    // let subList = [];
    // let oldLength = subList.length;
    // function emit(el, type, handler) {
    //     el.addEventListener(
    //         type,
    //         function() {
    //             subList.push({ el: el, eventType: type });
    //             handler();
    //         },
    //         false,
    //     );
    // }

    // function subscribe(el, handler) {
    //     while (subList.length !== oldLength) {
    //         oldLength = subList.length;
    //         // 对订阅列表进行处理
    //         handler(el);
    //     }
    // }

    // emit(tab3, 'click', function() {
    //     subscribe(tabShow, function(el) {
    //         el.innerText = `点击${subList[0].el.innerText}展示的内容`;
    //     });
    // });

    class EventBus {
        constructor() {
            // 订阅事件列表
            this.subs = {};
        }

        /**
         * 订阅事件
         *
         * @param {*} type 事件类型 string
         * @param {*} callback 处理函数 function
         * @param {*} scope 处理的DOM元素 dom
         * @memberof EventBus
         */
        subcribe(type, callback, scope) {
            // 输入检查 TBD

            if (typeof this.subs[type] !== 'undefined') {
                this.subs[type].push({ scope, callback });
            } else {
                this.subs[type] = [{ scope, callback }];
            }
        }

        /**
         * 监听事件
         *
         * @param {*} type 事件类型 string
         * @param {*} target 监听目标 dOM
         * @memberof EventBus
         */
        publish(type, target) {
            // 输入检查 TBD

            if (typeof this.subs[type] !== 'undefined') {
                this.subs[type].map(sub => {
                    if (sub && sub.callback) {
                        sub.callback.call(sub.scope, type, target);
                    }
                });
            }
        }
    }

    const eb = new EventBus();

    // 点击tab发布事件
    tab1.addEventListener(
        'click',
        function() {
            eb.publish('clickTab1', this);
        },
        false,
    );
    tab2.addEventListener(
        'click',
        function() {
            eb.publish('clickTab2', this);
        },
        false,
    );
    tab3.addEventListener(
        'click',
        function() {
            eb.publish('clickTab3', this);
        },
        false,
    );

    // tab显示区域订阅事件
    eb.subcribe(
        'clickTab1',
        function() {
            tabShow.innerText = '点击了按钮1';
        },
        tabShow,
    );
    eb.subcribe(
        'clickTab2',
        function() {
            tabShow.innerText = '点击了按钮2';
        },
        tabShow,
    );
    eb.subcribe(
        'clickTab3',
        function() {
            tabShow.innerText = '点击了按钮3';
        },
        tabShow,
    );
};
