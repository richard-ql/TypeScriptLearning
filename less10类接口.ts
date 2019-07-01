//类接口, 对类的属性，方法的参数和返回类型进行约束
interface Animal1{
    name:string;
    eat(str:string):void;
}

class Dog1 implements Animal1{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(str:string):void{
        console.log(this.name + "吃" + str);
    }
}

let d=new Dog1("旺财");
d.eat("狗粮");
