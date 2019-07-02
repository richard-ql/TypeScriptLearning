"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function () {
        console.log(this.name + "在编程");
    };
    return Programmer;
}());
var Student4 = /** @class */ (function (_super) {
    __extends(Student4, _super);
    function Student4(name) {
        return _super.call(this, name) || this;
    }
    Student4.prototype.eat = function () {
        console.log(this.name + "吃零食");
    };
    Student4.prototype.work = function () {
        console.log(this.name + "在工作");
    };
    return Student4;
}(Programmer));
var s4 = new Student4("王华");
s4.eat();
s4.work();
s4.coding();
