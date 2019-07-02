// export let dbUrl="xxxxxx";

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

let dbUrl="xxxxxx";

function getData():any[]{
    console.log("getData......");
    return [{
        title: '论文1'
    },{
        title: '论文2'
    }]
}

function saveData(){
    console.log("save data....");
}

export {dbUrl, getData, saveData};

// export default 一个模块只能使用一次
// export default getData;

// //引入的时候
// import getData from "./modules/db";