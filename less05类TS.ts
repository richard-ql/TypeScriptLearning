class Person1{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    run():void{
        alert(this.name + "  run");
    }

    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name=name;
    }
}

var p1 = new Person1("zhangsi");
p1.run();
alert(p1.getName());
p1.setName('lisi');
alert(p1.getName());

//ts中的继承 extends super

class Student1 extends Person1{
    constructor(name:string){
        super(name);
    }

    run():void{
        alert(this.name + "  run 子类");
    }
    work():string{
        return this.name + "  work";
    }
}
var s=new Student1('继承');
s.run();
alert(s.work());

// 类的属性访问修饰符
// public     在类的内部，子类，类的外部 可以访问
// protected  在类的内部，子类 可以访问， 类的外部 不可以访问
// private    在类的内部 可以访问， 子类，类的外部 不可以访问
// 默认是public


//静态属性和方法

class Person2{
    private name:string;
    static sex:string="男"; //静态属性

    constructor(name:string){
        this.name = name;
    }

    run():void{
        alert(this.name + "  run");
    }
    static print():void{
        alert("print静态方法")
    }
}

var p1 = new Person1("zhangsi");
p1.run();
alert(p1.getName());
p1.setName('lisi');
alert(p1.getName());