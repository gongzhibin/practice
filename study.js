// 对象方法简写
const atom = {
    value: 1,
    addValue(value) {
        return atom.value + value;
    }
};
// console.log(atom.addValue(1));

// 对象属性简写
const name = 'zxlg';
const person = {
    name
}
// console.log(person);

// 浅拷贝对象
const origin = { a: 1, b: 2 };
const copy = { ...origin, c: 3 };
// console.log(copy);

// 复制数组
const arr = [1, 2, 3, 4, 5];
const arr_copy = [...arr];
// console.log(arr_copy);

//使用Array.from对可迭代的对象进行数组转换，因为它避免创建中间数组。

//在访问和使用对象的多个属性时，使用对象的解构，以减少临时的属性引用
// 模板字符串使用反引号 (` `) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}
const zxlg = {
    firstName: 'bill',
    lastName: 'gong'
};
// console.log(getFullName(zxlg));

// 数组解构
const [first, second] = arr;
// console.log(first, second);

// 当您必须使用匿名函数（如在传递一个内联回调时），请使用箭头函数表示法
const arr1 = [1, 2, 3];
const arr2 = arr1.map((x) => {
    const y = x * x;
    return y;
});
// console.log(arr2);

// 使用默认的传参而不是改变函数的参数

// 函数的参数 不能多于3个 ，超过3个的要用对象传递参数


// 通过变量访问属性时使用中括号 []
const billgong = {
    name: 'zxlg',
    age: 13
}

const getName = function (pram) {
    return billgong[pram];
}

// console.log(getName('name'));

// 总是使用 const 或 let 来声明变量


// 解构
const { name: myName, age: myAge } = billgong;
// console.log(`my name is ${myName}, my age is ${myAge}`);


const numbers = [1, 2, 3, 4];
const [firstNumber, secondNumber] = numbers;
// console.log(`first number is ${firstNumber},second number is ${secondNumber}`)

const newNumbers = numbers.map(currentValue => currentValue * currentValue);
// console.log(newNumbers); // [1 , 4, 9, 16]

const sum = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 5);
// console.log(sum); // 15

// 没有返回值
numbers.forEach(currentValue => {
    // console.log(currentValue + 1) 
})

// this详解
// 浏览器全局环境中，this === widow 返回 true
// node全局环境中，this === global 返回 false
// console.log(this === global);

let testThis = '全局环境';
function f1() {
    return this;
}
// console.log(f1().testThis);
let foo = {
    testThis: "foo环境",
    bar() {
        let testThis = "bar环境";
        return this.testThis;
    }
}
let value = foo.bar();
// console.log(value)

// 展开运算符
const obj1 = {
    a: { a: 1 },
    b: { b: 1 }
}
const obj2 = {
    ...obj1,
    c: { c: 1 }
}
// console.log(obj2);
// console.log(obj2);

// 创建Promise
const myPromise = new Promise((resolve, reject) => {
    try {
        throw new Error('zxlg is too handsome to cause the program to crash!');
        resolve("success");  //执行了resolve之后不继续向后执行
        // throw new Error('zxlg is too handsome to cause the program to crash!');
    } catch (error) {
        reject(error);
    }

});

myPromise.then((message) => {
    // console.log(message);
}).catch((error) => {
    // console.log(error);
    throw new Error('myPromise BOOM!')
}).catch((error) => {
    // console.log(error);
})

const anotherPromise = new Promise((resolve, reject) => {
    resolve("success!");
})

let p1 = Promise.all([myPromise, anotherPromise]);

p1.then((res) => {
    // console.log(res[0]);
    // console.log(res[1]);
}).catch((err) => {
    // console.log(err);
})


// 迭代器和生成器练习
/**
 * 函数名前或者function后加*号‘
 * 使用yield进行暂停
 * 调用next方法进行，进行继续执行操作，返回对应的数据
 * @param {*} items
 */
function* createIterator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}

let iterator = createIterator([1, 2, 3]);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


function outputAfater2s(num) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => { resolve(num * 2) }, 2000);
        } catch (err) {
            reject(err);
        }
    })
}


/**
 * async函数返回一个promise对象
 * 与Generator不同的是，其内置执行器，不需要调用next()方法
 * await后面也必须是一个promise对象，由于可能发生错误，所以最好将其置于try catch代码块中
 */
async function asyncFunc() {
    try {
        // 异步操作继发关系
        // await outputAfater2s();
        // console.log('第一个2s');
        // await outputAfater2s();
        // console.log('第二个2s');

        // 异步操作独立关系
        let res = await Promise.all([outputAfater2s(10), outputAfater2s(20)]);
        // console.log(res[0], res[1]);
        throw new Error('asyncFunc BOOM');
    } catch (error) {
        // console.log(error);
    }

}

asyncFunc();

// 代理和反射

// let target = {};
// let proxy = new Proxy(target, {});

// proxy.name = "proxy";
// console.log(proxy.name, target.name);

// target.name = "target";
// console.log(proxy.name, target.name);


let target = {
    name: "target"
}

let proxy = new Proxy(target, {
    set(trapTarget, key, value, receiver) {

        // 已有属性不受影响
        if (!trapTarget.hasOwnProperty(key)) {
            // isNaN会把非数字的转换为数字
            // 新建属性必须是数字
            if (isNaN(value)) {
                throw new TypeError("属性必须是数字");
            }
        }

        // 添加属性
        return Reflect.set(trapTarget, key, value, receiver)
    }
})

proxy.count = 1;
// console.log(proxy.count, target.count);


proxy.anotherName = '12';
// console.log(proxy.anotherName, target.anotherName);


let aObj = {

};
let a = '';
Object.defineProperty(aObj, 'a', {
    get() {
        console.log('get val');
        return a;
    },
    set(newVal) {
        console.log('set val: ', newVal);
        a = newVal;
    }
});
aObj.a;
aObj.a = "zxlg";


// 观察者模式
// 主题对象（依赖收集类）
let Dep = function () {
    this.subs = []; // 订阅者列表
}

// 主题对象（依赖收集类）通知订阅者
Dep.prototype.notify = function () {
    this.subs.forEach(function (sub) { // 遍历所有订阅者
        sub.update(); // 订阅者更新
    })
};

function Sub(x) { // 订阅者
    this.x = x;
}

Sub.prototype.update = function () { //订阅者更新
    this.x = this.x + 1;
    // console.log(this.x);
}

let pub = { // 发布者
    publish() {
        dep.notify();
    }
}

let dep = new Dep(); // 主题对象实例
Array.prototype.push.call(dep.subs, new Sub(1), new Sub(2), new Sub(4)); // 新增3个订阅者

pub.publish(); // 发布者发布更新

// 发布者pub发出通知notify，主题对象Dep收到通知并推送给订阅者Sub，订阅者执行相应操作update