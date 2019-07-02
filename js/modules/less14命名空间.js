"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Student = /** @class */ (function () {
        function Student(name) {
            this.name = name;
        }
        Student.prototype.eat = function () {
            console.log(this.name + "在喝酸奶");
        };
        return Student;
    }());
    A.Student = Student;
    var Child = /** @class */ (function () {
        function Child(name) {
            this.name = name;
        }
        Child.prototype.eat = function () {
            console.log(this.name + "再吃棒棒糖");
        };
        return Child;
    }());
    A.Child = Child;
})(A = exports.A || (exports.A = {}));
