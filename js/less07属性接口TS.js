"use strict";
/*
TypeScript 中的接口类似于java, 同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等。
1. 属性接口
2. 函数接口
3. 可索引接口
4. 类接口
5. 可扩展接口
*/
function printName(name) {
    console.log(name.firstName + "---" + name.secondName);
}
var obj = {
    age: 20,
    firstName: "张",
    secondName: "三"
};
printName(obj);
