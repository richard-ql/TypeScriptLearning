"use strict";
//泛型函数
// function getData<T>(value:T):T{
//     return value;
// }
var setData = function (value1) {
    return value1;
};
function getData1(value1) {
    return value1;
}
var myData = getData1;
myData('20');
