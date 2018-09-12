class EventBus {
    constructor() {
        // 订阅事件列表
        this.events = {};
    }

    /**
     * 订阅事件
     *
     * @param {*} type 订阅事件类型 String
     * @param {*} callback 处理函数 Function
     * @param {*} scope 订阅事件的DOM元素 Element
     * @memberof EventBus
     */
    subscribe(type, callback, scope) {
        // 输入检查 TBD

        if (this.events[type]) {
            // 检查是否重复订阅
            let isRepate = this.events[type].some(cv => {
                return cv.callback == callback && cv.scope == scope;
            });
            if (isRepate) {
                console.log('This element has already subscribed to this event');
            } else {
                this.events[type].push({ scope, callback });
            }
        } else {
            this.events[type] = [{ scope, callback }];
        }
    }

    /**
     * 取消订阅事件
     *
     * @param {*} type 取消订阅事件类型 String
     * @param {*} scope 取消订阅事件的DOM元素 Element
     * @memberof EventBus
     */
    unSubscribe(type, callback, scope) {
        if (this.events[type]) {
            // 不止一个订阅
            if (this.events[type].length !== 1) {
                this.events[type].findIndex(function(cv) {
                    return cv.scope == scope && cv.callback == callback;
                });
            } else {
                delete this.events[type];
            }
        } else {
            console.log('This type of event does not exist');
        }
    }

    /**
     * 发布事件
     * 订阅该事件的DOM触发函数
     *
     * @param {*} type 自定义事件类型 String
     * @param {*} target 发布事件的DOM元素 DOM
     * @memberof EventBus
     */
    publish(type, target) {
        // 输入检查 TBD

        if (this.events[type]) {
            this.events[type].map(event => {
                if (event && event.callback) {
                    event.callback.call(event.scope, type, target);
                }
            });
        } else {
            console.log('No elements subscribed to this event');
        }
    }
}

const eventBus = new EventBus();

export { EventBus };
export default eventBus;
