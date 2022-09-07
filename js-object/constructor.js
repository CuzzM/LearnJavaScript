/**
 * 构造函数与普通方式的相同点与不同点
 * 相同点: 声明的方式相同
 * 不同点: 调用方式不同,构造函数使用new调用 
 */

function Star(name,age,fn){
    this.name = name;
    this.age = age;
    this.toString = fn
}

let star = new Star("zjw",18,function(){
    console.log(`{name = [${this.name}](${typeof(this.name)}),age = [${this.age}](${typeof(this.age)})}`)
});
star.toString()


/**
 * new的执行过程
 * 1. 解析new时程序会在内存中创建一个空对象{}
 * 2. 执行构造函数时,this就会执行这个空对象{}
 * 3. 执行构造函数里面的操作给构造函数添加属性和方法
 * 4. 返回对象实例
 */


/**
 * 遍历对象
 * for(let k in obj)
 */
let obj = {
    name: 'abc',
    age: 18,
    getMax: function(a,b){
        return a > b ? a : b
    }
}

for(let k in obj){
    console.log(`${k} = ${obj[k]}`)
}

