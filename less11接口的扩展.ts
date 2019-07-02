//接口可以继承
interface Person{
    eat():void;
}

interface Student extends Person{
    work():void;
}

class Programmer{
    public name:string;

    constructor(name:string){
        this.name = name;
    }

    coding(){
        console.log(this.name+"在编程");
    }
}

class Student4 extends Programmer implements Student{

    constructor(name:string){
        super(name);
    }

    eat(){
        console.log(this.name + "吃零食");
    }

    work(){
        console.log(this.name + "在工作");
    }
}

let s4 = new Student4("王华");
s4.eat();
s4.work();
s4.coding();
