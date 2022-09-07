/**
 * Date的基本使用
 */

//1.获取当前系统时间
let time1 = new Date();
console.log(time1);

//2.常用构造函数
let time2 = new Date('2022-09-07')
console.log(time2);

//3.格式化日期 yyyy-MM-dd HH:mm:ss
function formatDate(date){
    let yy = date.getFullYear();
    let MM = date.getMonth() + 1;   
    let dd = date.getDate();
    let HH = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let newArr = addZero([yy,MM,dd,HH,mm,ss])
    return `${newArr[0]}-${newArr[1]}-${newArr[2]} ${newArr[3]}:${newArr[4]}:${newArr[5]}`
}

function addZero(arr){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] < 10){
            arr[i] = '0' + arr[i]
        }
    }
    return arr
}

console.log(formatDate(new Date()));
console.log(new Date('2022-09-07 14:55:47'))



/**
 * 获得时间戳的几种方式
 */
console.log(new Date().valueOf());
console.log(new Date().getTime());
console.log(+new Date());
// H5新增的
console.log(Date.now());