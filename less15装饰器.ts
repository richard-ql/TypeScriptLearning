// //类装饰器 普通装饰器（不传参数）
// function logClass(cls: any){
//     console.log(cls);
//     cls.prototype.apiUrl="装饰器动态添加属性";
//     cls.prototype.run=function(){
//         console.log("装饰器动态添加的方法");
//     }
// }

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
function decorators(cls:any){
    return class extends cls{
        apiUrl="新的apiUrl";
        getData(){
            console.log(this.apiUrl);
        }
    }
}

@decorators
class HttpClient{
    public apiUrl:string | undefined;
    constructor(){
        this.apiUrl="我是apiUrl";
    }
    getData(){
        console.log(this.apiUrl);
    }
}

let http=new HttpClient();
http.getData();