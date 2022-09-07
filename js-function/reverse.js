/**
 * 反转数组
 */
function reverse(arr){
    let length = arr.length;
    for(let i = 0 ; i < length / 2 ; i++){
        //swap
        let temp = arr[i]
        arr[i] = arr[length - i - 1]
        arr[length - i - 1 ] = temp
    }
    return arr
}

let newArr = reverse([0,1,2])
console.log(newArr);