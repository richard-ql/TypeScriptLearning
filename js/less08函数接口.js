"use strict";
//对函数的传入参数，已经返回值 进行约束
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('张三', '里斯'));
