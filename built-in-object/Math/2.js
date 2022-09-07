/**
 * 随机数
 * 1.返回两个数之间的随机整数
 * [min,max] ——> min + [0,max-min]
 */
function getRandomIntegerNumber(min,max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

