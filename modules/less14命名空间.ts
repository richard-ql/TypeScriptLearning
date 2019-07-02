export namespace A{
    interface Person{
        name:string;
        eat():void;
    }

    export class Student implements Person{
        name:string;

        constructor(name:string){
            this.name = name;
        }
        eat():void{
            console.log(this.name+"在喝酸奶");
        }
    }

    export class Child implements Person{
        name:string;

        constructor(name:string){
            this.name = name;
        }

        eat():void{
            console.log(this.name+"再吃棒棒糖")
        }
    }
}

