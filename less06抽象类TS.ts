abstract class Animal{
    protected name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        alert(this.name + "吃狗粮");
    }
}

let dog=new Dog("小狗狗");
dog.eat();
