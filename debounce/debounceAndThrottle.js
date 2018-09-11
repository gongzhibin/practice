window.onload = () => {
    let input1 = document.getElementById('noDebounce');
    let input2 = document.getElementById('debounce');
    let input3 = document.getElementById('throttle');

    if (input1) {
        input1.addEventListener(
            'keyup',
            function(event) {
                ajax(event.target.value);
            },
            false
        );
    }

    if (input2) {
        input2.addEventListener(
            'keyup',
            function(event) {
                ajaxDebounce(event.target.value);
            },
            false
        );
    }

    if (input3) {
        input3.addEventListener(
            'keyup',
            function(event) {
                ajaxThrottle(event.target.value);
            },
            false
        );
    }
};

/**
 * 模拟ajax请求
 *
 * @param {*} content
 */
function ajax(content) {
    console.log(`ajax: ${content}`);
}

/**
 * 去抖
 *
 * @param {*} fn
 * @param {*} ms
 */
var flag;
function debounce(fn, ms) {
    return function(content) {
        clearTimeout(flag);
        flag = setTimeout(function() {
            fn(content);
        }, ms);
    };
}

/**
 * 去抖改进版
 *
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function correctDebounce(fn, delay) {
    return function(args) {
        let that = this;
        let _args = args;
        clearTimeout(fn.timeID);
        fn.timeID = setTimeout(function() {
            fn.call(that, _args);
        }, delay);
    };
}

function throttle(fn, delay) {
    let last = 0;
    return function(args) {
        let that = this;
        let _args = args;
        let now = +new Date();
        if (last && now < last + delay) {
            clearTimeout(fn.timeID);
            last = now;
            fn.timeID = setTimeout(function() {
                fn.call(that, _args);
            }, delay);
        } else {
            last = now;
            fn.call(that, _args);
        }
    };
}

let ajaxDebounce = debounce(ajax, 1000);
let ajaxThrottle = throttle(ajax, 1000);
