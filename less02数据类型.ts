/*
typescript 数据类型：
    布尔 boolean
    数字 number
    字符串 string
    数组 array
    元组 tuple
    枚举 enum
    任意类型 any
    null 和 undefined
    void
    never
*/

//类型校验
var flag:boolean=true;
// flag=123; //错误
flag=false;
console.log(flag);

//数组
var arr:number[]=[1,2,3];
console.log(arr);
var arr1:Array<number>=[1,3,4];
console.log(arr1);

let ar2:Array<any>=["12", 3, 4];
console.log(ar2);
let ar3:any[]=["45", 6, 7];
console.log(ar3);


//元组类型属于数组的一种
let arr2:[number, string]=[123, '234'];
console.log(arr2);

//枚举类型
enum flag1{success=1, error=2};
let s6:flag1=flag1.error;
console.log(s6);

enum Color{blue, red=2, "orange"};
let c:Color=Color.blue;
console.log(c);
let c1:Color=Color.red;
console.log(c1);
let c2:Color=Color.orange;
console.log(c2);

//any
let num1:any=123;
num1 = "234";
console.log(num1);

//undefined

let num2:number | undefined;
console.log(num2);

//void 表示方法没有返回任何类型

function run():void{
    console.log("run");
}
run();
