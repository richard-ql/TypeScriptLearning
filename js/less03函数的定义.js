"use strict";
//3.1函数的定义
//es5函数的声明
// function run(){
//     console.log("run");
// }
// run();
//es5匿名函数
// var run2=function(){
//     console.log("run2");
// }
// run2();
//ts函数的声明
function run3() {
    return "run3";
}
alert(run3());
//ts匿名函数
var run4 = function () {
    return "run4";
};
alert(run4());
//函数传参
function getInfo(name, id) {
    return name + "----" + id;
}
alert(getInfo("张三", 12));
var getInfo1 = function (name, id) {
    return name + "----" + id;
};
alert(getInfo1("里斯", 13));
//可选参数,必须配置到参数的最后面
function getInfo2(name, id) {
    if (id) {
        return name + "----" + id;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
alert(getInfo2("王武"));
alert(getInfo2("王武", 14));
//默认参数
function getInfo3(name, id) {
    if (id === void 0) { id = 16; }
    return name + "----" + id;
}
alert(getInfo3("找刘", 15));
alert(getInfo3("找刘"));
//剩余参数,3点运算符
function sum(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
alert(sum(1, 2, 3, 4));
function getMethod(str) {
    if (typeof str == 'string') {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
alert(getMethod('蒂尼故意'));
alert(getMethod(28));
function getMethod1(name, id) {
    if (id) {
        return "\u6211\u7684\u540D\u5B57\u53EB" + name + "\u6211\u7684\u7F16\u53F7\u662F" + id;
    }
    else {
        return "\u6211\u7684\u540D\u5B57\u53EB" + name;
    }
}
alert(getMethod1("阿三段论法"));
alert(getMethod1("阿三段论法", 29));
//箭头函数是es6的写法
setTimeout(function () {
    alert('非箭头函数');
}, 1000);
setTimeout(function () {
    alert('箭头函数');
}, 1000);
