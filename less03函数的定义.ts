//3.1函数的定义

//es5函数的声明
// function run(){
//     console.log("run");
// }
// run();
//es5匿名函数
// var run2=function(){
//     console.log("run2");
// }
// run2();

//ts函数的声明
function run3():string{
    return "run3";
}
alert(run3());
//ts匿名函数
var run4=function():string{
    return "run4";
}
alert(run4());

//函数传参
function getInfo(name:string, id:number):string{
    return `${name}----${id}`;
}
alert(getInfo("张三", 12));

let getInfo1=function(name:string, id:number):string{
    return `${name}----${id}`;
}
alert(getInfo1("里斯", 13));

//可选参数,必须配置到参数的最后面
function getInfo2(name:string, id?:number):string{
    if(id){
        return `${name}----${id}`;
    }else{
        return `${name}---年龄保密`;
    }
}
alert(getInfo2("王武"));
alert(getInfo2("王武", 14));

//默认参数
function getInfo3(name:string, id:number=16):string{
    return `${name}----${id}`;
}
alert(getInfo3("找刘", 15));
alert(getInfo3("找刘"));

//剩余参数,3点运算符

function sum(a:number,b:number,...result:number[]):number{
    let sum:number=0;
    for(let i:number=0; i<result.length; i++){
        sum += result[i];
    }
    return sum;
}
alert(sum(1,2,3,4));

//ts的函数重载
function getMethod(name:string):string;
function getMethod(id:number):number;
function getMethod(str:any):any{
    if(typeof str=='string'){
        return '我叫' + str;
    }else{
        return '我的年龄是' + str;
    }
}

alert(getMethod('蒂尼故意'));
alert(getMethod(28));

//参数个数不一样的重载
function getMethod1(name:string):string;
function getMethod1(name:string, id?:number):string;
function getMethod1(name:any, id?:any):any{
    if(id){
        return `我的名字叫${name}我的编号是${id}`;
    }else{
        return `我的名字叫${name}`;
    }
}
alert(getMethod1("阿三段论法"));
alert(getMethod1("阿三段论法", 29));

//箭头函数是es6的写法

setTimeout(function(){
    alert('非箭头函数');
},1000)

setTimeout(()=>{
    alert('箭头函数')
},1000)
