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
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.run = function () {
        alert(this.name + "  run");
    };
    Person1.prototype.getName = function () {
        return this.name;
    };
    Person1.prototype.setName = function (name) {
        this.name = name;
    };
    return Person1;
}());
var p1 = new Person1("zhangsi");
p1.run();
alert(p1.getName());
p1.setName('lisi');
alert(p1.getName());
//ts中的继承 extends super
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name) {
        return _super.call(this, name) || this;
    }
    Student1.prototype.run = function () {
        alert(this.name + "  run 子类");
    };
    Student1.prototype.work = function () {
        return this.name + "  work";
    };
    return Student1;
}(Person1));
var s = new Student1('继承');
s.run();
alert(s.work());
// 类的属性访问修饰符
// public     在类的内部，子类，类的外部 可以访问
// protected  在类的内部，子类 可以访问， 类的外部 不可以访问
// private    在类的内部 可以访问， 子类，类的外部 不可以访问
// 默认是public
//静态属性和方法
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        alert(this.name + "  run");
    };
    Person2.print = function () {
        alert("print静态方法");
    };
    Person2.sex = "男"; //静态属性
    return Person2;
}());
var p1 = new Person1("zhangsi");
p1.run();
alert(p1.getName());
p1.setName('lisi');
alert(p1.getName());
