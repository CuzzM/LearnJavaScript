/**
 * 比较相邻的元素,如果arr[i] > arr[j]则交换
 * 外层循环变量i代表的是: 循环的次数
 * 内存循环变量j代表的是：数组的下标
 */
function bubbleSort(arr){
    let length = arr.length;
    for(let i = 1 ; i <= length; i++){
        let flag = false;
        for(let j = 0 ; j < length - i; j ++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
                flag = true;
            }
        }
        if(flag){
            console.log(`第${i}次遍历的结果`,arr);
        }
        if(!flag){
            console.log(`第${i}次遍历数组已经有序`)
            return;
        }
    }    
}

bubbleSort([4,3,2,1])



