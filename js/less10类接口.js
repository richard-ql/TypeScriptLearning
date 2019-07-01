"use strict";
var Dog1 = /** @class */ (function () {
    function Dog1(name) {
        this.name = name;
    }
    Dog1.prototype.eat = function (str) {
        console.log(this.name + "吃" + str);
    };
    return Dog1;
}());
var d = new Dog1("旺财");
d.eat("狗粮");
