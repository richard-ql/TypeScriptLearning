//对函数的传入参数，已经返回值 进行约束

interface encrypt{
    (key:string, value:string):string;
}

let md5:encrypt=function(key:string,value:string):string{
    return key+value;
}
console.log(md5('张三', '里斯'));
