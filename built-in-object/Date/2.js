/**
 * 倒计时
 * @param {date} plannedTime 设置的一个未来时间 
 */
function countDown(plannedTime){
    let nowTimeStamp = + new Date()
    let plannedTimeStamp = +new Date(plannedTime)
    let second = Math.floor((plannedTimeStamp - nowTimeStamp) / 1000);
    let k1 = 24 * 60 * 60;
    let k2 = 60 * 60
    let k3 = 60
    let days = parseInt(second / k1)
    let hours = parseInt((second % k1) / k2)
    let minutes = parseInt(((second % k1) % k2) / k3)
    let seconds = parseInt(((second % k1) % k2) % k3)
    console.log(`倒计时${days}天${hours}小时${minutes}分钟${seconds}秒`);
}


setInterval(() => {
    countDown('2022-9-7 16:00:00');
}, 1000);

