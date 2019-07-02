"use strict";
// export let dbUrl="xxxxxx";
Object.defineProperty(exports, "__esModule", { value: true });
// export function getData():any[]{
//     console.log("getData......");
//     return [{
//         title: '论文1'
//     },{
//         title: '论文2'
//     }]
// }
// export function saveData(){
//     console.log("save data....");
// }
var dbUrl = "xxxxxx";
exports.dbUrl = dbUrl;
function getData() {
    console.log("getData......");
    return [{
            title: '论文1'
        }, {
            title: '论文2'
        }];
}
exports.getData = getData;
function saveData() {
    console.log("save data....");
}
exports.saveData = saveData;
// export default 一个模块只能使用一次
// export default getData;
// //引入的时候
// import getData from "./modules/db";
