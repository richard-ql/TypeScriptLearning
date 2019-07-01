//可索引接口， 对数组 以及 对象进行约束

interface UserArr{
    [index:number]:string;
}

let ar:UserArr=['123', '456'];
console.log(ar[0]);
