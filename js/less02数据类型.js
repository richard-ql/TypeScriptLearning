"use strict";
/*
typescript 数据类型：
    布尔 boolean
    数字 number
    字符串 string
    数组 array
    元组 tuple
    枚举 enum
    任意类型 any
    null 和 undefined
    void
    never
*/
//类型校验
var flag = true;
// flag=123; //错误
flag = false;
console.log(flag);
//数组
var arr = [1, 2, 3];
console.log(arr);
var arr1 = [1, 3, 4];
console.log(arr1);
var ar2 = ["12", 3, 4];
console.log(ar2);
var ar3 = ["45", 6, 7];
console.log(ar3);
//元组类型属于数组的一种
var arr2 = [123, '234'];
console.log(arr2);
//枚举类型
var flag1;
(function (flag1) {
    flag1[flag1["success"] = 1] = "success";
    flag1[flag1["error"] = 2] = "error";
})(flag1 || (flag1 = {}));
;
var s6 = flag1.error;
console.log(s6);
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 2] = "red";
    Color[Color["orange"] = 3] = "orange";
})(Color || (Color = {}));
;
var c = Color.blue;
console.log(c);
var c1 = Color.red;
console.log(c1);
var c2 = Color.orange;
console.log(c2);
//any
var num1 = 123;
num1 = "234";
console.log(num1);
//undefined
var num2;
console.log(num2);
//void 表示方法没有返回任何类型
function run() {
    console.log("run");
}
run();
