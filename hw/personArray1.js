let persons={ };
function createPerson(s,i){
    return{name:s,age:i};
}
for(let i=0;i<10;i++){
persons[i]=createPerson("홍길동",16);
console.log(persons[i]);
} 
//비어있는 persons 배열을 생성
//for 루프의 본문에서 persons 배열의 끝에 {name:"홍길동",age:16}객체 추가
//for루프를 10번 반복한다.
//persons 배열을 출력한다.