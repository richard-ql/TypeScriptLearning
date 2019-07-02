//泛型函数
// function getData<T>(value:T):T{
//     return value;
// }

// alert(getData(123));
// alert(getData("阿三大发送颠覆"));


// function getData1<T>(value:T):any{
//     return "奥isj";
// }
// alert(getData1(123));
// alert(getData1("阿三大发送颠覆"));

//泛型类

// class MinClass{
//     public list:number[]=[];

//     add(num:number):void{
//         this.list.push(num);
//     }
//     min():number{
//         let minNum = this.list[0];
//         for(let i=1;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }

// let minClass = new MinClass();
// minClass.add(2);
// minClass.add(1);
// minClass.add(4);
// minClass.add(3);
// console.log(minClass.min());

// class MinClass<T>{
//     public list:T[]=[];

//     add(value:T):void{
//         this.list.push(value);
//         console.log(this.list);
//     }

//     min():T{
//         let minNum:T=this.list[0];
//         for(let i=1;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// let minClass = new MinClass<number>();
// minClass.add(2);
// minClass.add(1);
// minClass.add(4);
// minClass.add(3);
// console.log(minClass.min());


// let m = new MinClass<string>();
// m.add('a');
// m.add('b');
// m.add('c');
// m.add('d');
// console.log(m.min());

//泛型接口
//泛型函数接口, 写法1：
// interface ConfigFn{
//     (value1:string, value2:string):string;
// }

// let setData:ConfigFn=function(value1:string, value2:string):string{
//     return value1+value2;
// }

interface ConfigFn{
    <T>(value1:T):T;
}

let setData:ConfigFn=function<T>(value1:T):T{
    return value1;
}
//写法2：

interface ConfigFn1<T>{
    (value1:T):T;
}

function getData1<T>(value1:T):T{
    return value1;
}

let myData:ConfigFn1<string>=getData1;
myData('20');