function printTime(msg){
    console.log(msg,new Date());
}
let timer=setInterval(printTime,1000,"1초 간격");
setTimeout(() => {clearInterval(timer);}, 11000);
 
//1초 간격으로 현재 시각을 출력하는 코드 구현
//10번만 반복 호출하고 종료(clearInterval)구현 전역변수로 세기
//왜 9개만 뜨는 것이야...