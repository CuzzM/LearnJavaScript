//遍历数组的几种方式
let arr1 = ['星期一','星期二','星期日']

//1.for循环
for(let i = 0 ; i < arr1.length ; i++){
    console.log(arr1[i])
}

//2.foreach
arr1.forEach(e => 
    console.log(e)
)

//3.let i in arr1
for(let i in arr1){
    //其中i是下标,如果遍历的是对象,则i为key
    console.log(arr1[i])
}

let student = {
    name: 'zjw',
    age: 18
}

for(let i in student){
    console.log(`key=[${i}],value=[${student[i]}]`)
}