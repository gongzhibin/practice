// 对象方法简写
const atom = {
    value: 1,
    addValue(value) {
        return atom.value + value;
    }
};
console.log(atom.addValue(1));

// 对象属性简写
const name = 'zxlg';
const person = {
    name
}
console.log(person);

// 浅拷贝对象
const origin = { a: 1, b: 2 };
const copy = { ...origin, c: 3 };
console.log(copy);

// 复制数组
const arr = [1, 2, 3, 4, 5];
const arr_copy = [...arr];
console.log(arr_copy);

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
console.log(getFullName(zxlg));

// 数组解构
const [first, second] = arr;
console.log(first, second);

// 当您必须使用匿名函数（如在传递一个内联回调时），请使用箭头函数表示法
const arr1 = [1, 2, 3];
const arr2 = arr1.map((x) => {
    const y = x * x;
    return y;
});
console.log(arr2);

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

console.log(getName('name'));

// 总是使用 const 或 let 来声明变量


// 解构
const { name: myName, age: myAge } = billgong;
console.log(`my name is ${myName}, my age is ${myAge}`);


const numbers = [1, 2, 3, 4];
const [firstNumber, secondNumber] = numbers;
console.log(`first number is ${firstNumber},second number is ${secondNumber}`)

const newNumbers = numbers.map(currentValue => currentValue * currentValue);
console.log(newNumbers); // [1 , 4, 9, 16]

const sum = numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue }, 5);
console.log(sum); // 15

// 没有返回值
numbers.forEach(currentValue => { console.log(currentValue + 1) })

// this详解
// 浏览器全局环境中，this === widow 返回 true
// node全局环境中，this === global 返回 false
console.log(this === global);

let testThis = '全局环境';
function f1(){
    return this;
}
console.log(f1().testThis);
let foo = {
    testThis: "foo环境",
    bar() {
        let testThis = "bar环境";
        return this.testThis;
    }
}
let value = foo.bar();
console.log(value)
