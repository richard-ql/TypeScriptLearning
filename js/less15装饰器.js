"use strict";
// //类装饰器 普通装饰器（不传参数）
// function logClass(cls: any){
//     console.log(cls);
//     cls.prototype.apiUrl="装饰器动态添加属性";
//     cls.prototype.run=function(){
//         console.log("装饰器动态添加的方法");
//     }
// }
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @logClass
// class HttpClient{
//     constructor(){
//     }
// }
// let http:any= new HttpClient();
// console.log(http.apiUrl);
// http.run();
// //类装饰器 装饰器工厂（带参数的装饰器）
// function logClass(params:string){
//     return function(cls:any){
//         console.log(cls);
//         console.log(params);
//         cls.prototype.apiUrl="装饰器工厂动态添加属性";
//         cls.prototype.run=function(){
//             console.log("装饰器工厂动态添加方法");
//         }
//     }
// }
// @logClass('hello')
// class HttpClient{
//     constructor(){
//     }
// }
// let http:any=new HttpClient();
// console.log(http.apiUrl);
// http.run();
//类装饰器 重载构造函数
function decorators(cls) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "新的apiUrl";
            return _this;
        }
        class_1.prototype.getData = function () {
            console.log(this.apiUrl);
        };
        return class_1;
    }(cls));
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        this.apiUrl = "我是apiUrl";
    }
    HttpClient.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HttpClient = __decorate([
        decorators
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
http.getData();
