/**
 * 求数组的和以及平均值
 */
let arr = [1,2,3,4]

function getArraySum1(arr){
    let sum = 0
    for(let i = 0 ; i < arr.length;i++){
        sum += arr[i]
    }
    return sum
}

// 具体过程,执行代码即可知道
function getArraySum2(arr){
    return arr.reduce( (previousValue,currentValue,currentIndex) => {
        console.log(`过去值=[${previousValue}],当前值=[${currentValue}],当前索引=[${currentIndex}]`)
        return previousValue + currentValue
    },0)
}

console.log(getArraySum2(arr))

