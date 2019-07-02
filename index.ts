import{ dbUrl, getData as get, saveData as save} from './modules/less13模块'

console.log(dbUrl);
get();
save();

import {A} from './modules/less14命名空间'

let s = new A.Student('lele');
s.eat();
let c = new A.Child('xixi');
c.eat();
