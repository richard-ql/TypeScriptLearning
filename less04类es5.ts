// // es5中的类
// function Person(){
//     this.name = '张三';
//     this.age = 18;
// }

// var p=new Person();
// alert(p.name);

// //在构造函数和原型链上增加属性和方法,原型链上的属性会被多个实例共享，构造函数中的属性则不会

// function Person(){
//     this.name = "张三";
//     this.age = 28;

//     this.run=function(){
//         alert(this.name + "在运动");
//     }
// }
// Person.getInfo=function(){
//     alert('我是静态方法');
// }

// Person.prototype.sex="男";
// Person.prototype.work=function(){
//     alert(this.name + '在工作');
// }
// var p=new Person();
// alert(p.sex);
// p.work();
// Person.getInfo();

//es5中对象的继承 原型链+对象冒充的组合继承模式

    // function Person(){
    //     this.name = "张三";
    //     this.age = 28;

    //     this.run=function(){
    //         alert(this.name + "在运动");
    //     }
    // }
    // Person.prototype.sex="男";
    // Person.prototype.work=function(){
    //     alert(this.name + '在工作');
    // }

    // function Student(){
    //     Person.call(this); //对象冒充实现继承
    // }
    // // var s = new Student();
    // // s.run(); //对象冒充可以继承构造函数里的属性和方法
    // // alert(s.sex); //对象冒充无法继承原型链的属性
    // // s.work(); //对象冒充无法继承原型链的方法

    // //原型链继承可以继承构造函数和原型链的属性和方法
    // function Student1(){

    // }
    // Student1.prototype=new Person();
    // var s1=new Student1();
    // s1.run();
    // alert(s1.sex);
    // s1.work();


// //原型链继承模式，无法在子类实例化的时候给父类传参
// function Person(name, age){
//     this.name = name;
//     this.age = age;

//     this.run=function(){
//         alert(this.name + 'run');
//     }
// }

// function Student(name, age){

// }
// Student.prototype=new Person();
// var s = new Student("张三", 22);
// s.run();

// //解决办法就是原型链+对象冒充组合继承
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.run=function(){
//         alert(this.name + "  run");
//     }
// }

// Person.prototype.work=function(){
//     alert(this.name + "   work");
// }

// function Student(name, age){
//     Person.call(this, name, age);
// }

// // Student.prototype=new Person();
// Student.prototype=Person.prototype;//另外一种写法
// var s = new Student("zhangsan", 26);
// s.run();
// s.work();
