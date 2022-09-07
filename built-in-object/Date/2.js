/**
 * 倒计时
 * @param {date} plannedTime 设置的一个未来时间 
 */
function countDown(plannedTime){
    let nowTimeStamp = + new Date()
    let plannedTimeStamp = +new Date(plannedTime)
    let second = (plannedTimeStamp - nowTimeStamp) / 1000;
    let days = parseInt(second / 60 / 60 / 24)
    let hours = parseInt(second / 60 / 60 % 24)
    let minutes = parseInt(second / 60 % 60)
    let seconds = parseInt(second % 60)
    console.log(`倒计时${days}天${hours}小时${minutes}分钟${seconds}秒`);
}


setInterval(() => {
    countDown('2022-9-7 16:15:00');
}, 1000);

