window.onload = function() {
    let tab1 = document.getElementById('tab1');
    let tab2 = document.getElementById('tab2');
    let tab3 = document.getElementById('tab3');
    let tabShow = document.getElementById('tab-show');
    tab2.addEventListener(
        'click',
        function() {
            tabShow.innerText = '点击按钮2显示的内容';
        },
        false,
    );
    let subList = [];
    let oldLength = subList.length;
    function emit(el, type, handler) {
        el.addEventListener(
            type,
            function() {
                subList.push({ el: el, eventType: type });
                handler();
            },
            false,
        );
    }

    function subscribe(el, handler) {
        while (subList.length !== oldLength) {
            oldLength = subList.length;
            // 对订阅列表进行处理
            handler(el);
        }
    }

    emit(tab3, 'click', function() {
        subscribe(tabShow, function(el) {
            el.innerText = `点击${subList[0].el.innerText}展示的内容`;
        });
    });
};
