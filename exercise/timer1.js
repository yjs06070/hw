function printTime(msg){
    console.log(msg,new Date());
}
let timer=setInterval(printTime,1000,"1초 간격");
setTimeout(()=>{clearInterval(timer)},11000);