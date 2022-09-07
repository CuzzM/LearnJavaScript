/**
 * 返回数组的最大值
 */
let arr = [1,2,3,4,5]

function getMax(arr){
    let max = arr[0]
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}
console.log(getMax(arr));

console.log(Math.max(1,2,3))

//使用扩展运算符
console.log(Math.max(...arr));

//封装自己的Math
const myMath = {
    PI: 3.1415926,
    max: function(){
        if(arguments.length === 0){
            return -Infinity
        }
        let max = Number.MIN_VALUE;
        for(let i = 0 ; i < arguments.length ; i++){
            if(typeof(arguments[i]) != 'number'){
                return NaN
            }
            if(arguments[i] > max){
                max = arguments[i]
            }
        }
        return max;
    }
}
console.log(myMath.max())

console.log(Math.floor(1.1));
console.log(Math.ceil(1.1));
console.log(Math.round(1.1));