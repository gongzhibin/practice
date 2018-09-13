class EventBus {
    constructor() {
        this.events = {};
    }

    /**
     * @description 监听事件
     * @date 2018-09-13
     * @param {String} type 事件名称
     * @param {Function} handler 事件处理器
     * @returns {Object} this
     * @memberof EventBus
     */
    on(type, handler, ...args) {
        if (this.events[type]) {
            this.events[type].push({
                handler,
                args
            });
        } else {
            this.events[type] = [
                {
                    handler,
                    args
                }
            ];
        }
        console.log(`订阅了${type}事件的${handler.name}方法`);
        // if (isKeep) this.events[type].isKeep = true;

        return this;
    }

    off(type, handler) {
        if (this.events[type]) {
            if (handler) {
                const firstIndex = this.events[type].findIndex((cv) => cv.handler === handler);

                if (firstIndex === -1) {
                    console.log(`${type}事件不存在${handler}处理器`);
                } else if (this.events[type].length > 1) {
                    this.events[type].splice(firstIndex, 1);
                    console.log(`取消订阅了${type}事件的${handler.name}方法`);
                } else {
                    Reflect.deleteProperty(this.events, type);
                    console.log(`取消订阅了${type}事件`);
                }
            } else {
                // handler不传入删除整个type下的所有处理器
                Reflect.deleteProperty(this.events, type);
            }
        } else {
            console.log(`不存在${type}事件类型`);
        }

        return this;
    }

    /**
     * @description 触发事件
     * @date 2018-09-13
     * @param {String} type 自定义事件类型
     * @returns {Object} this
     * @memberof EventBus
     */
    emit(type, ...args) {
        if (this.events[type]) {
            this.events[type].forEach((cv) => Reflect.apply(cv.handler, this, [...cv.args, ...args]));

            // 触发事件后如何处理？
        } else {
            console.log(`不存在${type}事件类型`);
        }

        return this;
    }
}

const eventBus = new EventBus();

export {EventBus};
export default eventBus;
